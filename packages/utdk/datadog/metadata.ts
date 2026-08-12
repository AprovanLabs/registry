import type { ToolRuntimeMetadataMap } from "../client.js";

export const toolMetadata = {
  "ListFleetAgentVersions": {
    "accessPath": [
      "listFleetAgentVersions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/unstable/fleet/agent_versions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List all available Agent versions"
  },
  "ListFleetAgents": {
    "accessPath": [
      "listFleetAgents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/unstable/fleet/agents",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page_number",
      "page_size",
      "sort_attribute",
      "sort_descending",
      "tags",
      "filter"
    ],
    "description": "List all Datadog Agents",
    "parameterDescriptions": {
      "page_number": "Page number for pagination (starts at 0).",
      "page_size": "Number of results per page (must be greater than 0 and less than or equal to 100).",
      "sort_attribute": "Attribute to sort by.",
      "sort_descending": "Sort order (true for descending, false for ascending).",
      "tags": "Comma-separated list of tags to filter agents.",
      "filter": "Filter string for narrowing down agent results."
    }
  },
  "GetFleetAgentInfo": {
    "accessPath": [
      "getFleetAgentInfo"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/unstable/fleet/agents/{agent_key}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get detailed information about an agent",
    "parameterDescriptions": {
      "agent_key": "The unique identifier (agent key) for the Datadog Agent."
    }
  },
  "ListFleetDeployments": {
    "accessPath": [
      "listFleetDeployments"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/unstable/fleet/deployments",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page_size",
      "page_offset"
    ],
    "description": "List all deployments",
    "parameterDescriptions": {
      "page_size": "Number of deployments to return per page. Maximum value is 100.",
      "page_offset": "Index of the first deployment to return. Use this with `page_size` to paginate through results."
    }
  },
  "CreateFleetDeploymentConfigure": {
    "accessPath": [
      "createFleetDeploymentConfigure"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/unstable/fleet/deployments/configure",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a configuration deployment"
  },
  "CreateFleetDeploymentUpgrade": {
    "accessPath": [
      "createFleetDeploymentUpgrade"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/unstable/fleet/deployments/upgrade",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Upgrade hosts"
  },
  "GetFleetDeployment": {
    "accessPath": [
      "getFleetDeployment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/unstable/fleet/deployments/{deployment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "page"
    ],
    "description": "Get a configuration deployment by ID",
    "parameterDescriptions": {
      "deployment_id": "The unique identifier of the deployment to retrieve.",
      "limit": "Maximum number of hosts to return per page. Default is 50, maximum is 100.",
      "page": "Page index for pagination (zero-based). Use this to retrieve subsequent pages of hosts."
    }
  },
  "CancelFleetDeployment": {
    "accessPath": [
      "cancelFleetDeployment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/unstable/fleet/deployments/{deployment_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel a deployment",
    "parameterDescriptions": {
      "deployment_id": "The unique identifier of the deployment to cancel."
    }
  },
  "ListFleetSchedules": {
    "accessPath": [
      "listFleetSchedules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/unstable/fleet/schedules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List all schedules"
  },
  "CreateFleetSchedule": {
    "accessPath": [
      "createFleetSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/unstable/fleet/schedules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a schedule"
  },
  "DeleteFleetSchedule": {
    "accessPath": [
      "deleteFleetSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/unstable/fleet/schedules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a schedule",
    "parameterDescriptions": {
      "id": "The unique identifier of the schedule to delete."
    }
  },
  "GetFleetSchedule": {
    "accessPath": [
      "getFleetSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/unstable/fleet/schedules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a schedule by ID",
    "parameterDescriptions": {
      "id": "The unique identifier of the schedule to retrieve."
    }
  },
  "UpdateFleetSchedule": {
    "accessPath": [
      "updateFleetSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/unstable/fleet/schedules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a schedule",
    "parameterDescriptions": {
      "id": "The unique identifier of the schedule to update."
    }
  },
  "TriggerFleetSchedule": {
    "accessPath": [
      "triggerFleetSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/unstable/fleet/schedules/{id}/trigger",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Trigger a schedule deployment",
    "parameterDescriptions": {
      "id": "The unique identifier of the schedule to trigger."
    }
  },
  "ListDatastores": {
    "accessPath": [
      "listDatastores"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/actions-datastores",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List datastores"
  },
  "CreateDatastore": {
    "accessPath": [
      "createDatastore"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/actions-datastores",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create datastore"
  },
  "DeleteDatastore": {
    "accessPath": [
      "deleteDatastore"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/actions-datastores/{datastore_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "datastore_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete datastore",
    "parameterDescriptions": {
      "datastore_id": "The unique identifier of the datastore to retrieve."
    }
  },
  "GetDatastore": {
    "accessPath": [
      "getDatastore"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/actions-datastores/{datastore_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "datastore_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get datastore",
    "parameterDescriptions": {
      "datastore_id": "The unique identifier of the datastore to retrieve."
    }
  },
  "UpdateDatastore": {
    "accessPath": [
      "updateDatastore"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/actions-datastores/{datastore_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "datastore_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update datastore",
    "parameterDescriptions": {
      "datastore_id": "The unique identifier of the datastore to retrieve."
    }
  },
  "DeleteDatastoreItem": {
    "accessPath": [
      "deleteDatastoreItem"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/actions-datastores/{datastore_id}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "datastore_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete datastore item",
    "parameterDescriptions": {
      "datastore_id": "The unique identifier of the datastore to retrieve."
    }
  },
  "ListDatastoreItems": {
    "accessPath": [
      "listDatastoreItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/actions-datastores/{datastore_id}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "datastore_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter",
      "item_key",
      "page[limit]",
      "page[offset]",
      "sort"
    ],
    "description": "List datastore items",
    "parameterDescriptions": {
      "datastore_id": "The unique identifier of the datastore to retrieve.",
      "filter": "Optional query filter to search items using the [logs search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).",
      "item_key": "Optional primary key value to retrieve a specific item. Cannot be used together with the filter parameter.",
      "page[limit]": "Optional field to limit the number of items to return per page for pagination. Up to 100 items can be returned per page.",
      "page[offset]": "Optional field to offset the number of items to skip from the beginning of the result set for pagination.",
      "sort": "Optional field to sort results by. Prefix with '-' for descending order (e.g., '-created_at')."
    }
  },
  "UpdateDatastoreItem": {
    "accessPath": [
      "updateDatastoreItem"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/actions-datastores/{datastore_id}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "datastore_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update datastore item",
    "parameterDescriptions": {
      "datastore_id": "The unique identifier of the datastore to retrieve."
    }
  },
  "BulkDeleteDatastoreItems": {
    "accessPath": [
      "bulkDeleteDatastoreItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/actions-datastores/{datastore_id}/items/bulk",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "datastore_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Bulk delete datastore items",
    "parameterDescriptions": {
      "datastore_id": "The ID of the datastore."
    }
  },
  "BulkWriteDatastoreItems": {
    "accessPath": [
      "bulkWriteDatastoreItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/actions-datastores/{datastore_id}/items/bulk",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "datastore_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Bulk write datastore items",
    "parameterDescriptions": {
      "datastore_id": "The unique identifier of the datastore to retrieve."
    }
  },
  "ListAppKeyRegistrations": {
    "accessPath": [
      "listAppKeyRegistrations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/actions/app_key_registrations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]"
    ],
    "description": "List App Key Registrations",
    "parameterDescriptions": {
      "page[size]": "The number of App Key Registrations to return per page.",
      "page[number]": "The page number to return."
    }
  },
  "UnregisterAppKey": {
    "accessPath": [
      "unregisterAppKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/actions/app_key_registrations/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Unregister an App Key",
    "parameterDescriptions": {
      "app_key_id": "The ID of the app key"
    }
  },
  "GetAppKeyRegistration": {
    "accessPath": [
      "getAppKeyRegistration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/actions/app_key_registrations/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an existing App Key Registration",
    "parameterDescriptions": {
      "app_key_id": "The ID of the app key"
    }
  },
  "RegisterAppKey": {
    "accessPath": [
      "registerAppKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/actions/app_key_registrations/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Register a new App Key",
    "parameterDescriptions": {
      "app_key_id": "The ID of the app key"
    }
  },
  "CreateActionConnection": {
    "accessPath": [
      "createActionConnection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/actions/connections",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new Action Connection"
  },
  "DeleteActionConnection": {
    "accessPath": [
      "deleteActionConnection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/actions/connections/{connection_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "connection_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an existing Action Connection",
    "parameterDescriptions": {
      "connection_id": "The ID of the action connection"
    }
  },
  "GetActionConnection": {
    "accessPath": [
      "getActionConnection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/actions/connections/{connection_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "connection_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an existing Action Connection",
    "parameterDescriptions": {
      "connection_id": "The ID of the action connection"
    }
  },
  "UpdateActionConnection": {
    "accessPath": [
      "updateActionConnection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/actions/connections/{connection_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "connection_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an existing Action Connection",
    "parameterDescriptions": {
      "connection_id": "The ID of the action connection"
    }
  },
  "ListAwsScanOptions": {
    "accessPath": [
      "listAwsScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/aws",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List AWS scan options"
  },
  "CreateAwsScanOptions": {
    "accessPath": [
      "createAwsScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/aws",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create AWS scan options"
  },
  "DeleteAwsScanOptions": {
    "accessPath": [
      "deleteAwsScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/aws/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete AWS scan options",
    "parameterDescriptions": {
      "account_id": "The ID of an AWS account."
    }
  },
  "GetAwsScanOptions": {
    "accessPath": [
      "getAwsScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/aws/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get AWS scan options",
    "parameterDescriptions": {
      "account_id": "The ID of an AWS account."
    }
  },
  "UpdateAwsScanOptions": {
    "accessPath": [
      "updateAwsScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/aws/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update AWS scan options",
    "parameterDescriptions": {
      "account_id": "The ID of an AWS account."
    }
  },
  "ListAzureScanOptions": {
    "accessPath": [
      "listAzureScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/azure",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Azure scan options"
  },
  "CreateAzureScanOptions": {
    "accessPath": [
      "createAzureScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/azure",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Azure scan options"
  },
  "DeleteAzureScanOptions": {
    "accessPath": [
      "deleteAzureScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/azure/{subscription_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "subscription_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Azure scan options",
    "parameterDescriptions": {
      "subscription_id": "The Azure subscription ID."
    }
  },
  "GetAzureScanOptions": {
    "accessPath": [
      "getAzureScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/azure/{subscription_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "subscription_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Azure scan options",
    "parameterDescriptions": {
      "subscription_id": "The Azure subscription ID."
    }
  },
  "UpdateAzureScanOptions": {
    "accessPath": [
      "updateAzureScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/azure/{subscription_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "subscription_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Azure scan options",
    "parameterDescriptions": {
      "subscription_id": "The Azure subscription ID."
    }
  },
  "ListGcpScanOptions": {
    "accessPath": [
      "listGcpScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/gcp",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List GCP scan options"
  },
  "CreateGcpScanOptions": {
    "accessPath": [
      "createGcpScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/gcp",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create GCP scan options"
  },
  "DeleteGcpScanOptions": {
    "accessPath": [
      "deleteGcpScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/gcp/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete GCP scan options",
    "parameterDescriptions": {
      "project_id": "The GCP project ID."
    }
  },
  "GetGcpScanOptions": {
    "accessPath": [
      "getGcpScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/gcp/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get GCP scan options",
    "parameterDescriptions": {
      "project_id": "The GCP project ID."
    }
  },
  "UpdateGcpScanOptions": {
    "accessPath": [
      "updateGcpScanOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/agentless_scanning/accounts/gcp/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update GCP scan options",
    "parameterDescriptions": {
      "project_id": "The GCP project ID."
    }
  },
  "ListAwsOnDemandTasks": {
    "accessPath": [
      "listAwsOnDemandTasks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/agentless_scanning/ondemand/aws",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List AWS on demand tasks"
  },
  "CreateAwsOnDemandTask": {
    "accessPath": [
      "createAwsOnDemandTask"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/agentless_scanning/ondemand/aws",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create AWS on demand task"
  },
  "GetAwsOnDemandTask": {
    "accessPath": [
      "getAwsOnDemandTask"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/agentless_scanning/ondemand/aws/{task_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "task_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get AWS on demand task",
    "parameterDescriptions": {
      "task_id": "The UUID of the task."
    }
  },
  "ListAPIKeys": {
    "accessPath": [
      "listApiKeys"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/api_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort",
      "filter",
      "filter[created_at][start]",
      "filter[created_at][end]",
      "filter[modified_at][start]",
      "filter[modified_at][end]",
      "include",
      "filter[remote_config_read_enabled]",
      "filter[category]"
    ],
    "description": "Get all API keys",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "sort": "API key attribute used to sort results. Sort order is ascending\nby default. In order to specify a descending sort, prefix the\nattribute with a minus sign.",
      "filter": "Filter API keys by the specified string.",
      "filter[created_at][start]": "Only include API keys created on or after the specified date.",
      "filter[created_at][end]": "Only include API keys created on or before the specified date.",
      "filter[modified_at][start]": "Only include API keys modified on or after the specified date.",
      "filter[modified_at][end]": "Only include API keys modified on or before the specified date.",
      "include": "Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`.",
      "filter[remote_config_read_enabled]": "Filter API keys by remote config read enabled status.",
      "filter[category]": "Filter API keys by category."
    }
  },
  "CreateAPIKey": {
    "accessPath": [
      "createApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/api_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an API key"
  },
  "DeleteAPIKey": {
    "accessPath": [
      "deleteApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/api_keys/{api_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "api_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an API key",
    "parameterDescriptions": {
      "api_key_id": "The ID of the API key."
    }
  },
  "GetAPIKey": {
    "accessPath": [
      "getApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/api_keys/{api_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "api_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get API key",
    "parameterDescriptions": {
      "api_key_id": "The ID of the API key.",
      "include": "Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`."
    }
  },
  "UpdateAPIKey": {
    "accessPath": [
      "updateApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/api_keys/{api_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "api_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Edit an API key",
    "parameterDescriptions": {
      "api_key_id": "The ID of the API key."
    }
  },
  "ListAPIs": {
    "accessPath": [
      "listApIs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/apicatalog/api",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "query",
      "page[limit]",
      "page[offset]"
    ],
    "description": "List APIs",
    "parameterDescriptions": {
      "query": "Filter APIs by name",
      "page[limit]": "Number of items per page.",
      "page[offset]": "Offset for pagination."
    }
  },
  "DeleteOpenAPI": {
    "accessPath": [
      "deleteOpenApi"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/apicatalog/api/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an API",
    "parameterDescriptions": {
      "id": "ID of the API to delete"
    }
  },
  "GetOpenAPI": {
    "accessPath": [
      "getOpenApi"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/apicatalog/api/{id}/openapi",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an API",
    "parameterDescriptions": {
      "id": "ID of the API to retrieve"
    }
  },
  "UpdateOpenAPI": {
    "accessPath": [
      "updateOpenApi"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "openapi_spec_file"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/apicatalog/api/{id}/openapi",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an API",
    "parameterDescriptions": {
      "id": "ID of the API to modify"
    }
  },
  "CreateOpenAPI": {
    "accessPath": [
      "createOpenApi"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "openapi_spec_file"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/apicatalog/openapi",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new API"
  },
  "ListSpansMetrics": {
    "accessPath": [
      "listSpansMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/apm/config/metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all span-based metrics"
  },
  "CreateSpansMetric": {
    "accessPath": [
      "createSpansMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/apm/config/metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a span-based metric"
  },
  "DeleteSpansMetric": {
    "accessPath": [
      "deleteSpansMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/apm/config/metrics/{metric_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a span-based metric",
    "parameterDescriptions": {
      "metric_id": "The name of the span-based metric."
    }
  },
  "GetSpansMetric": {
    "accessPath": [
      "getSpansMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/apm/config/metrics/{metric_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a span-based metric",
    "parameterDescriptions": {
      "metric_id": "The name of the span-based metric."
    }
  },
  "UpdateSpansMetric": {
    "accessPath": [
      "updateSpansMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/apm/config/metrics/{metric_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a span-based metric",
    "parameterDescriptions": {
      "metric_id": "The name of the span-based metric."
    }
  },
  "ListApmRetentionFilters": {
    "accessPath": [
      "listApmRetentionFilters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/apm/config/retention-filters",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List all APM retention filters"
  },
  "CreateApmRetentionFilter": {
    "accessPath": [
      "createApmRetentionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/apm/config/retention-filters",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a retention filter"
  },
  "ReorderApmRetentionFilters": {
    "accessPath": [
      "reorderApmRetentionFilters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/apm/config/retention-filters-execution-order",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Re-order retention filters"
  },
  "DeleteApmRetentionFilter": {
    "accessPath": [
      "deleteApmRetentionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/apm/config/retention-filters/{filter_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "filter_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a retention filter",
    "parameterDescriptions": {
      "filter_id": "The ID of the retention filter."
    }
  },
  "GetApmRetentionFilter": {
    "accessPath": [
      "getApmRetentionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/apm/config/retention-filters/{filter_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "filter_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a given APM retention filter",
    "parameterDescriptions": {
      "filter_id": "The ID of the retention filter."
    }
  },
  "UpdateApmRetentionFilter": {
    "accessPath": [
      "updateApmRetentionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/apm/config/retention-filters/{filter_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "filter_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a retention filter",
    "parameterDescriptions": {
      "filter_id": "The ID of the retention filter."
    }
  },
  "GetServiceList": {
    "accessPath": [
      "getServiceList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/apm/services",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[env]"
    ],
    "description": "Get service list",
    "parameterDescriptions": {
      "filter[env]": "Filter services by environment. Can be set to `*` to return all services across all environments."
    }
  },
  "DeleteApps": {
    "accessPath": [
      "deleteApps"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/app-builder/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Multiple Apps"
  },
  "ListApps": {
    "accessPath": [
      "listApps"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/app-builder/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "page",
      "filter[user_name]",
      "filter[user_uuid]",
      "filter[name]",
      "filter[query]",
      "filter[deployed]",
      "filter[tags]",
      "filter[favorite]",
      "filter[self_service]",
      "sort"
    ],
    "description": "List Apps",
    "parameterDescriptions": {
      "limit": "The number of apps to return per page.",
      "page": "The page number to return.",
      "filter[user_name]": "Filter apps by the app creator. Usually the user's email.",
      "filter[user_uuid]": "Filter apps by the app creator's UUID.",
      "filter[name]": "Filter by app name.",
      "filter[query]": "Filter apps by the app name or the app creator.",
      "filter[deployed]": "Filter apps by whether they are published.",
      "filter[tags]": "Filter apps by tags.",
      "filter[favorite]": "Filter apps by whether you have added them to your favorites.",
      "filter[self_service]": "Filter apps by whether they are enabled for self-service.",
      "sort": "The fields and direction to sort apps by."
    }
  },
  "CreateApp": {
    "accessPath": [
      "createApp"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/app-builder/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create App"
  },
  "DeleteApp": {
    "accessPath": [
      "deleteApp"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/app-builder/apps/{app_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete App",
    "parameterDescriptions": {
      "app_id": "The ID of the app to delete."
    }
  },
  "GetApp": {
    "accessPath": [
      "getApp"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/app-builder/apps/{app_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "version"
    ],
    "description": "Get App",
    "parameterDescriptions": {
      "app_id": "The ID of the app to retrieve.",
      "version": "The version number of the app to retrieve. If not specified, the latest version is returned. Version numbers start at 1 and increment with each update. The special values `latest` and `deployed` can be used to retrieve the latest version or the published version, respectively."
    }
  },
  "UpdateApp": {
    "accessPath": [
      "updateApp"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/app-builder/apps/{app_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update App",
    "parameterDescriptions": {
      "app_id": "The ID of the app to update."
    }
  },
  "UnpublishApp": {
    "accessPath": [
      "unpublishApp"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/app-builder/apps/{app_id}/deployment",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Unpublish App",
    "parameterDescriptions": {
      "app_id": "The ID of the app to unpublish."
    }
  },
  "PublishApp": {
    "accessPath": [
      "publishApp"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/app-builder/apps/{app_id}/deployment",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Publish App",
    "parameterDescriptions": {
      "app_id": "The ID of the app to publish."
    }
  },
  "ListApplicationKeys": {
    "accessPath": [
      "listApplicationKeys"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/application_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort",
      "filter",
      "filter[created_at][start]",
      "filter[created_at][end]",
      "include"
    ],
    "description": "Get all application keys",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "sort": "Application key attribute used to sort results. Sort order is ascending\nby default. In order to specify a descending sort, prefix the\nattribute with a minus sign.",
      "filter": "Filter application keys by the specified string.",
      "filter[created_at][start]": "Only include application keys created on or after the specified date.",
      "filter[created_at][end]": "Only include application keys created on or before the specified date.",
      "include": "Resource path for related resources to include in the response. Only `owned_by` is supported."
    }
  },
  "DeleteApplicationKey": {
    "accessPath": [
      "deleteApplicationKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/application_keys/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an application key",
    "parameterDescriptions": {
      "app_key_id": "The ID of the application key."
    }
  },
  "GetApplicationKey": {
    "accessPath": [
      "getApplicationKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/application_keys/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get an application key",
    "parameterDescriptions": {
      "app_key_id": "The ID of the application key.",
      "include": "Resource path for related resources to include in the response. Only `owned_by` is supported."
    }
  },
  "UpdateApplicationKey": {
    "accessPath": [
      "updateApplicationKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/application_keys/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Edit an application key",
    "parameterDescriptions": {
      "app_key_id": "The ID of the application key."
    }
  },
  "ListAuditLogs": {
    "accessPath": [
      "listAuditLogs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/audit/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[query]",
      "filter[from]",
      "filter[to]",
      "sort",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "Get a list of Audit Logs events",
    "parameterDescriptions": {
      "filter[query]": "Search query following Audit Logs syntax.",
      "filter[from]": "Minimum timestamp for requested events.",
      "filter[to]": "Maximum timestamp for requested events.",
      "sort": "Order of events in results.",
      "page[cursor]": "List following results with a cursor provided in the previous query.",
      "page[limit]": "Maximum number of events in the response."
    }
  },
  "SearchAuditLogs": {
    "accessPath": [
      "searchAuditLogs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "filter",
      "options",
      "page",
      "sort"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/audit/events/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Search Audit Logs events"
  },
  "ListAuthNMappings": {
    "accessPath": [
      "listAuthNMappings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/authn_mappings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort",
      "filter",
      "resource_type"
    ],
    "description": "List all AuthN Mappings",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "sort": "Sort AuthN Mappings depending on the given field.",
      "filter": "Filter all mappings by the given string.",
      "resource_type": "Filter by mapping resource type. Defaults to \"role\" if not specified."
    }
  },
  "CreateAuthNMapping": {
    "accessPath": [
      "createAuthNMapping"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/authn_mappings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an AuthN Mapping"
  },
  "DeleteAuthNMapping": {
    "accessPath": [
      "deleteAuthNMapping"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/authn_mappings/{authn_mapping_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "authn_mapping_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an AuthN Mapping",
    "parameterDescriptions": {
      "authn_mapping_id": "The UUID of the AuthN Mapping."
    }
  },
  "GetAuthNMapping": {
    "accessPath": [
      "getAuthNMapping"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/authn_mappings/{authn_mapping_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "authn_mapping_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an AuthN Mapping by UUID",
    "parameterDescriptions": {
      "authn_mapping_id": "The UUID of the AuthN Mapping."
    }
  },
  "UpdateAuthNMapping": {
    "accessPath": [
      "updateAuthNMapping"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/authn_mappings/{authn_mapping_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "authn_mapping_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Edit an AuthN Mapping",
    "parameterDescriptions": {
      "authn_mapping_id": "The UUID of the AuthN Mapping."
    }
  },
  "SearchCases": {
    "accessPath": [
      "searchCases"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort[field]",
      "filter",
      "sort[asc]"
    ],
    "description": "Search cases",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "sort[field]": "Specify which field to sort",
      "filter": "Search query",
      "sort[asc]": "Specify if order is ascending or not"
    }
  },
  "CreateCase": {
    "accessPath": [
      "createCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a case"
  },
  "GetProjects": {
    "accessPath": [
      "getProjects"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cases/projects",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all projects"
  },
  "CreateProject": {
    "accessPath": [
      "createProject"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/projects",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a project"
  },
  "DeleteProject": {
    "accessPath": [
      "deleteProject"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cases/projects/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove a project",
    "parameterDescriptions": {
      "project_id": "Project UUID."
    }
  },
  "GetProject": {
    "accessPath": [
      "getProject"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cases/projects/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the details of a project",
    "parameterDescriptions": {
      "project_id": "Project UUID."
    }
  },
  "UpdateProject": {
    "accessPath": [
      "updateProject"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/cases/projects/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a project",
    "parameterDescriptions": {
      "project_id": "Project UUID."
    }
  },
  "GetProjectNotificationRules": {
    "accessPath": [
      "getProjectNotificationRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cases/projects/{project_id}/notification_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get notification rules",
    "parameterDescriptions": {
      "project_id": "Project UUID"
    }
  },
  "CreateProjectNotificationRule": {
    "accessPath": [
      "createProjectNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/projects/{project_id}/notification_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a notification rule",
    "parameterDescriptions": {
      "project_id": "Project UUID"
    }
  },
  "DeleteProjectNotificationRule": {
    "accessPath": [
      "deleteProjectNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cases/projects/{project_id}/notification_rules/{notification_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "notification_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a notification rule",
    "parameterDescriptions": {
      "project_id": "Project UUID",
      "notification_rule_id": "Notification Rule UUID"
    }
  },
  "UpdateProjectNotificationRule": {
    "accessPath": [
      "updateProjectNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/cases/projects/{project_id}/notification_rules/{notification_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "notification_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a notification rule",
    "parameterDescriptions": {
      "project_id": "Project UUID",
      "notification_rule_id": "Notification Rule UUID"
    }
  },
  "GetAllCaseTypes": {
    "accessPath": [
      "getAllCaseTypes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cases/types",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all case types"
  },
  "CreateCaseType": {
    "accessPath": [
      "createCaseType"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/types",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a case type"
  },
  "GetAllCustomAttributes": {
    "accessPath": [
      "getAllCustomAttributes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cases/types/custom_attributes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all custom attributes"
  },
  "DeleteCaseType": {
    "accessPath": [
      "deleteCaseType"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cases/types/{case_type_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_type_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a case type",
    "parameterDescriptions": {
      "case_type_id": "Case type's UUID"
    }
  },
  "GetAllCustomAttributeConfigsByCaseType": {
    "accessPath": [
      "getAllCustomAttributeConfigsByCaseType"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cases/types/{case_type_id}/custom_attributes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_type_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all custom attributes config of case type",
    "parameterDescriptions": {
      "case_type_id": "Case type's UUID"
    }
  },
  "CreateCustomAttributeConfig": {
    "accessPath": [
      "createCustomAttributeConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/types/{case_type_id}/custom_attributes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_type_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create custom attribute config for a case type",
    "parameterDescriptions": {
      "case_type_id": "Case type's UUID"
    }
  },
  "DeleteCustomAttributeConfig": {
    "accessPath": [
      "deleteCustomAttributeConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cases/types/{case_type_id}/custom_attributes/{custom_attribute_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_type_id",
      "custom_attribute_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete custom attributes config",
    "parameterDescriptions": {
      "case_type_id": "Case type's UUID",
      "custom_attribute_id": "Case Custom attribute's UUID"
    }
  },
  "GetCase": {
    "accessPath": [
      "getCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cases/{case_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the details of a case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "ArchiveCase": {
    "accessPath": [
      "archiveCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/archive",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Archive case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "AssignCase": {
    "accessPath": [
      "assignCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/assign",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Assign case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "UpdateAttributes": {
    "accessPath": [
      "updateAttributes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/attributes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update case attributes",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "CommentCase": {
    "accessPath": [
      "commentCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/comment",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Comment case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "DeleteCaseComment": {
    "accessPath": [
      "deleteCaseComment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cases/{case_id}/comment/{cell_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id",
      "cell_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete case comment",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key",
      "cell_id": "Timeline cell's UUID"
    }
  },
  "DeleteCaseCustomAttribute": {
    "accessPath": [
      "deleteCaseCustomAttribute"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cases/{case_id}/custom_attributes/{custom_attribute_key}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id",
      "custom_attribute_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete custom attribute from case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key",
      "custom_attribute_key": "Case Custom attribute's key"
    }
  },
  "UpdateCaseCustomAttribute": {
    "accessPath": [
      "updateCaseCustomAttribute"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/custom_attributes/{custom_attribute_key}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id",
      "custom_attribute_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update case custom attribute",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key",
      "custom_attribute_key": "Case Custom attribute's key"
    }
  },
  "UpdateCaseDescription": {
    "accessPath": [
      "updateCaseDescription"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/description",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update case description",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "UpdatePriority": {
    "accessPath": [
      "updatePriority"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/priority",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update case priority",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "LinkIncident": {
    "accessPath": [
      "linkIncident"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/relationships/incidents",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Link incident to case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "UnlinkJiraIssue": {
    "accessPath": [
      "unlinkJiraIssue"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cases/{case_id}/relationships/jira_issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove Jira issue link from case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "LinkJiraIssueToCase": {
    "accessPath": [
      "linkJiraIssueToCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/cases/{case_id}/relationships/jira_issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Link existing Jira issue to case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "CreateCaseJiraIssue": {
    "accessPath": [
      "createCaseJiraIssue"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/relationships/jira_issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Jira issue for case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "CreateCaseNotebook": {
    "accessPath": [
      "createCaseNotebook"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/relationships/notebook",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create investigation notebook for case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "MoveCaseToProject": {
    "accessPath": [
      "moveCaseToProject"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/cases/{case_id}/relationships/project",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update case project",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "CreateCaseServiceNowTicket": {
    "accessPath": [
      "createCaseServiceNowTicket"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/relationships/servicenow_tickets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create ServiceNow ticket for case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "UpdateStatus": {
    "accessPath": [
      "updateStatus"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/status",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update case status",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "UpdateCaseTitle": {
    "accessPath": [
      "updateCaseTitle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/title",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update case title",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "UnarchiveCase": {
    "accessPath": [
      "unarchiveCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/unarchive",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Unarchive case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "UnassignCase": {
    "accessPath": [
      "unassignCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cases/{case_id}/unassign",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Unassign case",
    "parameterDescriptions": {
      "case_id": "Case's UUID or key"
    }
  },
  "ListCatalogEntity": {
    "accessPath": [
      "listCatalogEntity"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/catalog/entity",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[offset]",
      "page[limit]",
      "filter[id]",
      "filter[ref]",
      "filter[name]",
      "filter[kind]",
      "filter[owner]",
      "filter[relation][type]",
      "filter[exclude_snapshot]",
      "include",
      "includeDiscovered"
    ],
    "description": "Get a list of entities",
    "parameterDescriptions": {
      "page[offset]": "Specific offset to use as the beginning of the returned page.",
      "page[limit]": "Maximum number of entities in the response.",
      "filter[id]": "Filter entities by UUID.",
      "filter[ref]": "Filter entities by reference",
      "filter[name]": "Filter entities by name.",
      "filter[kind]": "Filter entities by kind.",
      "filter[owner]": "Filter entities by owner.",
      "filter[relation][type]": "Filter entities by relation type.",
      "filter[exclude_snapshot]": "Filter entities by excluding snapshotted entities.",
      "include": "Include relationship data.",
      "includeDiscovered": "If true, includes discovered services from APM and USM that do not have entity definitions."
    }
  },
  "UpsertCatalogEntity": {
    "accessPath": [
      "upsertCatalogEntity"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/catalog/entity",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create or update entities"
  },
  "PreviewCatalogEntities": {
    "accessPath": [
      "previewCatalogEntities"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/catalog/entity/preview",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Preview catalog entities"
  },
  "DeleteCatalogEntity": {
    "accessPath": [
      "deleteCatalogEntity"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/catalog/entity/{entity_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "entity_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a single entity",
    "parameterDescriptions": {
      "entity_id": "UUID or Entity Ref."
    }
  },
  "ListCatalogKind": {
    "accessPath": [
      "listCatalogKind"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/catalog/kind",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[offset]",
      "page[limit]",
      "filter[id]",
      "filter[name]"
    ],
    "description": "Get a list of entity kinds",
    "parameterDescriptions": {
      "page[offset]": "Specific offset to use as the beginning of the returned page.",
      "page[limit]": "Maximum number of kinds in the response.",
      "filter[id]": "Filter entities by UUID.",
      "filter[name]": "Filter entities by name."
    }
  },
  "UpsertCatalogKind": {
    "accessPath": [
      "upsertCatalogKind"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/catalog/kind",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create or update kinds"
  },
  "DeleteCatalogKind": {
    "accessPath": [
      "deleteCatalogKind"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/catalog/kind/{kind_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "kind_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a single kind",
    "parameterDescriptions": {
      "kind_id": "Entity kind."
    }
  },
  "ListCatalogRelation": {
    "accessPath": [
      "listCatalogRelation"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/catalog/relation",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[offset]",
      "page[limit]",
      "filter[type]",
      "filter[from_ref]",
      "filter[to_ref]",
      "include",
      "includeDiscovered"
    ],
    "description": "Get a list of entity relations",
    "parameterDescriptions": {
      "page[offset]": "Specific offset to use as the beginning of the returned page.",
      "page[limit]": "Maximum number of relations in the response.",
      "filter[type]": "Filter relations by type.",
      "filter[from_ref]": "Filter relations by the reference of the first entity in the relation.",
      "filter[to_ref]": "Filter relations by the reference of the second entity in the relation.",
      "include": "Include relationship data.",
      "includeDiscovered": "If true, includes relationships discovered by APM and USM."
    }
  },
  "CreateChangeRequest": {
    "accessPath": [
      "createChangeRequest"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/change-management/change-request",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a change request"
  },
  "GetChangeRequest": {
    "accessPath": [
      "getChangeRequest"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/change-management/change-request/{change_request_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "change_request_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a change request",
    "parameterDescriptions": {
      "change_request_id": "The identifier of the change request."
    }
  },
  "UpdateChangeRequest": {
    "accessPath": [
      "updateChangeRequest"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data",
      "included"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/change-management/change-request/{change_request_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "change_request_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a change request",
    "parameterDescriptions": {
      "change_request_id": "The identifier of the change request."
    }
  },
  "CreateChangeRequestBranch": {
    "accessPath": [
      "createChangeRequestBranch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/change-management/change-request/{change_request_id}/branch",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "change_request_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a change request branch",
    "parameterDescriptions": {
      "change_request_id": "The identifier of the change request."
    }
  },
  "DeleteChangeRequestDecision": {
    "accessPath": [
      "deleteChangeRequestDecision"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/change-management/change-request/{change_request_id}/decisions/{decision_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "change_request_id",
      "decision_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a change request decision",
    "parameterDescriptions": {
      "change_request_id": "The identifier of the change request.",
      "decision_id": "The identifier of the change request decision."
    }
  },
  "UpdateChangeRequestDecision": {
    "accessPath": [
      "updateChangeRequestDecision"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data",
      "included"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/change-management/change-request/{change_request_id}/decisions/{decision_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "change_request_id",
      "decision_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a change request decision",
    "parameterDescriptions": {
      "change_request_id": "The identifier of the change request.",
      "decision_id": "The identifier of the change request decision."
    }
  },
  "CreateCIAppPipelineEvent": {
    "accessPath": [
      "createCiAppPipelineEvent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/ci/pipeline",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Send pipeline event"
  },
  "AggregateCIAppPipelineEvents": {
    "accessPath": [
      "aggregateCiAppPipelineEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "compute",
      "filter",
      "group_by",
      "options"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/ci/pipelines/analytics/aggregate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Aggregate pipelines events"
  },
  "ListCIAppPipelineEvents": {
    "accessPath": [
      "listCiAppPipelineEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/ci/pipelines/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[query]",
      "filter[from]",
      "filter[to]",
      "sort",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "Get a list of pipelines events",
    "parameterDescriptions": {
      "filter[query]": "Search query following log syntax.",
      "filter[from]": "Minimum timestamp for requested events.",
      "filter[to]": "Maximum timestamp for requested events.",
      "sort": "Order of events in results.",
      "page[cursor]": "List following results with a cursor provided in the previous query.",
      "page[limit]": "Maximum number of events in the response."
    }
  },
  "SearchCIAppPipelineEvents": {
    "accessPath": [
      "searchCiAppPipelineEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "filter",
      "options",
      "page",
      "sort"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/ci/pipelines/events/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Search pipelines events"
  },
  "DeleteTestOptimizationServiceSettings": {
    "accessPath": [
      "deleteTestOptimizationServiceSettings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/ci/test-optimization/settings/service",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Test Optimization service settings"
  },
  "UpdateTestOptimizationServiceSettings": {
    "accessPath": [
      "updateTestOptimizationServiceSettings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/ci/test-optimization/settings/service",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Test Optimization service settings"
  },
  "GetTestOptimizationServiceSettings": {
    "accessPath": [
      "getTestOptimizationServiceSettings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/ci/test-optimization/settings/service",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Test Optimization service settings"
  },
  "AggregateCIAppTestEvents": {
    "accessPath": [
      "aggregateCiAppTestEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "compute",
      "filter",
      "group_by",
      "options"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/ci/tests/analytics/aggregate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Aggregate tests events"
  },
  "ListCIAppTestEvents": {
    "accessPath": [
      "listCiAppTestEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/ci/tests/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[query]",
      "filter[from]",
      "filter[to]",
      "sort",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "Get a list of tests events",
    "parameterDescriptions": {
      "filter[query]": "Search query following log syntax.",
      "filter[from]": "Minimum timestamp for requested events.",
      "filter[to]": "Maximum timestamp for requested events.",
      "sort": "Order of events in results.",
      "page[cursor]": "List following results with a cursor provided in the previous query.",
      "page[limit]": "Maximum number of events in the response."
    }
  },
  "SearchCIAppTestEvents": {
    "accessPath": [
      "searchCiAppTestEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "filter",
      "options",
      "page",
      "sort"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/ci/tests/events/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Search tests events"
  },
  "ListAWSCloudAuthPersonaMappings": {
    "accessPath": [
      "listAwsCloudAuthPersonaMappings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cloud_auth/aws/persona_mapping",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List AWS cloud authentication persona mappings"
  },
  "CreateAWSCloudAuthPersonaMapping": {
    "accessPath": [
      "createAwsCloudAuthPersonaMapping"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cloud_auth/aws/persona_mapping",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an AWS cloud authentication persona mapping"
  },
  "DeleteAWSCloudAuthPersonaMapping": {
    "accessPath": [
      "deleteAwsCloudAuthPersonaMapping"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cloud_auth/aws/persona_mapping/{persona_mapping_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "persona_mapping_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an AWS cloud authentication persona mapping",
    "parameterDescriptions": {
      "persona_mapping_id": "The ID of the persona mapping"
    }
  },
  "GetAWSCloudAuthPersonaMapping": {
    "accessPath": [
      "getAwsCloudAuthPersonaMapping"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cloud_auth/aws/persona_mapping/{persona_mapping_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "persona_mapping_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an AWS cloud authentication persona mapping",
    "parameterDescriptions": {
      "persona_mapping_id": "The ID of the persona mapping"
    }
  },
  "CreateCustomFramework": {
    "accessPath": [
      "createCustomFramework"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cloud_security_management/custom_frameworks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a custom framework"
  },
  "DeleteCustomFramework": {
    "accessPath": [
      "deleteCustomFramework"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cloud_security_management/custom_frameworks/{handle}/{version}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "handle",
      "version"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a custom framework",
    "parameterDescriptions": {
      "handle": "The framework handle",
      "version": "The framework version"
    }
  },
  "GetCustomFramework": {
    "accessPath": [
      "getCustomFramework"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cloud_security_management/custom_frameworks/{handle}/{version}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "handle",
      "version"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a custom framework",
    "parameterDescriptions": {
      "handle": "The framework handle",
      "version": "The framework version"
    }
  },
  "UpdateCustomFramework": {
    "accessPath": [
      "updateCustomFramework"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/cloud_security_management/custom_frameworks/{handle}/{version}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "handle",
      "version"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a custom framework",
    "parameterDescriptions": {
      "handle": "The framework handle",
      "version": "The framework version"
    }
  },
  "GetResourceEvaluationFilters": {
    "accessPath": [
      "getResourceEvaluationFilters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cloud_security_management/resource_filters",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "cloud_provider",
      "account_id",
      "skip_cache"
    ],
    "description": "List resource filters",
    "parameterDescriptions": {
      "cloud_provider": "Filter resource filters by cloud provider (e.g. aws, gcp, azure).",
      "account_id": "Filter resource filters by cloud provider account ID. This parameter is only valid when provider is specified.",
      "skip_cache": "Skip cache for resource filters."
    }
  },
  "UpdateResourceEvaluationFilters": {
    "accessPath": [
      "updateResourceEvaluationFilters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/cloud_security_management/resource_filters",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update resource filters"
  },
  "GetCodeCoverageBranchSummary": {
    "accessPath": [
      "getCodeCoverageBranchSummary"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/code-coverage/branch/summary",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get code coverage summary for a branch"
  },
  "GetCodeCoverageCommitSummary": {
    "accessPath": [
      "getCodeCoverageCommitSummary"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/code-coverage/commit/summary",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get code coverage summary for a commit"
  },
  "ListContainerImages": {
    "accessPath": [
      "listContainerImages"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/container_images",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[tags]",
      "group_by",
      "sort",
      "page[size]",
      "page[cursor]"
    ],
    "description": "Get all Container Images",
    "parameterDescriptions": {
      "filter[tags]": "Comma-separated list of tags to filter Container Images by.",
      "group_by": "Comma-separated list of tags to group Container Images by.",
      "sort": "Attribute to sort Container Images by.",
      "page[size]": "Maximum number of results returned.",
      "page[cursor]": "String to query the next page of results.\nThis key is provided with each valid response from the API in `meta.pagination.next_cursor`."
    }
  },
  "ListContainers": {
    "accessPath": [
      "listContainers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/containers",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[tags]",
      "group_by",
      "sort",
      "page[size]",
      "page[cursor]"
    ],
    "description": "Get All Containers",
    "parameterDescriptions": {
      "filter[tags]": "Comma-separated list of tags to filter containers by.",
      "group_by": "Comma-separated list of tags to group containers by.",
      "sort": "Attribute to sort containers by.",
      "page[size]": "Maximum number of results returned.",
      "page[cursor]": "String to query the next page of results.\nThis key is provided with each valid response from the API in `meta.pagination.next_cursor`."
    }
  },
  "ListCustomAllocationRules": {
    "accessPath": [
      "listCustomAllocationRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/arbitrary_rule",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List custom allocation rules"
  },
  "CreateCustomAllocationRule": {
    "accessPath": [
      "createCustomAllocationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cost/arbitrary_rule",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create custom allocation rule"
  },
  "ReorderCustomAllocationRules": {
    "accessPath": [
      "reorderCustomAllocationRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cost/arbitrary_rule/reorder",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Reorder custom allocation rules"
  },
  "DeleteCustomAllocationRule": {
    "accessPath": [
      "deleteCustomAllocationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cost/arbitrary_rule/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete custom allocation rule",
    "parameterDescriptions": {
      "rule_id": "The unique identifier of the custom allocation rule"
    }
  },
  "GetCustomAllocationRule": {
    "accessPath": [
      "getCustomAllocationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/arbitrary_rule/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get custom allocation rule",
    "parameterDescriptions": {
      "rule_id": "The unique identifier of the custom allocation rule"
    }
  },
  "UpdateCustomAllocationRule": {
    "accessPath": [
      "updateCustomAllocationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/cost/arbitrary_rule/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update custom allocation rule",
    "parameterDescriptions": {
      "rule_id": "The unique identifier of the custom allocation rule"
    }
  },
  "ListCostAWSCURConfigs": {
    "accessPath": [
      "listCostAwscurConfigs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/aws_cur_config",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Cloud Cost Management AWS CUR configs"
  },
  "CreateCostAWSCURConfig": {
    "accessPath": [
      "createCostAwscurConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cost/aws_cur_config",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Cloud Cost Management AWS CUR config"
  },
  "DeleteCostAWSCURConfig": {
    "accessPath": [
      "deleteCostAwscurConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cost/aws_cur_config/{cloud_account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cloud_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Cloud Cost Management AWS CUR config",
    "parameterDescriptions": {
      "cloud_account_id": "Cloud Account id."
    }
  },
  "GetCostAWSCURConfig": {
    "accessPath": [
      "getCostAwscurConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/aws_cur_config/{cloud_account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cloud_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get cost AWS CUR config",
    "parameterDescriptions": {
      "cloud_account_id": "The unique identifier of the cloud account"
    }
  },
  "UpdateCostAWSCURConfig": {
    "accessPath": [
      "updateCostAwscurConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/cost/aws_cur_config/{cloud_account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cloud_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Cloud Cost Management AWS CUR config",
    "parameterDescriptions": {
      "cloud_account_id": "Cloud Account id."
    }
  },
  "ListCostAzureUCConfigs": {
    "accessPath": [
      "listCostAzureUcConfigs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/azure_uc_config",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Cloud Cost Management Azure configs"
  },
  "CreateCostAzureUCConfigs": {
    "accessPath": [
      "createCostAzureUcConfigs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cost/azure_uc_config",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Cloud Cost Management Azure configs"
  },
  "DeleteCostAzureUCConfig": {
    "accessPath": [
      "deleteCostAzureUcConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cost/azure_uc_config/{cloud_account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cloud_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Cloud Cost Management Azure config",
    "parameterDescriptions": {
      "cloud_account_id": "Cloud Account id."
    }
  },
  "GetCostAzureUCConfig": {
    "accessPath": [
      "getCostAzureUcConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/azure_uc_config/{cloud_account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cloud_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get cost Azure UC config",
    "parameterDescriptions": {
      "cloud_account_id": "The unique identifier of the cloud account"
    }
  },
  "UpdateCostAzureUCConfigs": {
    "accessPath": [
      "updateCostAzureUcConfigs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/cost/azure_uc_config/{cloud_account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cloud_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Cloud Cost Management Azure config",
    "parameterDescriptions": {
      "cloud_account_id": "Cloud Account id."
    }
  },
  "UpsertBudget": {
    "accessPath": [
      "upsertBudget"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/cost/budget",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create or update a budget"
  },
  "ValidateCsvBudget": {
    "accessPath": [
      "validateCsvBudget"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cost/budget/csv/validate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Validate CSV budget"
  },
  "ValidateBudget": {
    "accessPath": [
      "validateBudget"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cost/budget/validate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Validate budget"
  },
  "DeleteBudget": {
    "accessPath": [
      "deleteBudget"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cost/budget/{budget_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "budget_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete budget",
    "parameterDescriptions": {
      "budget_id": "Budget id."
    }
  },
  "GetBudget": {
    "accessPath": [
      "getBudget"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/budget/{budget_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "budget_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get budget",
    "parameterDescriptions": {
      "budget_id": "Budget id."
    }
  },
  "ListBudgets": {
    "accessPath": [
      "listBudgets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/budgets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List budgets"
  },
  "ListCustomCostsFiles": {
    "accessPath": [
      "listCustomCostsFiles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/custom_costs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[number]",
      "page[size]",
      "filter[status]",
      "sort"
    ],
    "description": "List Custom Costs files",
    "parameterDescriptions": {
      "page[number]": "Page number for pagination",
      "page[size]": "Page size for pagination",
      "filter[status]": "Filter by file status",
      "sort": "Sort key with optional descending prefix"
    }
  },
  "UploadCustomCostsFile": {
    "accessPath": [
      "uploadCustomCostsFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/cost/custom_costs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Upload Custom Costs file"
  },
  "DeleteCustomCostsFile": {
    "accessPath": [
      "deleteCustomCostsFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cost/custom_costs/{file_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Custom Costs file",
    "parameterDescriptions": {
      "file_id": "File ID."
    }
  },
  "GetCustomCostsFile": {
    "accessPath": [
      "getCustomCostsFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/custom_costs/{file_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Custom Costs file",
    "parameterDescriptions": {
      "file_id": "File ID."
    }
  },
  "ListCostGCPUsageCostConfigs": {
    "accessPath": [
      "listCostGcpUsageCostConfigs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/gcp_uc_config",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Google Cloud Usage Cost configs"
  },
  "CreateCostGCPUsageCostConfig": {
    "accessPath": [
      "createCostGcpUsageCostConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/cost/gcp_uc_config",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Google Cloud Usage Cost config"
  },
  "DeleteCostGCPUsageCostConfig": {
    "accessPath": [
      "deleteCostGcpUsageCostConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/cost/gcp_uc_config/{cloud_account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cloud_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Google Cloud Usage Cost config",
    "parameterDescriptions": {
      "cloud_account_id": "Cloud Account id."
    }
  },
  "GetCostGCPUsageCostConfig": {
    "accessPath": [
      "getCostGcpUsageCostConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost/gcp_uc_config/{cloud_account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cloud_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Google Cloud Usage Cost config",
    "parameterDescriptions": {
      "cloud_account_id": "The unique identifier of the cloud account"
    }
  },
  "UpdateCostGCPUsageCostConfig": {
    "accessPath": [
      "updateCostGcpUsageCostConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/cost/gcp_uc_config/{cloud_account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cloud_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Google Cloud Usage Cost config",
    "parameterDescriptions": {
      "cloud_account_id": "Cloud Account id."
    }
  },
  "GetActiveBillingDimensions": {
    "accessPath": [
      "getActiveBillingDimensions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost_by_tag/active_billing_dimensions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get active billing dimensions for cost attribution"
  },
  "GetMonthlyCostAttribution": {
    "accessPath": [
      "getMonthlyCostAttribution"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/cost_by_tag/monthly_cost_attribution",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_month",
      "end_month",
      "fields",
      "sort_direction",
      "sort_name",
      "tag_breakdown_keys",
      "next_record_id",
      "include_descendants"
    ],
    "description": "Get Monthly Cost Attribution",
    "parameterDescriptions": {
      "start_month": "Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning in this month.",
      "end_month": "Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.",
      "fields": "Comma-separated list specifying cost types (e.g., `<billing_dimension>_on_demand_cost`, `<billing_dimension>_committed_cost`, `<billing_dimension>_total_cost`) and the\nproportions (`<billing_dimension>_percentage_in_org`, `<billing_dimension>_percentage_in_account`). Use `*` to retrieve all fields.\nExample: `infra_host_on_demand_cost,infra_host_percentage_in_account`\nTo obtain the complete list of active billing dimensions that can be used to replace\n`<billing_dimension>` in the field names, make a request to the [Get active billing dimensions API](https://docs.datadoghq.com/api/latest/usage-metering/#get-active-billing-dimensions-for-cost-attribution).",
      "sort_direction": "The direction to sort by: `[desc, asc]`.",
      "sort_name": "The billing dimension to sort by. Always sorted by total cost. Example: `infra_host`.",
      "tag_breakdown_keys": "Comma separated list of tag keys used to group cost. If no value is provided the cost will not be broken down by tags.\nTo see which tags are available, look for the value of `tag_config_source` in the API response.",
      "next_record_id": "List following results with a next_record_id provided in the previous query.",
      "include_descendants": "Include child org cost in the response. Defaults to `true`."
    }
  },
  "ListAllCSMAgents": {
    "accessPath": [
      "listAllCsmAgents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/csm/onboarding/agents",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "size",
      "query",
      "order_direction"
    ],
    "description": "Get all CSM Agents",
    "parameterDescriptions": {
      "page": "The page index for pagination (zero-based).",
      "size": "The number of items to include in a single page.",
      "query": "A search query string to filter results (for example, `hostname:COMP-T2H4J27423`).",
      "order_direction": "The sort direction for results. Use `asc` for ascending or `desc` for descending."
    }
  },
  "GetCSMCloudAccountsCoverageAnalysis": {
    "accessPath": [
      "getCsmCloudAccountsCoverageAnalysis"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/csm/onboarding/coverage_analysis/cloud_accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the CSM Cloud Accounts Coverage Analysis"
  },
  "GetCSMHostsAndContainersCoverageAnalysis": {
    "accessPath": [
      "getCsmHostsAndContainersCoverageAnalysis"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/csm/onboarding/coverage_analysis/hosts_and_containers",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the CSM Hosts and Containers Coverage Analysis"
  },
  "GetCSMServerlessCoverageAnalysis": {
    "accessPath": [
      "getCsmServerlessCoverageAnalysis"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/csm/onboarding/coverage_analysis/serverless",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the CSM Serverless Coverage Analysis"
  },
  "ListAllCSMServerlessAgents": {
    "accessPath": [
      "listAllCsmServerlessAgents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/csm/onboarding/serverless/agents",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "size",
      "query",
      "order_direction"
    ],
    "description": "Get all CSM Serverless Agents",
    "parameterDescriptions": {
      "page": "The page index for pagination (zero-based).",
      "size": "The number of items to include in a single page.",
      "query": "A search query string to filter results (for example, `hostname:COMP-T2H4J27423`).",
      "order_direction": "The sort direction for results. Use `asc` for ascending or `desc` for descending."
    }
  },
  "ListCurrentUserApplicationKeys": {
    "accessPath": [
      "listCurrentUserApplicationKeys"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/current_user/application_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort",
      "filter",
      "filter[created_at][start]",
      "filter[created_at][end]",
      "include"
    ],
    "description": "Get all application keys owned by current user",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "sort": "Application key attribute used to sort results. Sort order is ascending\nby default. In order to specify a descending sort, prefix the\nattribute with a minus sign.",
      "filter": "Filter application keys by the specified string.",
      "filter[created_at][start]": "Only include application keys created on or after the specified date.",
      "filter[created_at][end]": "Only include application keys created on or before the specified date.",
      "include": "Resource path for related resources to include in the response. Only `owned_by` is supported."
    }
  },
  "CreateCurrentUserApplicationKey": {
    "accessPath": [
      "createCurrentUserApplicationKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/current_user/application_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an application key for current user"
  },
  "DeleteCurrentUserApplicationKey": {
    "accessPath": [
      "deleteCurrentUserApplicationKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/current_user/application_keys/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an application key owned by current user",
    "parameterDescriptions": {
      "app_key_id": "The ID of the application key."
    }
  },
  "GetCurrentUserApplicationKey": {
    "accessPath": [
      "getCurrentUserApplicationKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/current_user/application_keys/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get one application key owned by current user",
    "parameterDescriptions": {
      "app_key_id": "The ID of the application key."
    }
  },
  "UpdateCurrentUserApplicationKey": {
    "accessPath": [
      "updateCurrentUserApplicationKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/current_user/application_keys/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Edit an application key owned by current user",
    "parameterDescriptions": {
      "app_key_id": "The ID of the application key."
    }
  },
  "DeleteDashboardListItems": {
    "accessPath": [
      "deleteDashboardListItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "dashboards"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dashboard_list_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete items from a dashboard list",
    "parameterDescriptions": {
      "dashboard_list_id": "ID of the dashboard list to delete items from."
    }
  },
  "GetDashboardListItems": {
    "accessPath": [
      "getDashboardListItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dashboard_list_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get items of a Dashboard List",
    "parameterDescriptions": {
      "dashboard_list_id": "ID of the dashboard list to get items from."
    }
  },
  "CreateDashboardListItems": {
    "accessPath": [
      "createDashboardListItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "dashboards"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dashboard_list_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Items to a Dashboard List",
    "parameterDescriptions": {
      "dashboard_list_id": "ID of the dashboard list to add items to."
    }
  },
  "UpdateDashboardListItems": {
    "accessPath": [
      "updateDashboardListItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "dashboards"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dashboard_list_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update items of a dashboard list",
    "parameterDescriptions": {
      "dashboard_list_id": "ID of the dashboard list to update items from."
    }
  },
  "GetAllDatasets": {
    "accessPath": [
      "getAllDatasets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/datasets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all datasets"
  },
  "CreateDataset": {
    "accessPath": [
      "createDataset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/datasets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a dataset"
  },
  "DeleteDataset": {
    "accessPath": [
      "deleteDataset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/datasets/{dataset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dataset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a dataset",
    "parameterDescriptions": {
      "dataset_id": "The ID of a defined dataset."
    }
  },
  "GetDataset": {
    "accessPath": [
      "getDataset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/datasets/{dataset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dataset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a single dataset by ID",
    "parameterDescriptions": {
      "dataset_id": "The ID of a defined dataset."
    }
  },
  "UpdateDataset": {
    "accessPath": [
      "updateDataset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/datasets/{dataset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dataset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Edit a dataset",
    "parameterDescriptions": {
      "dataset_id": "The ID of a defined dataset."
    }
  },
  "CreateDataDeletionRequest": {
    "accessPath": [
      "createDataDeletionRequest"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/deletion/data/{product}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "product"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Creates a data deletion request",
    "parameterDescriptions": {
      "product": "Name of the product to be deleted, either `logs` or `rum`."
    }
  },
  "GetDataDeletionRequests": {
    "accessPath": [
      "getDataDeletionRequests"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/deletion/requests",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "next_page",
      "product",
      "query",
      "status",
      "page_size"
    ],
    "description": "Gets a list of data deletion requests",
    "parameterDescriptions": {
      "next_page": "The next page of the previous search. If the next_page parameter is included, the rest of the query elements are ignored.",
      "product": "Retrieve only the requests related to the given product.",
      "query": "Retrieve only the requests that matches the given query.",
      "status": "Retrieve only the requests with the given status.",
      "page_size": "Sets the page size of the search."
    }
  },
  "CancelDataDeletionRequest": {
    "accessPath": [
      "cancelDataDeletionRequest"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/deletion/requests/{id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancels a data deletion request",
    "parameterDescriptions": {
      "id": "ID of the deletion request."
    }
  },
  "ListDeploymentGates": {
    "accessPath": [
      "listDeploymentGates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/deployment_gates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[cursor]",
      "page[size]"
    ],
    "description": "Get all deployment gates",
    "parameterDescriptions": {
      "page[cursor]": "Cursor for pagination. Use the `meta.page.next_cursor` value from the previous response.",
      "page[size]": "Number of results per page. Defaults to 50. Must be between 1 and 1000."
    }
  },
  "CreateDeploymentGate": {
    "accessPath": [
      "createDeploymentGate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/deployment_gates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create deployment gate"
  },
  "GetDeploymentGateRules": {
    "accessPath": [
      "getDeploymentGateRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/deployment_gates/{gate_id}/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gate_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get rules for a deployment gate",
    "parameterDescriptions": {
      "gate_id": "The ID of the deployment gate."
    }
  },
  "CreateDeploymentRule": {
    "accessPath": [
      "createDeploymentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/deployment_gates/{gate_id}/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gate_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create deployment rule",
    "parameterDescriptions": {
      "gate_id": "The ID of the deployment gate."
    }
  },
  "DeleteDeploymentRule": {
    "accessPath": [
      "deleteDeploymentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/deployment_gates/{gate_id}/rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gate_id",
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete deployment rule",
    "parameterDescriptions": {
      "gate_id": "The ID of the deployment gate.",
      "id": "The ID of the deployment rule."
    }
  },
  "GetDeploymentRule": {
    "accessPath": [
      "getDeploymentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/deployment_gates/{gate_id}/rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gate_id",
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get deployment rule",
    "parameterDescriptions": {
      "gate_id": "The ID of the deployment gate.",
      "id": "The ID of the deployment rule."
    }
  },
  "UpdateDeploymentRule": {
    "accessPath": [
      "updateDeploymentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/deployment_gates/{gate_id}/rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gate_id",
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update deployment rule",
    "parameterDescriptions": {
      "gate_id": "The ID of the deployment gate.",
      "id": "The ID of the deployment rule."
    }
  },
  "DeleteDeploymentGate": {
    "accessPath": [
      "deleteDeploymentGate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/deployment_gates/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete deployment gate",
    "parameterDescriptions": {
      "id": "The ID of the deployment gate."
    }
  },
  "GetDeploymentGate": {
    "accessPath": [
      "getDeploymentGate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/deployment_gates/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get deployment gate",
    "parameterDescriptions": {
      "id": "The ID of the deployment gate."
    }
  },
  "UpdateDeploymentGate": {
    "accessPath": [
      "updateDeploymentGate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/deployment_gates/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update deployment gate",
    "parameterDescriptions": {
      "id": "The ID of the deployment gate."
    }
  },
  "TriggerDeploymentGatesEvaluation": {
    "accessPath": [
      "triggerDeploymentGatesEvaluation"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/deployments/gates/evaluation",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Trigger a deployment gate evaluation"
  },
  "GetDeploymentGatesEvaluationResult": {
    "accessPath": [
      "getDeploymentGatesEvaluationResult"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/deployments/gates/evaluation/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a deployment gate evaluation result",
    "parameterDescriptions": {
      "id": "The evaluation ID returned by the trigger endpoint."
    }
  },
  "GetDomainAllowlist": {
    "accessPath": [
      "getDomainAllowlist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/domain_allowlist",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Domain Allowlist"
  },
  "PatchDomainAllowlist": {
    "accessPath": [
      "patchDomainAllowlist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/domain_allowlist",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Sets Domain Allowlist"
  },
  "CreateDORADeployment": {
    "accessPath": [
      "createDoraDeployment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/dora/deployment",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Send a deployment event"
  },
  "DeleteDORADeployment": {
    "accessPath": [
      "deleteDoraDeployment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/dora/deployment/{deployment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a deployment event",
    "parameterDescriptions": {
      "deployment_id": "The ID of the deployment event to delete."
    }
  },
  "ListDORADeployments": {
    "accessPath": [
      "listDoraDeployments"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/dora/deployments",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a list of deployment events"
  },
  "GetDORADeployment": {
    "accessPath": [
      "getDoraDeployment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/dora/deployments/{deployment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a deployment event",
    "parameterDescriptions": {
      "deployment_id": "The ID of the deployment event."
    }
  },
  "PatchDORADeployment": {
    "accessPath": [
      "patchDoraDeployment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/dora/deployments/{deployment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Patch a deployment event",
    "parameterDescriptions": {
      "deployment_id": "The ID of the deployment event."
    }
  },
  "CreateDORAFailure": {
    "accessPath": [
      "createDoraFailure"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/dora/failure",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Send an incident event"
  },
  "DeleteDORAFailure": {
    "accessPath": [
      "deleteDoraFailure"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/dora/failure/{failure_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "failure_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an incident event",
    "parameterDescriptions": {
      "failure_id": "The ID of the incident event to delete."
    }
  },
  "ListDORAFailures": {
    "accessPath": [
      "listDoraFailures"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/dora/failures",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a list of incident events"
  },
  "GetDORAFailure": {
    "accessPath": [
      "getDoraFailure"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/dora/failures/{failure_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "failure_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an incident event",
    "parameterDescriptions": {
      "failure_id": "The ID of the incident event."
    }
  },
  "CreateDORAIncident": {
    "accessPath": [
      "createDoraIncident"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/dora/incident",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Send an incident event (legacy)"
  },
  "ListDowntimes": {
    "accessPath": [
      "listDowntimes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/downtime",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "current_only",
      "include",
      "page[offset]",
      "page[limit]"
    ],
    "description": "Get all downtimes",
    "parameterDescriptions": {
      "current_only": "Only return downtimes that are active when the request is made.",
      "include": "Comma-separated list of resource paths for related resources to include in the response. Supported resource\npaths are `created_by` and `monitor`.",
      "page[offset]": "Specific offset to use as the beginning of the returned page.",
      "page[limit]": "Maximum number of downtimes in the response."
    }
  },
  "CreateDowntime": {
    "accessPath": [
      "createDowntime"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/downtime",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Schedule a downtime"
  },
  "CancelDowntime": {
    "accessPath": [
      "cancelDowntime"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/downtime/{downtime_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "downtime_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel a downtime",
    "parameterDescriptions": {
      "downtime_id": "ID of the downtime to cancel."
    }
  },
  "GetDowntime": {
    "accessPath": [
      "getDowntime"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/downtime/{downtime_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "downtime_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get a downtime",
    "parameterDescriptions": {
      "downtime_id": "ID of the downtime to fetch.",
      "include": "Comma-separated list of resource paths for related resources to include in the response. Supported resource\npaths are `created_by` and `monitor`."
    }
  },
  "UpdateDowntime": {
    "accessPath": [
      "updateDowntime"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/downtime/{downtime_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "downtime_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a downtime",
    "parameterDescriptions": {
      "downtime_id": "ID of the downtime to update."
    }
  },
  "SearchIssues": {
    "accessPath": [
      "searchIssues"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/error-tracking/issues/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Search error tracking issues",
    "parameterDescriptions": {
      "include": "Comma-separated list of relationship objects that should be included in the response. Possible values are `issue`, `issue.assignee`, `issue.case`, and `issue.team_owners`."
    }
  },
  "GetIssue": {
    "accessPath": [
      "getIssue"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/error-tracking/issues/{issue_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "issue_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get the details of an error tracking issue",
    "parameterDescriptions": {
      "issue_id": "The identifier of the issue.",
      "include": "Comma-separated list of relationship objects that should be included in the response. Possible values are `assignee`, `case`, and `team_owners`."
    }
  },
  "DeleteIssueAssignee": {
    "accessPath": [
      "deleteIssueAssignee"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/error-tracking/issues/{issue_id}/assignee",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "issue_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove the assignee of an issue",
    "parameterDescriptions": {
      "issue_id": "The identifier of the issue."
    }
  },
  "UpdateIssueAssignee": {
    "accessPath": [
      "updateIssueAssignee"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/error-tracking/issues/{issue_id}/assignee",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "issue_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update the assignee of an issue",
    "parameterDescriptions": {
      "issue_id": "The identifier of the issue."
    }
  },
  "UpdateIssueState": {
    "accessPath": [
      "updateIssueState"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/error-tracking/issues/{issue_id}/state",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "issue_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update the state of an issue",
    "parameterDescriptions": {
      "issue_id": "The identifier of the issue."
    }
  },
  "ListEvents": {
    "accessPath": [
      "listEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[query]",
      "filter[from]",
      "filter[to]",
      "sort",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "Get a list of events",
    "parameterDescriptions": {
      "filter[query]": "Search query following events syntax.",
      "filter[from]": "Minimum timestamp for requested events, in milliseconds.",
      "filter[to]": "Maximum timestamp for requested events, in milliseconds.",
      "sort": "Order of events in results.",
      "page[cursor]": "List following results with a cursor provided in the previous query.",
      "page[limit]": "Maximum number of events in the response."
    }
  },
  "CreateEvent": {
    "accessPath": [
      "createEvent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Post an event"
  },
  "SearchEvents": {
    "accessPath": [
      "searchEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "filter",
      "options",
      "page",
      "sort"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/events/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Search events"
  },
  "GetEvent": {
    "accessPath": [
      "getEvent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/events/{event_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "event_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an event",
    "parameterDescriptions": {
      "event_id": "The UID of the event."
    }
  },
  "ListFeatureFlags": {
    "accessPath": [
      "listFeatureFlags"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/feature-flags",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "key",
      "is_archived",
      "limit",
      "offset"
    ],
    "description": "List feature flags",
    "parameterDescriptions": {
      "key": "Filter feature flags by key (partial matching).",
      "is_archived": "Filter by archived status.",
      "limit": "Maximum number of results to return.",
      "offset": "Number of results to skip."
    }
  },
  "CreateFeatureFlag": {
    "accessPath": [
      "createFeatureFlag"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/feature-flags",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a feature flag"
  },
  "ListFeatureFlagsEnvironments": {
    "accessPath": [
      "listFeatureFlagsEnvironments"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/feature-flags/environments",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "name",
      "key",
      "limit",
      "offset"
    ],
    "description": "List environments",
    "parameterDescriptions": {
      "name": "Filter environments by name (partial matching).",
      "key": "Filter environments by key (partial matching).",
      "limit": "Maximum number of results to return.",
      "offset": "Number of results to skip."
    }
  },
  "CreateFeatureFlagsEnvironment": {
    "accessPath": [
      "createFeatureFlagsEnvironment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/feature-flags/environments",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an environment"
  },
  "DeleteFeatureFlagsEnvironment": {
    "accessPath": [
      "deleteFeatureFlagsEnvironment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/feature-flags/environments/{environment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "environment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an environment",
    "parameterDescriptions": {
      "environment_id": "The ID of the environment."
    }
  },
  "GetFeatureFlagsEnvironment": {
    "accessPath": [
      "getFeatureFlagsEnvironment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/feature-flags/environments/{environment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "environment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an environment",
    "parameterDescriptions": {
      "environment_id": "The ID of the environment."
    }
  },
  "UpdateFeatureFlagsEnvironment": {
    "accessPath": [
      "updateFeatureFlagsEnvironment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/feature-flags/environments/{environment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "environment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an environment",
    "parameterDescriptions": {
      "environment_id": "The ID of the environment."
    }
  },
  "PauseExposureSchedule": {
    "accessPath": [
      "pauseExposureSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/pause",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "exposure_schedule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Pause a progressive rollout",
    "parameterDescriptions": {
      "exposure_schedule_id": "The ID of the exposure schedule."
    }
  },
  "ResumeExposureSchedule": {
    "accessPath": [
      "resumeExposureSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/resume",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "exposure_schedule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Resume a progressive rollout",
    "parameterDescriptions": {
      "exposure_schedule_id": "The ID of the exposure schedule."
    }
  },
  "StartExposureSchedule": {
    "accessPath": [
      "startExposureSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/start",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "exposure_schedule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Start a progressive rollout",
    "parameterDescriptions": {
      "exposure_schedule_id": "The ID of the exposure schedule."
    }
  },
  "StopExposureSchedule": {
    "accessPath": [
      "stopExposureSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/stop",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "exposure_schedule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Stop a progressive rollout",
    "parameterDescriptions": {
      "exposure_schedule_id": "The ID of the exposure schedule."
    }
  },
  "GetFeatureFlag": {
    "accessPath": [
      "getFeatureFlag"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/feature-flags/{feature_flag_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "feature_flag_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a feature flag",
    "parameterDescriptions": {
      "feature_flag_id": "The ID of the feature flag."
    }
  },
  "UpdateFeatureFlag": {
    "accessPath": [
      "updateFeatureFlag"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/feature-flags/{feature_flag_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "feature_flag_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a feature flag",
    "parameterDescriptions": {
      "feature_flag_id": "The ID of the feature flag."
    }
  },
  "ArchiveFeatureFlag": {
    "accessPath": [
      "archiveFeatureFlag"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/feature-flags/{feature_flag_id}/archive",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "feature_flag_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Archive a feature flag",
    "parameterDescriptions": {
      "feature_flag_id": "The ID of the feature flag."
    }
  },
  "CreateAllocationsForFeatureFlagInEnvironment": {
    "accessPath": [
      "createAllocationsForFeatureFlagInEnvironment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/allocations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "feature_flag_id",
      "environment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create targeting rules for a flag env",
    "parameterDescriptions": {
      "feature_flag_id": "The ID of the feature flag.",
      "environment_id": "The ID of the environment."
    }
  },
  "UpdateAllocationsForFeatureFlagInEnvironment": {
    "accessPath": [
      "updateAllocationsForFeatureFlagInEnvironment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/allocations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "feature_flag_id",
      "environment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update targeting rules for a flag",
    "parameterDescriptions": {
      "feature_flag_id": "The ID of the feature flag.",
      "environment_id": "The ID of the environment."
    }
  },
  "DisableFeatureFlagEnvironment": {
    "accessPath": [
      "disableFeatureFlagEnvironment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/disable",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "feature_flag_id",
      "environment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Disable a feature flag in an environment",
    "parameterDescriptions": {
      "feature_flag_id": "The ID of the feature flag.",
      "environment_id": "The ID of the environment."
    }
  },
  "EnableFeatureFlagEnvironment": {
    "accessPath": [
      "enableFeatureFlagEnvironment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/enable",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "feature_flag_id",
      "environment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Enable a feature flag in an environment",
    "parameterDescriptions": {
      "feature_flag_id": "The ID of the feature flag.",
      "environment_id": "The ID of the environment."
    }
  },
  "UnarchiveFeatureFlag": {
    "accessPath": [
      "unarchiveFeatureFlag"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/feature-flags/{feature_flag_id}/unarchive",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "feature_flag_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Unarchive a feature flag",
    "parameterDescriptions": {
      "feature_flag_id": "The ID of the feature flag."
    }
  },
  "GetHamrOrgConnection": {
    "accessPath": [
      "getHamrOrgConnection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/hamr",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get HAMR organization connection"
  },
  "CreateHamrOrgConnection": {
    "accessPath": [
      "createHamrOrgConnection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/hamr",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create or update HAMR organization connection"
  },
  "ListIncidents": {
    "accessPath": [
      "listIncidents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include",
      "page[size]",
      "page[offset]"
    ],
    "description": "Get a list of incidents",
    "parameterDescriptions": {
      "include": "Specifies which types of related objects should be included in the response.",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[offset]": "Specific offset to use as the beginning of the returned page."
    }
  },
  "CreateIncident": {
    "accessPath": [
      "createIncident"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an incident"
  },
  "DeleteGlobalIncidentHandle": {
    "accessPath": [
      "deleteGlobalIncidentHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/incidents/config/global/incident-handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete global incident handle"
  },
  "ListGlobalIncidentHandles": {
    "accessPath": [
      "listGlobalIncidentHandles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/global/incident-handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "List global incident handles",
    "parameterDescriptions": {
      "include": "Comma-separated list of related resources to include in the response"
    }
  },
  "CreateGlobalIncidentHandle": {
    "accessPath": [
      "createGlobalIncidentHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/config/global/incident-handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Create global incident handle",
    "parameterDescriptions": {
      "include": "Comma-separated list of related resources to include in the response"
    }
  },
  "UpdateGlobalIncidentHandle": {
    "accessPath": [
      "updateGlobalIncidentHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/incidents/config/global/incident-handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Update global incident handle",
    "parameterDescriptions": {
      "include": "Comma-separated list of related resources to include in the response"
    }
  },
  "GetGlobalIncidentSettings": {
    "accessPath": [
      "getGlobalIncidentSettings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/global/settings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get global incident settings"
  },
  "UpdateGlobalIncidentSettings": {
    "accessPath": [
      "updateGlobalIncidentSettings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/incidents/config/global/settings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update global incident settings"
  },
  "ListIncidentNotificationRules": {
    "accessPath": [
      "listIncidentNotificationRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/notification-rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "List incident notification rules",
    "parameterDescriptions": {
      "include": "Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`"
    }
  },
  "CreateIncidentNotificationRule": {
    "accessPath": [
      "createIncidentNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/config/notification-rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an incident notification rule"
  },
  "DeleteIncidentNotificationRule": {
    "accessPath": [
      "deleteIncidentNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/incidents/config/notification-rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Delete an incident notification rule",
    "parameterDescriptions": {
      "id": "The ID of the notification rule.",
      "include": "Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`"
    }
  },
  "GetIncidentNotificationRule": {
    "accessPath": [
      "getIncidentNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/notification-rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get an incident notification rule",
    "parameterDescriptions": {
      "id": "The ID of the notification rule.",
      "include": "Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`"
    }
  },
  "UpdateIncidentNotificationRule": {
    "accessPath": [
      "updateIncidentNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/incidents/config/notification-rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Update an incident notification rule",
    "parameterDescriptions": {
      "id": "The ID of the notification rule.",
      "include": "Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`"
    }
  },
  "ListIncidentNotificationTemplates": {
    "accessPath": [
      "listIncidentNotificationTemplates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/notification-templates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[incident-type]",
      "include"
    ],
    "description": "List incident notification templates",
    "parameterDescriptions": {
      "filter[incident-type]": "Optional incident type ID filter.",
      "include": "Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`"
    }
  },
  "CreateIncidentNotificationTemplate": {
    "accessPath": [
      "createIncidentNotificationTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/config/notification-templates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create incident notification template"
  },
  "DeleteIncidentNotificationTemplate": {
    "accessPath": [
      "deleteIncidentNotificationTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/incidents/config/notification-templates/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Delete a notification template",
    "parameterDescriptions": {
      "id": "The ID of the notification template.",
      "include": "Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`"
    }
  },
  "GetIncidentNotificationTemplate": {
    "accessPath": [
      "getIncidentNotificationTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/notification-templates/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get incident notification template",
    "parameterDescriptions": {
      "id": "The ID of the notification template.",
      "include": "Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`"
    }
  },
  "UpdateIncidentNotificationTemplate": {
    "accessPath": [
      "updateIncidentNotificationTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/incidents/config/notification-templates/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Update incident notification template",
    "parameterDescriptions": {
      "id": "The ID of the notification template.",
      "include": "Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`"
    }
  },
  "ListIncidentPostmortemTemplates": {
    "accessPath": [
      "listIncidentPostmortemTemplates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/postmortem-templates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List postmortem templates"
  },
  "CreateIncidentPostmortemTemplate": {
    "accessPath": [
      "createIncidentPostmortemTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/config/postmortem-templates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create postmortem template"
  },
  "DeleteIncidentPostmortemTemplate": {
    "accessPath": [
      "deleteIncidentPostmortemTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/incidents/config/postmortem-templates/{template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete postmortem template",
    "parameterDescriptions": {
      "template_id": "The ID of the postmortem template"
    }
  },
  "GetIncidentPostmortemTemplate": {
    "accessPath": [
      "getIncidentPostmortemTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/postmortem-templates/{template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get postmortem template",
    "parameterDescriptions": {
      "template_id": "The ID of the postmortem template"
    }
  },
  "UpdateIncidentPostmortemTemplate": {
    "accessPath": [
      "updateIncidentPostmortemTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/incidents/config/postmortem-templates/{template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update postmortem template",
    "parameterDescriptions": {
      "template_id": "The ID of the postmortem template"
    }
  },
  "ListIncidentTypes": {
    "accessPath": [
      "listIncidentTypes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/types",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include_deleted"
    ],
    "description": "Get a list of incident types",
    "parameterDescriptions": {
      "include_deleted": "Include deleted incident types in the response."
    }
  },
  "CreateIncidentType": {
    "accessPath": [
      "createIncidentType"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/config/types",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an incident type"
  },
  "DeleteIncidentType": {
    "accessPath": [
      "deleteIncidentType"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/incidents/config/types/{incident_type_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_type_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an incident type",
    "parameterDescriptions": {
      "incident_type_id": "The UUID of the incident type."
    }
  },
  "GetIncidentType": {
    "accessPath": [
      "getIncidentType"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/types/{incident_type_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_type_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get incident type details",
    "parameterDescriptions": {
      "incident_type_id": "The UUID of the incident type."
    }
  },
  "UpdateIncidentType": {
    "accessPath": [
      "updateIncidentType"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/incidents/config/types/{incident_type_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_type_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an incident type",
    "parameterDescriptions": {
      "incident_type_id": "The UUID of the incident type."
    }
  },
  "ListIncidentUserDefinedFields": {
    "accessPath": [
      "listIncidentUserDefinedFields"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/user-defined-fields",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "include-deleted",
      "filter[incident-type]",
      "include"
    ],
    "description": "Get a list of incident user-defined fields",
    "parameterDescriptions": {
      "page[size]": "The number of results to return per page. Must be between 0 and 1000.",
      "page[number]": "The page number to retrieve, starting at 0.",
      "include-deleted": "When true, include soft-deleted fields in the response.",
      "filter[incident-type]": "Filter results to fields associated with the given incident type UUID.",
      "include": "Comma-separated list of related resources to include. Supported values are \"last_modified_by_user\", \"created_by_user\", and \"incident_type\"."
    }
  },
  "CreateIncidentUserDefinedField": {
    "accessPath": [
      "createIncidentUserDefinedField"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/config/user-defined-fields",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Create an incident user-defined field",
    "parameterDescriptions": {
      "include": "Comma-separated list of related resources to include. Supported values are \"last_modified_by_user\", \"created_by_user\", and \"incident_type\"."
    }
  },
  "DeleteIncidentUserDefinedField": {
    "accessPath": [
      "deleteIncidentUserDefinedField"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/incidents/config/user-defined-fields/{field_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "field_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an incident user-defined field",
    "parameterDescriptions": {
      "field_id": "The ID of the incident user-defined field."
    }
  },
  "GetIncidentUserDefinedField": {
    "accessPath": [
      "getIncidentUserDefinedField"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/config/user-defined-fields/{field_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "field_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get an incident user-defined field",
    "parameterDescriptions": {
      "field_id": "The ID of the incident user-defined field.",
      "include": "Comma-separated list of related resources to include. Supported values are \"last_modified_by_user\", \"created_by_user\", and \"incident_type\"."
    }
  },
  "UpdateIncidentUserDefinedField": {
    "accessPath": [
      "updateIncidentUserDefinedField"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/incidents/config/user-defined-fields/{field_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "field_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Update an incident user-defined field",
    "parameterDescriptions": {
      "field_id": "The ID of the incident user-defined field.",
      "include": "Comma-separated list of related resources to include. Supported values are \"last_modified_by_user\", \"created_by_user\", and \"incident_type\"."
    }
  },
  "ImportIncident": {
    "accessPath": [
      "importIncident"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/import",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Import an incident",
    "parameterDescriptions": {
      "include": "Specifies which related object types to include in the response when importing an incident."
    }
  },
  "SearchIncidents": {
    "accessPath": [
      "searchIncidents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include",
      "query",
      "sort",
      "page[size]",
      "page[offset]"
    ],
    "description": "Search for incidents",
    "parameterDescriptions": {
      "include": "Specifies which types of related objects should be included in the response.",
      "query": "Specifies which incidents should be returned. The query can contain any number of incident facets\njoined by `ANDs`, along with multiple values for each of those facets joined by `OR`s. For\nexample: `state:active AND severity:(SEV-2 OR SEV-1)`.",
      "sort": "Specifies the order of returned incidents.",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[offset]": "Specific offset to use as the beginning of the returned page."
    }
  },
  "DeleteIncident": {
    "accessPath": [
      "deleteIncident"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/incidents/{incident_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an existing incident",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident."
    }
  },
  "GetIncident": {
    "accessPath": [
      "getIncident"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/{incident_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get the details of an incident",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "include": "Specifies which types of related objects should be included in the response."
    }
  },
  "UpdateIncident": {
    "accessPath": [
      "updateIncident"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/incidents/{incident_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Update an existing incident",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "include": "Specifies which types of related objects should be included in the response."
    }
  },
  "ListIncidentAttachments": {
    "accessPath": [
      "listIncidentAttachments"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/{incident_id}/attachments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[attachment_type]",
      "include"
    ],
    "description": "List incident attachments",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "filter[attachment_type]": "Filter attachments by type. Supported values are `1` (`postmortem`) and `2` (`link`).",
      "include": "Resource to include in the response. Supported value: `last_modified_by_user`."
    }
  },
  "CreateIncidentAttachment": {
    "accessPath": [
      "createIncidentAttachment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/{incident_id}/attachments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Create incident attachment",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "include": "Resource to include in the response. Supported value: `last_modified_by_user`."
    }
  },
  "CreateIncidentPostmortemAttachment": {
    "accessPath": [
      "createIncidentPostmortemAttachment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/{incident_id}/attachments/postmortems",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create postmortem attachment",
    "parameterDescriptions": {
      "incident_id": "The ID of the incident"
    }
  },
  "DeleteIncidentAttachment": {
    "accessPath": [
      "deleteIncidentAttachment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/incidents/{incident_id}/attachments/{attachment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id",
      "attachment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete incident attachment",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "attachment_id": "The ID of the attachment."
    }
  },
  "UpdateIncidentAttachment": {
    "accessPath": [
      "updateIncidentAttachment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/incidents/{incident_id}/attachments/{attachment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id",
      "attachment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Update incident attachment",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "attachment_id": "The ID of the attachment.",
      "include": "Resource to include in the response. Supported value: `last_modified_by_user`."
    }
  },
  "ListIncidentImpacts": {
    "accessPath": [
      "listIncidentImpacts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/{incident_id}/impacts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "List an incident's impacts",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "include": "Specifies which related resources should be included in the response."
    }
  },
  "CreateIncidentImpact": {
    "accessPath": [
      "createIncidentImpact"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/{incident_id}/impacts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Create an incident impact",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "include": "Specifies which related resources should be included in the response."
    }
  },
  "DeleteIncidentImpact": {
    "accessPath": [
      "deleteIncidentImpact"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/incidents/{incident_id}/impacts/{impact_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id",
      "impact_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an incident impact",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "impact_id": "The UUID of the incident impact."
    }
  },
  "ListIncidentIntegrations": {
    "accessPath": [
      "listIncidentIntegrations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/{incident_id}/relationships/integrations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a list of an incident's integration metadata",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident."
    }
  },
  "CreateIncidentIntegration": {
    "accessPath": [
      "createIncidentIntegration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/{incident_id}/relationships/integrations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an incident integration metadata",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident."
    }
  },
  "DeleteIncidentIntegration": {
    "accessPath": [
      "deleteIncidentIntegration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/incidents/{incident_id}/relationships/integrations/{integration_metadata_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id",
      "integration_metadata_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an incident integration metadata",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "integration_metadata_id": "The UUID of the incident integration metadata."
    }
  },
  "GetIncidentIntegration": {
    "accessPath": [
      "getIncidentIntegration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/{incident_id}/relationships/integrations/{integration_metadata_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id",
      "integration_metadata_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get incident integration metadata details",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "integration_metadata_id": "The UUID of the incident integration metadata."
    }
  },
  "UpdateIncidentIntegration": {
    "accessPath": [
      "updateIncidentIntegration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/incidents/{incident_id}/relationships/integrations/{integration_metadata_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id",
      "integration_metadata_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an existing incident integration metadata",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "integration_metadata_id": "The UUID of the incident integration metadata."
    }
  },
  "ListIncidentTodos": {
    "accessPath": [
      "listIncidentTodos"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/{incident_id}/relationships/todos",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a list of an incident's todos",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident."
    }
  },
  "CreateIncidentTodo": {
    "accessPath": [
      "createIncidentTodo"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/incidents/{incident_id}/relationships/todos",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an incident todo",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident."
    }
  },
  "DeleteIncidentTodo": {
    "accessPath": [
      "deleteIncidentTodo"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/incidents/{incident_id}/relationships/todos/{todo_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id",
      "todo_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an incident todo",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "todo_id": "The UUID of the incident todo."
    }
  },
  "GetIncidentTodo": {
    "accessPath": [
      "getIncidentTodo"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/incidents/{incident_id}/relationships/todos/{todo_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id",
      "todo_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get incident todo details",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "todo_id": "The UUID of the incident todo."
    }
  },
  "UpdateIncidentTodo": {
    "accessPath": [
      "updateIncidentTodo"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/incidents/{incident_id}/relationships/todos/{todo_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "incident_id",
      "todo_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an incident todo",
    "parameterDescriptions": {
      "incident_id": "The UUID of the incident.",
      "todo_id": "The UUID of the incident todo."
    }
  },
  "ListAWSAccounts": {
    "accessPath": [
      "listAwsAccounts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/aws/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "aws_account_id"
    ],
    "description": "List all AWS integrations",
    "parameterDescriptions": {
      "aws_account_id": "Optional query parameter to filter accounts by AWS Account ID.\nIf not provided, all accounts are returned."
    }
  },
  "CreateAWSAccount": {
    "accessPath": [
      "createAwsAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/aws/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an AWS integration"
  },
  "DeleteAWSAccount": {
    "accessPath": [
      "deleteAwsAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/aws/accounts/{aws_account_config_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "aws_account_config_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an AWS integration",
    "parameterDescriptions": {
      "aws_account_config_id": "Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the\n[List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations)\nendpoint and query by AWS Account ID."
    }
  },
  "GetAWSAccount": {
    "accessPath": [
      "getAwsAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/aws/accounts/{aws_account_config_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "aws_account_config_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an AWS integration by config ID",
    "parameterDescriptions": {
      "aws_account_config_id": "Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the\n[List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations)\nendpoint and query by AWS Account ID."
    }
  },
  "UpdateAWSAccount": {
    "accessPath": [
      "updateAwsAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integration/aws/accounts/{aws_account_config_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "aws_account_config_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an AWS integration",
    "parameterDescriptions": {
      "aws_account_config_id": "Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the\n[List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations)\nendpoint and query by AWS Account ID."
    }
  },
  "DeleteAWSAccountCCMConfig": {
    "accessPath": [
      "deleteAwsAccountCcmConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/aws/accounts/{aws_account_config_id}/ccm_config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "aws_account_config_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete AWS CCM config",
    "parameterDescriptions": {
      "aws_account_config_id": "Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the\n[List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations)\nendpoint and query by AWS Account ID."
    }
  },
  "GetAWSAccountCCMConfig": {
    "accessPath": [
      "getAwsAccountCcmConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/aws/accounts/{aws_account_config_id}/ccm_config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "aws_account_config_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get AWS CCM config",
    "parameterDescriptions": {
      "aws_account_config_id": "Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the\n[List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations)\nendpoint and query by AWS Account ID."
    }
  },
  "UpdateAWSAccountCCMConfig": {
    "accessPath": [
      "updateAwsAccountCcmConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integration/aws/accounts/{aws_account_config_id}/ccm_config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "aws_account_config_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update AWS CCM config",
    "parameterDescriptions": {
      "aws_account_config_id": "Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the\n[List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations)\nendpoint and query by AWS Account ID."
    }
  },
  "CreateAWSAccountCCMConfig": {
    "accessPath": [
      "createAwsAccountCcmConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/aws/accounts/{aws_account_config_id}/ccm_config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "aws_account_config_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create AWS CCM config",
    "parameterDescriptions": {
      "aws_account_config_id": "Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the\n[List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations)\nendpoint and query by AWS Account ID."
    }
  },
  "ListAWSNamespaces": {
    "accessPath": [
      "listAwsNamespaces"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/aws/available_namespaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List available namespaces"
  },
  "DeleteAWSEventBridgeSource": {
    "accessPath": [
      "deleteAwsEventBridgeSource"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/aws/event_bridge",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an Amazon EventBridge source"
  },
  "ListAWSEventBridgeSources": {
    "accessPath": [
      "listAwsEventBridgeSources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/aws/event_bridge",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all Amazon EventBridge sources"
  },
  "CreateAWSEventBridgeSource": {
    "accessPath": [
      "createAwsEventBridgeSource"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/aws/event_bridge",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an Amazon EventBridge source"
  },
  "CreateNewAWSExternalID": {
    "accessPath": [
      "createNewAwsExternalId"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/aws/generate_new_external_id",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Generate a new external ID"
  },
  "GetAWSIntegrationIAMPermissions": {
    "accessPath": [
      "getAwsIntegrationIamPermissions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/aws/iam_permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get AWS integration IAM permissions"
  },
  "GetAWSIntegrationIAMPermissionsResourceCollection": {
    "accessPath": [
      "getAwsIntegrationIamPermissionsResourceCollection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/aws/iam_permissions/resource_collection",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get resource collection IAM permissions"
  },
  "GetAWSIntegrationIAMPermissionsStandard": {
    "accessPath": [
      "getAwsIntegrationIamPermissionsStandard"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/aws/iam_permissions/standard",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get AWS integration standard IAM permissions"
  },
  "ListAWSLogsServices": {
    "accessPath": [
      "listAwsLogsServices"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/aws/logs/services",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get list of AWS log ready services"
  },
  "ListGCPSTSAccounts": {
    "accessPath": [
      "listGcpstsAccounts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/gcp/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List all GCP STS-enabled service accounts"
  },
  "CreateGCPSTSAccount": {
    "accessPath": [
      "createGcpstsAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/gcp/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new entry for your service account"
  },
  "DeleteGCPSTSAccount": {
    "accessPath": [
      "deleteGcpstsAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/gcp/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an STS enabled GCP Account",
    "parameterDescriptions": {
      "account_id": "Your GCP STS enabled service account's unique ID."
    }
  },
  "UpdateGCPSTSAccount": {
    "accessPath": [
      "updateGcpstsAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integration/gcp/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update STS Service Account",
    "parameterDescriptions": {
      "account_id": "Your GCP STS enabled service account's unique ID."
    }
  },
  "GetGCPSTSDelegate": {
    "accessPath": [
      "getGcpstsDelegate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/gcp/sts_delegate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List delegate account"
  },
  "MakeGCPSTSDelegate": {
    "accessPath": [
      "makeGcpstsDelegate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/gcp/sts_delegate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Datadog GCP principal"
  },
  "GetSpaceByDisplayName": {
    "accessPath": [
      "getSpaceByDisplayName"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/google-chat/organizations/app/named-spaces/{domain_name}/{space_display_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "domain_name",
      "space_display_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get space information by display name",
    "parameterDescriptions": {
      "domain_name": "The Google Chat domain name.",
      "space_display_name": "The Google Chat space display name."
    }
  },
  "ListOrganizationHandles": {
    "accessPath": [
      "listOrganizationHandles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "organization_binding_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all organization handles",
    "parameterDescriptions": {
      "organization_binding_id": "Your organization binding ID."
    }
  },
  "CreateOrganizationHandle": {
    "accessPath": [
      "createOrganizationHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data",
      "type"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "organization_binding_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create organization handle",
    "parameterDescriptions": {
      "organization_binding_id": "Your organization binding ID."
    }
  },
  "DeleteOrganizationHandle": {
    "accessPath": [
      "deleteOrganizationHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "organization_binding_id",
      "handle_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete organization handle",
    "parameterDescriptions": {
      "organization_binding_id": "Your organization binding ID.",
      "handle_id": "Your organization handle ID."
    }
  },
  "GetOrganizationHandle": {
    "accessPath": [
      "getOrganizationHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "organization_binding_id",
      "handle_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get organization handle",
    "parameterDescriptions": {
      "organization_binding_id": "Your organization binding ID.",
      "handle_id": "Your organization handle ID."
    }
  },
  "UpdateOrganizationHandle": {
    "accessPath": [
      "updateOrganizationHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data",
      "type"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "organization_binding_id",
      "handle_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update organization handle",
    "parameterDescriptions": {
      "organization_binding_id": "Your organization binding ID.",
      "handle_id": "Your organization handle ID."
    }
  },
  "ListJiraAccounts": {
    "accessPath": [
      "listJiraAccounts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/jira/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Jira accounts"
  },
  "DeleteJiraAccount": {
    "accessPath": [
      "deleteJiraAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/jira/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Jira account",
    "parameterDescriptions": {
      "account_id": "The ID of the Jira account to delete"
    }
  },
  "ListJiraIssueTemplates": {
    "accessPath": [
      "listJiraIssueTemplates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/jira/issue-templates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Jira issue templates"
  },
  "CreateJiraIssueTemplate": {
    "accessPath": [
      "createJiraIssueTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/jira/issue-templates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Jira issue template"
  },
  "DeleteJiraIssueTemplate": {
    "accessPath": [
      "deleteJiraIssueTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/jira/issue-templates/{issue_template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "issue_template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Jira issue template",
    "parameterDescriptions": {
      "issue_template_id": "The ID of the Jira issue template to delete"
    }
  },
  "GetJiraIssueTemplate": {
    "accessPath": [
      "getJiraIssueTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/jira/issue-templates/{issue_template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "issue_template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Jira issue template",
    "parameterDescriptions": {
      "issue_template_id": "The ID of the Jira issue template to retrieve"
    }
  },
  "UpdateJiraIssueTemplate": {
    "accessPath": [
      "updateJiraIssueTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integration/jira/issue-templates/{issue_template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "issue_template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Jira issue template",
    "parameterDescriptions": {
      "issue_template_id": "The ID of the Jira issue template to update"
    }
  },
  "GetChannelByName": {
    "accessPath": [
      "getChannelByName"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/ms-teams/configuration/channel/{tenant_name}/{team_name}/{channel_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "tenant_name",
      "team_name",
      "channel_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get channel information by name",
    "parameterDescriptions": {
      "tenant_name": "Your tenant name.",
      "team_name": "Your team name.",
      "channel_name": "Your channel name."
    }
  },
  "ListTenantBasedHandles": {
    "accessPath": [
      "listTenantBasedHandles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/ms-teams/configuration/tenant-based-handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "tenant_id",
      "name"
    ],
    "description": "Get all tenant-based handles",
    "parameterDescriptions": {
      "tenant_id": "Your tenant id.",
      "name": "Your tenant-based handle name."
    }
  },
  "CreateTenantBasedHandle": {
    "accessPath": [
      "createTenantBasedHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/ms-teams/configuration/tenant-based-handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create tenant-based handle"
  },
  "DeleteTenantBasedHandle": {
    "accessPath": [
      "deleteTenantBasedHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "handle_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete tenant-based handle",
    "parameterDescriptions": {
      "handle_id": "Your tenant-based handle id."
    }
  },
  "GetTenantBasedHandle": {
    "accessPath": [
      "getTenantBasedHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "handle_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get tenant-based handle information",
    "parameterDescriptions": {
      "handle_id": "Your tenant-based handle id."
    }
  },
  "UpdateTenantBasedHandle": {
    "accessPath": [
      "updateTenantBasedHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "handle_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update tenant-based handle",
    "parameterDescriptions": {
      "handle_id": "Your tenant-based handle id."
    }
  },
  "ListWorkflowsWebhookHandles": {
    "accessPath": [
      "listWorkflowsWebhookHandles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/ms-teams/configuration/workflows-webhook-handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "name"
    ],
    "description": "Get all Workflows webhook handles",
    "parameterDescriptions": {
      "name": "Your Workflows webhook handle name."
    }
  },
  "CreateWorkflowsWebhookHandle": {
    "accessPath": [
      "createWorkflowsWebhookHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/ms-teams/configuration/workflows-webhook-handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Workflows webhook handle"
  },
  "DeleteWorkflowsWebhookHandle": {
    "accessPath": [
      "deleteWorkflowsWebhookHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/ms-teams/configuration/workflows-webhook-handles/{handle_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "handle_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Workflows webhook handle",
    "parameterDescriptions": {
      "handle_id": "Your Workflows webhook handle id."
    }
  },
  "GetWorkflowsWebhookHandle": {
    "accessPath": [
      "getWorkflowsWebhookHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/ms-teams/configuration/workflows-webhook-handles/{handle_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "handle_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Workflows webhook handle information",
    "parameterDescriptions": {
      "handle_id": "Your Workflows webhook handle id."
    }
  },
  "UpdateWorkflowsWebhookHandle": {
    "accessPath": [
      "updateWorkflowsWebhookHandle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integration/ms-teams/configuration/workflows-webhook-handles/{handle_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "handle_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Workflows webhook handle",
    "parameterDescriptions": {
      "handle_id": "Your Workflows webhook handle id."
    }
  },
  "ListTenancyProducts": {
    "accessPath": [
      "listTenancyProducts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/oci/products",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "productKeys"
    ],
    "description": "List tenancy products",
    "parameterDescriptions": {
      "productKeys": "Comma-separated list of product keys to filter by."
    }
  },
  "GetTenancyConfigs": {
    "accessPath": [
      "getTenancyConfigs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/oci/tenancies",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get tenancy configs"
  },
  "CreateTenancyConfig": {
    "accessPath": [
      "createTenancyConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/oci/tenancies",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create tenancy config"
  },
  "DeleteTenancyConfig": {
    "accessPath": [
      "deleteTenancyConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/oci/tenancies/{tenancy_ocid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "tenancy_ocid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete tenancy config",
    "parameterDescriptions": {
      "tenancy_ocid": "The OCID of the tenancy config to delete."
    }
  },
  "GetTenancyConfig": {
    "accessPath": [
      "getTenancyConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/oci/tenancies/{tenancy_ocid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "tenancy_ocid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get tenancy config",
    "parameterDescriptions": {
      "tenancy_ocid": "The OCID of the tenancy config to retrieve."
    }
  },
  "UpdateTenancyConfig": {
    "accessPath": [
      "updateTenancyConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integration/oci/tenancies/{tenancy_ocid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "tenancy_ocid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update tenancy config",
    "parameterDescriptions": {
      "tenancy_ocid": "The OCID of the tenancy config to update."
    }
  },
  "ListOpsgenieServices": {
    "accessPath": [
      "listOpsgenieServices"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/opsgenie/services",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all service objects"
  },
  "CreateOpsgenieService": {
    "accessPath": [
      "createOpsgenieService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/opsgenie/services",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new service object"
  },
  "DeleteOpsgenieService": {
    "accessPath": [
      "deleteOpsgenieService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/opsgenie/services/{integration_service_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "integration_service_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a single service object",
    "parameterDescriptions": {
      "integration_service_id": "The UUID of the service."
    }
  },
  "GetOpsgenieService": {
    "accessPath": [
      "getOpsgenieService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/opsgenie/services/{integration_service_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "integration_service_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a single service object",
    "parameterDescriptions": {
      "integration_service_id": "The UUID of the service."
    }
  },
  "UpdateOpsgenieService": {
    "accessPath": [
      "updateOpsgenieService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integration/opsgenie/services/{integration_service_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "integration_service_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a single service object",
    "parameterDescriptions": {
      "integration_service_id": "The UUID of the service."
    }
  },
  "ListServiceNowAssignmentGroups": {
    "accessPath": [
      "listServiceNowAssignmentGroups"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/servicenow/assignment_groups/{instance_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "instance_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List ServiceNow assignment groups",
    "parameterDescriptions": {
      "instance_id": "The ID of the ServiceNow instance"
    }
  },
  "ListServiceNowBusinessServices": {
    "accessPath": [
      "listServiceNowBusinessServices"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/servicenow/business_services/{instance_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "instance_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List ServiceNow business services",
    "parameterDescriptions": {
      "instance_id": "The ID of the ServiceNow instance"
    }
  },
  "ListServiceNowTemplates": {
    "accessPath": [
      "listServiceNowTemplates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/servicenow/handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List ServiceNow templates"
  },
  "CreateServiceNowTemplate": {
    "accessPath": [
      "createServiceNowTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integration/servicenow/handles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create ServiceNow template"
  },
  "DeleteServiceNowTemplate": {
    "accessPath": [
      "deleteServiceNowTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integration/servicenow/handles/{template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete ServiceNow template",
    "parameterDescriptions": {
      "template_id": "The ID of the ServiceNow template to delete"
    }
  },
  "GetServiceNowTemplate": {
    "accessPath": [
      "getServiceNowTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/servicenow/handles/{template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get ServiceNow template",
    "parameterDescriptions": {
      "template_id": "The ID of the ServiceNow template to retrieve"
    }
  },
  "UpdateServiceNowTemplate": {
    "accessPath": [
      "updateServiceNowTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/integration/servicenow/handles/{template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update ServiceNow template",
    "parameterDescriptions": {
      "template_id": "The ID of the ServiceNow template to update"
    }
  },
  "ListServiceNowInstances": {
    "accessPath": [
      "listServiceNowInstances"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/servicenow/instances",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List ServiceNow instances"
  },
  "ListServiceNowUsers": {
    "accessPath": [
      "listServiceNowUsers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integration/servicenow/users/{instance_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "instance_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List ServiceNow users",
    "parameterDescriptions": {
      "instance_id": "The ID of the ServiceNow instance"
    }
  },
  "ListIntegrations": {
    "accessPath": [
      "listIntegrations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Integrations"
  },
  "ListCloudflareAccounts": {
    "accessPath": [
      "listCloudflareAccounts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/cloudflare/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Cloudflare accounts"
  },
  "CreateCloudflareAccount": {
    "accessPath": [
      "createCloudflareAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integrations/cloudflare/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Cloudflare account"
  },
  "DeleteCloudflareAccount": {
    "accessPath": [
      "deleteCloudflareAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integrations/cloudflare/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Cloudflare account",
    "parameterDescriptions": {
      "account_id": "None"
    }
  },
  "GetCloudflareAccount": {
    "accessPath": [
      "getCloudflareAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/cloudflare/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Cloudflare account",
    "parameterDescriptions": {
      "account_id": "None"
    }
  },
  "UpdateCloudflareAccount": {
    "accessPath": [
      "updateCloudflareAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integrations/cloudflare/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Cloudflare account",
    "parameterDescriptions": {
      "account_id": "None"
    }
  },
  "ListConfluentAccount": {
    "accessPath": [
      "listConfluentAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/confluent-cloud/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Confluent accounts"
  },
  "CreateConfluentAccount": {
    "accessPath": [
      "createConfluentAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integrations/confluent-cloud/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Confluent account"
  },
  "DeleteConfluentAccount": {
    "accessPath": [
      "deleteConfluentAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integrations/confluent-cloud/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Confluent account",
    "parameterDescriptions": {
      "account_id": "Confluent Account ID."
    }
  },
  "GetConfluentAccount": {
    "accessPath": [
      "getConfluentAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/confluent-cloud/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Confluent account",
    "parameterDescriptions": {
      "account_id": "Confluent Account ID."
    }
  },
  "UpdateConfluentAccount": {
    "accessPath": [
      "updateConfluentAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integrations/confluent-cloud/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Confluent account",
    "parameterDescriptions": {
      "account_id": "Confluent Account ID."
    }
  },
  "ListConfluentResource": {
    "accessPath": [
      "listConfluentResource"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/confluent-cloud/accounts/{account_id}/resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Confluent Account resources",
    "parameterDescriptions": {
      "account_id": "Confluent Account ID."
    }
  },
  "CreateConfluentResource": {
    "accessPath": [
      "createConfluentResource"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integrations/confluent-cloud/accounts/{account_id}/resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add resource to Confluent account",
    "parameterDescriptions": {
      "account_id": "Confluent Account ID."
    }
  },
  "DeleteConfluentResource": {
    "accessPath": [
      "deleteConfluentResource"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integrations/confluent-cloud/accounts/{account_id}/resources/{resource_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id",
      "resource_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete resource from Confluent account",
    "parameterDescriptions": {
      "account_id": "Confluent Account ID.",
      "resource_id": "Confluent Account Resource ID."
    }
  },
  "GetConfluentResource": {
    "accessPath": [
      "getConfluentResource"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/confluent-cloud/accounts/{account_id}/resources/{resource_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id",
      "resource_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get resource from Confluent account",
    "parameterDescriptions": {
      "account_id": "Confluent Account ID.",
      "resource_id": "Confluent Account Resource ID."
    }
  },
  "UpdateConfluentResource": {
    "accessPath": [
      "updateConfluentResource"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integrations/confluent-cloud/accounts/{account_id}/resources/{resource_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id",
      "resource_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update resource in Confluent account",
    "parameterDescriptions": {
      "account_id": "Confluent Account ID.",
      "resource_id": "Confluent Account Resource ID."
    }
  },
  "ListFastlyAccounts": {
    "accessPath": [
      "listFastlyAccounts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/fastly/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Fastly accounts"
  },
  "CreateFastlyAccount": {
    "accessPath": [
      "createFastlyAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integrations/fastly/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Fastly account"
  },
  "DeleteFastlyAccount": {
    "accessPath": [
      "deleteFastlyAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integrations/fastly/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Fastly account",
    "parameterDescriptions": {
      "account_id": "Fastly Account id."
    }
  },
  "GetFastlyAccount": {
    "accessPath": [
      "getFastlyAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/fastly/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Fastly account",
    "parameterDescriptions": {
      "account_id": "Fastly Account id."
    }
  },
  "UpdateFastlyAccount": {
    "accessPath": [
      "updateFastlyAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integrations/fastly/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Fastly account",
    "parameterDescriptions": {
      "account_id": "Fastly Account id."
    }
  },
  "ListFastlyServices": {
    "accessPath": [
      "listFastlyServices"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/fastly/accounts/{account_id}/services",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Fastly services",
    "parameterDescriptions": {
      "account_id": "Fastly Account id."
    }
  },
  "CreateFastlyService": {
    "accessPath": [
      "createFastlyService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integrations/fastly/accounts/{account_id}/services",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Fastly service",
    "parameterDescriptions": {
      "account_id": "Fastly Account id."
    }
  },
  "DeleteFastlyService": {
    "accessPath": [
      "deleteFastlyService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integrations/fastly/accounts/{account_id}/services/{service_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id",
      "service_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Fastly service",
    "parameterDescriptions": {
      "account_id": "Fastly Account id.",
      "service_id": "Fastly Service ID."
    }
  },
  "GetFastlyService": {
    "accessPath": [
      "getFastlyService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/fastly/accounts/{account_id}/services/{service_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id",
      "service_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Fastly service",
    "parameterDescriptions": {
      "account_id": "Fastly Account id.",
      "service_id": "Fastly Service ID."
    }
  },
  "UpdateFastlyService": {
    "accessPath": [
      "updateFastlyService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integrations/fastly/accounts/{account_id}/services/{service_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id",
      "service_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Fastly service",
    "parameterDescriptions": {
      "account_id": "Fastly Account id.",
      "service_id": "Fastly Service ID."
    }
  },
  "ListOktaAccounts": {
    "accessPath": [
      "listOktaAccounts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/okta/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Okta accounts"
  },
  "CreateOktaAccount": {
    "accessPath": [
      "createOktaAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/integrations/okta/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Okta account"
  },
  "DeleteOktaAccount": {
    "accessPath": [
      "deleteOktaAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/integrations/okta/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Okta account",
    "parameterDescriptions": {
      "account_id": "None"
    }
  },
  "GetOktaAccount": {
    "accessPath": [
      "getOktaAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/integrations/okta/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Okta account",
    "parameterDescriptions": {
      "account_id": "None"
    }
  },
  "UpdateOktaAccount": {
    "accessPath": [
      "updateOktaAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/integrations/okta/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Okta account",
    "parameterDescriptions": {
      "account_id": "None"
    }
  },
  "GetIPAllowlist": {
    "accessPath": [
      "getIpAllowlist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/ip_allowlist",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get IP Allowlist"
  },
  "UpdateIPAllowlist": {
    "accessPath": [
      "updateIpAllowlist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/ip_allowlist",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update IP Allowlist"
  },
  "ListLLMObsExperiments": {
    "accessPath": [
      "listLlmObsExperiments"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/llm-obs/v1/experiments",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[project_id]",
      "filter[dataset_id]",
      "filter[id]",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "List LLM Observability experiments",
    "parameterDescriptions": {
      "filter[project_id]": "Filter experiments by project ID. Required if `filter[dataset_id]` is not provided.",
      "filter[dataset_id]": "Filter experiments by dataset ID.",
      "filter[id]": "Filter experiments by experiment ID. Can be specified multiple times.",
      "page[cursor]": "Use the Pagination cursor to retrieve the next page of results.",
      "page[limit]": "Maximum number of results to return per page."
    }
  },
  "CreateLLMObsExperiment": {
    "accessPath": [
      "createLlmObsExperiment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/llm-obs/v1/experiments",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an LLM Observability experiment"
  },
  "DeleteLLMObsExperiments": {
    "accessPath": [
      "deleteLlmObsExperiments"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/llm-obs/v1/experiments/delete",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete LLM Observability experiments"
  },
  "UpdateLLMObsExperiment": {
    "accessPath": [
      "updateLlmObsExperiment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/llm-obs/v1/experiments/{experiment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "experiment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an LLM Observability experiment",
    "parameterDescriptions": {
      "experiment_id": "The ID of the LLM Observability experiment."
    }
  },
  "CreateLLMObsExperimentEvents": {
    "accessPath": [
      "createLlmObsExperimentEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/llm-obs/v1/experiments/{experiment_id}/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "experiment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Push events for an LLM Observability experiment",
    "parameterDescriptions": {
      "experiment_id": "The ID of the LLM Observability experiment."
    }
  },
  "ListLLMObsProjects": {
    "accessPath": [
      "listLlmObsProjects"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/llm-obs/v1/projects",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[id]",
      "filter[name]",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "List LLM Observability projects",
    "parameterDescriptions": {
      "filter[id]": "Filter projects by project ID.",
      "filter[name]": "Filter projects by name.",
      "page[cursor]": "Use the Pagination cursor to retrieve the next page of results.",
      "page[limit]": "Maximum number of results to return per page."
    }
  },
  "CreateLLMObsProject": {
    "accessPath": [
      "createLlmObsProject"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/llm-obs/v1/projects",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an LLM Observability project"
  },
  "DeleteLLMObsProjects": {
    "accessPath": [
      "deleteLlmObsProjects"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/llm-obs/v1/projects/delete",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete LLM Observability projects"
  },
  "UpdateLLMObsProject": {
    "accessPath": [
      "updateLlmObsProject"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/llm-obs/v1/projects/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an LLM Observability project",
    "parameterDescriptions": {
      "project_id": "The ID of the LLM Observability project."
    }
  },
  "ListLLMObsDatasets": {
    "accessPath": [
      "listLlmObsDatasets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/llm-obs/v1/{project_id}/datasets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[name]",
      "filter[id]",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "List LLM Observability datasets",
    "parameterDescriptions": {
      "project_id": "The ID of the LLM Observability project.",
      "filter[name]": "Filter datasets by name.",
      "filter[id]": "Filter datasets by dataset ID.",
      "page[cursor]": "Use the Pagination cursor to retrieve the next page of results.",
      "page[limit]": "Maximum number of results to return per page."
    }
  },
  "CreateLLMObsDataset": {
    "accessPath": [
      "createLlmObsDataset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/llm-obs/v1/{project_id}/datasets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an LLM Observability dataset",
    "parameterDescriptions": {
      "project_id": "The ID of the LLM Observability project."
    }
  },
  "DeleteLLMObsDatasets": {
    "accessPath": [
      "deleteLlmObsDatasets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/llm-obs/v1/{project_id}/datasets/delete",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete LLM Observability datasets",
    "parameterDescriptions": {
      "project_id": "The ID of the LLM Observability project."
    }
  },
  "UpdateLLMObsDataset": {
    "accessPath": [
      "updateLlmObsDataset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "dataset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an LLM Observability dataset",
    "parameterDescriptions": {
      "project_id": "The ID of the LLM Observability project.",
      "dataset_id": "The ID of the LLM Observability dataset."
    }
  },
  "ListLLMObsDatasetRecords": {
    "accessPath": [
      "listLlmObsDatasetRecords"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "dataset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[version]",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "List LLM Observability dataset records",
    "parameterDescriptions": {
      "project_id": "The ID of the LLM Observability project.",
      "dataset_id": "The ID of the LLM Observability dataset.",
      "filter[version]": "Retrieve records from a specific dataset version. Defaults to the current version.",
      "page[cursor]": "Use the Pagination cursor to retrieve the next page of results.",
      "page[limit]": "Maximum number of results to return per page."
    }
  },
  "UpdateLLMObsDatasetRecords": {
    "accessPath": [
      "updateLlmObsDatasetRecords"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "dataset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update LLM Observability dataset records",
    "parameterDescriptions": {
      "project_id": "The ID of the LLM Observability project.",
      "dataset_id": "The ID of the LLM Observability dataset."
    }
  },
  "CreateLLMObsDatasetRecords": {
    "accessPath": [
      "createLlmObsDatasetRecords"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "dataset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Append records to an LLM Observability dataset",
    "parameterDescriptions": {
      "project_id": "The ID of the LLM Observability project.",
      "dataset_id": "The ID of the LLM Observability dataset."
    }
  },
  "DeleteLLMObsDatasetRecords": {
    "accessPath": [
      "deleteLlmObsDatasetRecords"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records/delete",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "dataset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete LLM Observability dataset records",
    "parameterDescriptions": {
      "project_id": "The ID of the LLM Observability project.",
      "dataset_id": "The ID of the LLM Observability dataset."
    }
  },
  "SubmitLog": {
    "accessPath": [
      "submitLog"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [
      "Content-Encoding"
    ],
    "method": "POST",
    "routeTemplate": "/api/v2/logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ddtags"
    ],
    "description": "Send logs",
    "parameterDescriptions": {
      "Content-Encoding": "HTTP header used to compress the media-type.",
      "ddtags": "Log tags can be passed as query parameters with `text/plain` content type."
    }
  },
  "AggregateLogs": {
    "accessPath": [
      "aggregateLogs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "compute",
      "filter",
      "group_by",
      "options",
      "page"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/logs/analytics/aggregate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Aggregate events"
  },
  "GetLogsArchiveOrder": {
    "accessPath": [
      "getLogsArchiveOrder"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/archive-order",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get archive order"
  },
  "UpdateLogsArchiveOrder": {
    "accessPath": [
      "updateLogsArchiveOrder"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/logs/config/archive-order",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update archive order"
  },
  "ListLogsArchives": {
    "accessPath": [
      "listLogsArchives"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/archives",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all archives"
  },
  "CreateLogsArchive": {
    "accessPath": [
      "createLogsArchive"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/logs/config/archives",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an archive"
  },
  "DeleteLogsArchive": {
    "accessPath": [
      "deleteLogsArchive"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/logs/config/archives/{archive_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "archive_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an archive",
    "parameterDescriptions": {
      "archive_id": "The ID of the archive."
    }
  },
  "GetLogsArchive": {
    "accessPath": [
      "getLogsArchive"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/archives/{archive_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "archive_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an archive",
    "parameterDescriptions": {
      "archive_id": "The ID of the archive."
    }
  },
  "UpdateLogsArchive": {
    "accessPath": [
      "updateLogsArchive"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/logs/config/archives/{archive_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "archive_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an archive",
    "parameterDescriptions": {
      "archive_id": "The ID of the archive."
    }
  },
  "RemoveRoleFromArchive": {
    "accessPath": [
      "removeRoleFromArchive"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/logs/config/archives/{archive_id}/readers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "archive_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Revoke role from an archive",
    "parameterDescriptions": {
      "archive_id": "The ID of the archive."
    }
  },
  "ListArchiveReadRoles": {
    "accessPath": [
      "listArchiveReadRoles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/archives/{archive_id}/readers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "archive_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List read roles for an archive",
    "parameterDescriptions": {
      "archive_id": "The ID of the archive."
    }
  },
  "AddReadRoleToArchive": {
    "accessPath": [
      "addReadRoleToArchive"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/logs/config/archives/{archive_id}/readers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "archive_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Grant role to an archive",
    "parameterDescriptions": {
      "archive_id": "The ID of the archive."
    }
  },
  "ListLogsCustomDestinations": {
    "accessPath": [
      "listLogsCustomDestinations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/custom-destinations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all custom destinations"
  },
  "CreateLogsCustomDestination": {
    "accessPath": [
      "createLogsCustomDestination"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/logs/config/custom-destinations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a custom destination"
  },
  "DeleteLogsCustomDestination": {
    "accessPath": [
      "deleteLogsCustomDestination"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/logs/config/custom-destinations/{custom_destination_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "custom_destination_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a custom destination",
    "parameterDescriptions": {
      "custom_destination_id": "The ID of the custom destination."
    }
  },
  "GetLogsCustomDestination": {
    "accessPath": [
      "getLogsCustomDestination"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/custom-destinations/{custom_destination_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "custom_destination_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a custom destination",
    "parameterDescriptions": {
      "custom_destination_id": "The ID of the custom destination."
    }
  },
  "UpdateLogsCustomDestination": {
    "accessPath": [
      "updateLogsCustomDestination"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/logs/config/custom-destinations/{custom_destination_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "custom_destination_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a custom destination",
    "parameterDescriptions": {
      "custom_destination_id": "The ID of the custom destination."
    }
  },
  "ListLogsMetrics": {
    "accessPath": [
      "listLogsMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all log-based metrics"
  },
  "CreateLogsMetric": {
    "accessPath": [
      "createLogsMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/logs/config/metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a log-based metric"
  },
  "DeleteLogsMetric": {
    "accessPath": [
      "deleteLogsMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/logs/config/metrics/{metric_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a log-based metric",
    "parameterDescriptions": {
      "metric_id": "The name of the log-based metric."
    }
  },
  "GetLogsMetric": {
    "accessPath": [
      "getLogsMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/metrics/{metric_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a log-based metric",
    "parameterDescriptions": {
      "metric_id": "The name of the log-based metric."
    }
  },
  "UpdateLogsMetric": {
    "accessPath": [
      "updateLogsMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/logs/config/metrics/{metric_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a log-based metric",
    "parameterDescriptions": {
      "metric_id": "The name of the log-based metric."
    }
  },
  "ListRestrictionQueries": {
    "accessPath": [
      "listRestrictionQueries"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/restriction_queries",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]"
    ],
    "description": "List restriction queries",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return."
    }
  },
  "CreateRestrictionQuery": {
    "accessPath": [
      "createRestrictionQuery"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/logs/config/restriction_queries",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a restriction query"
  },
  "GetRoleRestrictionQuery": {
    "accessPath": [
      "getRoleRestrictionQuery"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/restriction_queries/role/{role_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get restriction query for a given role",
    "parameterDescriptions": {
      "role_id": "The ID of the role."
    }
  },
  "ListUserRestrictionQueries": {
    "accessPath": [
      "listUserRestrictionQueries"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/restriction_queries/user/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all restriction queries for a given user",
    "parameterDescriptions": {
      "user_id": "The ID of the user."
    }
  },
  "DeleteRestrictionQuery": {
    "accessPath": [
      "deleteRestrictionQuery"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/logs/config/restriction_queries/{restriction_query_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "restriction_query_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a restriction query",
    "parameterDescriptions": {
      "restriction_query_id": "The ID of the restriction query."
    }
  },
  "GetRestrictionQuery": {
    "accessPath": [
      "getRestrictionQuery"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/restriction_queries/{restriction_query_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "restriction_query_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a restriction query",
    "parameterDescriptions": {
      "restriction_query_id": "The ID of the restriction query."
    }
  },
  "UpdateRestrictionQuery": {
    "accessPath": [
      "updateRestrictionQuery"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/logs/config/restriction_queries/{restriction_query_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "restriction_query_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a restriction query",
    "parameterDescriptions": {
      "restriction_query_id": "The ID of the restriction query."
    }
  },
  "ReplaceRestrictionQuery": {
    "accessPath": [
      "replaceRestrictionQuery"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/logs/config/restriction_queries/{restriction_query_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "restriction_query_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Replace a restriction query",
    "parameterDescriptions": {
      "restriction_query_id": "The ID of the restriction query."
    }
  },
  "RemoveRoleFromRestrictionQuery": {
    "accessPath": [
      "removeRoleFromRestrictionQuery"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/logs/config/restriction_queries/{restriction_query_id}/roles",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "restriction_query_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Revoke role from a restriction query",
    "parameterDescriptions": {
      "restriction_query_id": "The ID of the restriction query."
    }
  },
  "ListRestrictionQueryRoles": {
    "accessPath": [
      "listRestrictionQueryRoles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/config/restriction_queries/{restriction_query_id}/roles",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "restriction_query_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]"
    ],
    "description": "List roles for a restriction query",
    "parameterDescriptions": {
      "restriction_query_id": "The ID of the restriction query.",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return."
    }
  },
  "AddRoleToRestrictionQuery": {
    "accessPath": [
      "addRoleToRestrictionQuery"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/logs/config/restriction_queries/{restriction_query_id}/roles",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "restriction_query_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Grant role to a restriction query",
    "parameterDescriptions": {
      "restriction_query_id": "The ID of the restriction query."
    }
  },
  "ListLogsGet": {
    "accessPath": [
      "listLogsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/logs/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[query]",
      "filter[indexes]",
      "filter[from]",
      "filter[to]",
      "filter[storage_tier]",
      "sort",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "Search logs (GET)",
    "parameterDescriptions": {
      "filter[query]": "Search query following logs syntax.",
      "filter[indexes]": "For customers with multiple indexes, the indexes to search.\nDefaults to '*' which means all indexes",
      "filter[from]": "Minimum timestamp for requested logs.",
      "filter[to]": "Maximum timestamp for requested logs.",
      "filter[storage_tier]": "Specifies the storage type to be used",
      "sort": "Order of logs in results.",
      "page[cursor]": "List following results with a cursor provided in the previous query.",
      "page[limit]": "Maximum number of logs in the response."
    }
  },
  "ListLogs": {
    "accessPath": [
      "listLogs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "filter",
      "options",
      "page",
      "sort"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/logs/events/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Search logs (POST)"
  },
  "ListTagConfigurations": {
    "accessPath": [
      "listTagConfigurations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[configured]",
      "filter[tags_configured]",
      "filter[metric_type]",
      "filter[include_percentiles]",
      "filter[queried]",
      "filter[queried][window][seconds]",
      "filter[tags]",
      "filter[related_assets]",
      "window[seconds]",
      "page[size]",
      "page[cursor]"
    ],
    "description": "Get a list of metrics",
    "parameterDescriptions": {
      "filter[configured]": "Only return custom metrics that have been configured with Metrics Without Limits.",
      "filter[tags_configured]": "Only return metrics that have the given tag key(s) in their Metrics Without Limits configuration (included or excluded).",
      "filter[metric_type]": "Only return metrics of the given metric type.",
      "filter[include_percentiles]": "Only return distribution metrics that have percentile aggregations enabled (true) or disabled (false).",
      "filter[queried]": "Only return metrics that have been queried (true) or not queried (false) in the look back window. Set the window with `filter[queried][window][seconds]`; if omitted, a default window is used.",
      "filter[queried][window][seconds]": "Only return metrics that have been queried or not queried in the specified window. Dependent on being sent with `filter[queried]`. The default value is 2,592,000 seconds (30 days), the maximum value is 15,552,000 seconds (180 days), and the minimum value is 1 second.",
      "filter[tags]": "Only return metrics that were submitted with tags matching this expression. You can use AND, OR, IN, and wildcards (for example, service:web*).",
      "filter[related_assets]": "Only return metrics that are used in at least one dashboard, monitor, notebook, or SLO.",
      "window[seconds]": "Only return metrics that have been actively reporting in the specified window. The default value is 3600 seconds (1 hour), the maximum value is 2,592,000 seconds (30 days), and the minimum value is 1 second.",
      "page[size]": "Maximum number of results per page. Use with `page[cursor]` for pagination. The default value is 10000, the maximum value is 10000, and the minimum value is 1.",
      "page[cursor]": "Cursor for pagination. Use `page[size]` to opt-in to pagination and get the first page; for subsequent pages, use the value from `meta.pagination.next_cursor` in the response. Pagination is complete when `next_cursor` is null."
    }
  },
  "DeleteBulkTagsMetricsConfiguration": {
    "accessPath": [
      "deleteBulkTagsMetricsConfiguration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/metrics/config/bulk-tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete tags for multiple metrics"
  },
  "CreateBulkTagsMetricsConfiguration": {
    "accessPath": [
      "createBulkTagsMetricsConfiguration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/metrics/config/bulk-tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Configure tags for multiple metrics"
  },
  "ListActiveMetricConfigurations": {
    "accessPath": [
      "listActiveMetricConfigurations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/metrics/{metric_name}/active-configurations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "window[seconds]"
    ],
    "description": "List active tags and aggregations",
    "parameterDescriptions": {
      "metric_name": "The name of the metric.",
      "window[seconds]": "The number of seconds of look back (from now).\nDefault value is 604,800 (1 week), minimum value is 7200 (2 hours), maximum value is 2,630,000 (1 month)."
    }
  },
  "ListTagsByMetricName": {
    "accessPath": [
      "listTagsByMetricName"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/metrics/{metric_name}/all-tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "window[seconds]",
      "filter[tags]",
      "filter[match]",
      "filter[include_tag_values]",
      "filter[allow_partial]",
      "page[limit]"
    ],
    "description": "List tags by metric name",
    "parameterDescriptions": {
      "metric_name": "The name of the metric.",
      "window[seconds]": "The number of seconds of look back (from now) to query for tag data.\nDefault value is 14400 (4 hours), minimum value is 14400 (4 hours).",
      "filter[tags]": "Filter results to tags from data points that have the specified tags.\nFor example, `filter[tags]=env:staging,host:123` returns tags only from data points with both `env:staging` and `host:123`.",
      "filter[match]": "Filter returned tags to those matching a substring.\nFor example, `filter[match]=env` returns tags like `env:prod`, `environment:staging`, etc.",
      "filter[include_tag_values]": "Whether to include tag values in the response.\nDefaults to true.",
      "filter[allow_partial]": "Whether to allow partial results.\nDefaults to false.",
      "page[limit]": "Maximum number of results to return."
    }
  },
  "ListMetricAssets": {
    "accessPath": [
      "listMetricAssets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/metrics/{metric_name}/assets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Related Assets to a Metric",
    "parameterDescriptions": {
      "metric_name": "The name of the metric."
    }
  },
  "EstimateMetricsOutputSeries": {
    "accessPath": [
      "estimateMetricsOutputSeries"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/metrics/{metric_name}/estimate",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[groups]",
      "filter[hours_ago]",
      "filter[num_aggregations]",
      "filter[pct]",
      "filter[timespan_h]"
    ],
    "description": "Tag Configuration Cardinality Estimator",
    "parameterDescriptions": {
      "metric_name": "The name of the metric.",
      "filter[groups]": "Filtered tag keys that the metric is configured to query with.",
      "filter[hours_ago]": "The number of hours of look back (from now) to estimate cardinality with. If unspecified, it defaults to 0 hours.",
      "filter[num_aggregations]": "Deprecated. Number of aggregations has no impact on volume.",
      "filter[pct]": "A boolean, for distribution metrics only, to estimate cardinality if the metric includes additional percentile aggregators.",
      "filter[timespan_h]": "A window, in hours, from the look back to estimate cardinality with. The minimum and default is 1 hour."
    }
  },
  "GetMetricTagCardinalityDetails": {
    "accessPath": [
      "getMetricTagCardinalityDetails"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/metrics/{metric_name}/tag-cardinalities",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get tag key cardinality details",
    "parameterDescriptions": {
      "metric_name": "The name of the metric."
    }
  },
  "DeleteTagConfiguration": {
    "accessPath": [
      "deleteTagConfiguration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/metrics/{metric_name}/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a tag configuration",
    "parameterDescriptions": {
      "metric_name": "The name of the metric."
    }
  },
  "ListTagConfigurationByName": {
    "accessPath": [
      "listTagConfigurationByName"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/metrics/{metric_name}/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List tag configuration by name",
    "parameterDescriptions": {
      "metric_name": "The name of the metric."
    }
  },
  "UpdateTagConfiguration": {
    "accessPath": [
      "updateTagConfiguration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/metrics/{metric_name}/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a tag configuration",
    "parameterDescriptions": {
      "metric_name": "The name of the metric."
    }
  },
  "CreateTagConfiguration": {
    "accessPath": [
      "createTagConfiguration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/metrics/{metric_name}/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a tag configuration",
    "parameterDescriptions": {
      "metric_name": "The name of the metric."
    }
  },
  "ListVolumesByMetricName": {
    "accessPath": [
      "listVolumesByMetricName"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/metrics/{metric_name}/volumes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List distinct metric volumes by metric name",
    "parameterDescriptions": {
      "metric_name": "The name of the metric."
    }
  },
  "GetMonitorNotificationRules": {
    "accessPath": [
      "getMonitorNotificationRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/monitor/notification_rule",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page",
      "sort",
      "filters",
      "include"
    ],
    "description": "Get all monitor notification rules",
    "parameterDescriptions": {
      "page": "The page to start paginating from. If `page` is not specified, the argument defaults to the first page.",
      "per_page": "The number of rules to return per page. If `per_page` is not specified, the argument defaults to 100.",
      "sort": "String for sort order, composed of field and sort order separated by a colon, for example `name:asc`. Supported sort directions: `asc`, `desc`. Supported fields: `name`, `created_at`.",
      "filters": "JSON-encoded filter object. Supported keys:\n* `text`: Free-text query matched against rule name, tags, and recipients.\n* `tags`: Array of strings. Return rules that have any of these tags.\n* `recipients`: Array of strings. Return rules that have any of these recipients.",
      "include": "Comma-separated list of resource paths for related resources to include in the response. Supported resource\npath is `created_by`."
    }
  },
  "CreateMonitorNotificationRule": {
    "accessPath": [
      "createMonitorNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/monitor/notification_rule",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a monitor notification rule"
  },
  "DeleteMonitorNotificationRule": {
    "accessPath": [
      "deleteMonitorNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/monitor/notification_rule/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a monitor notification rule",
    "parameterDescriptions": {
      "rule_id": "ID of the monitor notification rule to delete."
    }
  },
  "GetMonitorNotificationRule": {
    "accessPath": [
      "getMonitorNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/monitor/notification_rule/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get a monitor notification rule",
    "parameterDescriptions": {
      "rule_id": "ID of the monitor notification rule to fetch.",
      "include": "Comma-separated list of resource paths for related resources to include in the response. Supported resource\npath is `created_by`."
    }
  },
  "UpdateMonitorNotificationRule": {
    "accessPath": [
      "updateMonitorNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/monitor/notification_rule/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a monitor notification rule",
    "parameterDescriptions": {
      "rule_id": "ID of the monitor notification rule to update."
    }
  },
  "ListMonitorConfigPolicies": {
    "accessPath": [
      "listMonitorConfigPolicies"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/monitor/policy",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all monitor configuration policies"
  },
  "CreateMonitorConfigPolicy": {
    "accessPath": [
      "createMonitorConfigPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/monitor/policy",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a monitor configuration policy"
  },
  "DeleteMonitorConfigPolicy": {
    "accessPath": [
      "deleteMonitorConfigPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/monitor/policy/{policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a monitor configuration policy",
    "parameterDescriptions": {
      "policy_id": "ID of the monitor configuration policy."
    }
  },
  "GetMonitorConfigPolicy": {
    "accessPath": [
      "getMonitorConfigPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/monitor/policy/{policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a monitor configuration policy",
    "parameterDescriptions": {
      "policy_id": "ID of the monitor configuration policy."
    }
  },
  "UpdateMonitorConfigPolicy": {
    "accessPath": [
      "updateMonitorConfigPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/monitor/policy/{policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Edit a monitor configuration policy",
    "parameterDescriptions": {
      "policy_id": "ID of the monitor configuration policy."
    }
  },
  "ListMonitorUserTemplates": {
    "accessPath": [
      "listMonitorUserTemplates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/monitor/template",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all monitor user templates"
  },
  "CreateMonitorUserTemplate": {
    "accessPath": [
      "createMonitorUserTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/monitor/template",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a monitor user template"
  },
  "ValidateMonitorUserTemplate": {
    "accessPath": [
      "validateMonitorUserTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/monitor/template/validate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Validate a monitor user template"
  },
  "DeleteMonitorUserTemplate": {
    "accessPath": [
      "deleteMonitorUserTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/monitor/template/{template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a monitor user template",
    "parameterDescriptions": {
      "template_id": "ID of the monitor user template."
    }
  },
  "GetMonitorUserTemplate": {
    "accessPath": [
      "getMonitorUserTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/monitor/template/{template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "with_all_versions"
    ],
    "description": "Get a monitor user template",
    "parameterDescriptions": {
      "template_id": "ID of the monitor user template.",
      "with_all_versions": "Whether to include all versions of the template in the response in the versions field."
    }
  },
  "UpdateMonitorUserTemplate": {
    "accessPath": [
      "updateMonitorUserTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/monitor/template/{template_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a monitor user template to a new version",
    "parameterDescriptions": {
      "template_id": "ID of the monitor user template."
    }
  },
  "ValidateExistingMonitorUserTemplate": {
    "accessPath": [
      "validateExistingMonitorUserTemplate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/monitor/template/{template_id}/validate",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "template_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Validate an existing monitor user template",
    "parameterDescriptions": {
      "template_id": "ID of the monitor user template."
    }
  },
  "ListMonitorDowntimes": {
    "accessPath": [
      "listMonitorDowntimes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/monitor/{monitor_id}/downtime_matches",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "monitor_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[offset]",
      "page[limit]"
    ],
    "description": "Get active downtimes for a monitor",
    "parameterDescriptions": {
      "monitor_id": "The id of the monitor.",
      "page[offset]": "Specific offset to use as the beginning of the returned page.",
      "page[limit]": "Maximum number of downtimes in the response."
    }
  },
  "ListDevices": {
    "accessPath": [
      "listDevices"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/ndm/devices",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort",
      "filter[tag]"
    ],
    "description": "Get the list of devices",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 500. Defaults to 50.",
      "page[number]": "Specific page number to return. Defaults to 0.",
      "sort": "The field to sort the devices by. Defaults to `name`.",
      "filter[tag]": "Filter devices by tag."
    }
  },
  "GetDevice": {
    "accessPath": [
      "getDevice"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/ndm/devices/{device_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "device_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the device details",
    "parameterDescriptions": {
      "device_id": "The id of the device to fetch."
    }
  },
  "GetInterfaces": {
    "accessPath": [
      "getInterfaces"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/ndm/interfaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "device_id",
      "get_ip_addresses"
    ],
    "description": "Get the list of interfaces of the device",
    "parameterDescriptions": {
      "device_id": "The ID of the device to get interfaces from.",
      "get_ip_addresses": "Whether to get the IP addresses of the interfaces."
    }
  },
  "ListDeviceUserTags": {
    "accessPath": [
      "listDeviceUserTags"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/ndm/tags/devices/{device_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "device_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the list of tags for a device",
    "parameterDescriptions": {
      "device_id": "The id of the device to fetch tags for."
    }
  },
  "UpdateDeviceUserTags": {
    "accessPath": [
      "updateDeviceUserTags"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/ndm/tags/devices/{device_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "device_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update the tags for a device",
    "parameterDescriptions": {
      "device_id": "The id of the device to update tags for."
    }
  },
  "ListInterfaceUserTags": {
    "accessPath": [
      "listInterfaceUserTags"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/ndm/tags/interfaces/{interface_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "interface_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List tags for an interface",
    "parameterDescriptions": {
      "interface_id": "The ID of the interface for which to retrieve tags."
    }
  },
  "UpdateInterfaceUserTags": {
    "accessPath": [
      "updateInterfaceUserTags"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/ndm/tags/interfaces/{interface_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "interface_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update the tags for an interface",
    "parameterDescriptions": {
      "interface_id": "The ID of the interface for which to update tags."
    }
  },
  "GetAggregatedConnections": {
    "accessPath": [
      "getAggregatedConnections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/network/connections/aggregate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "from",
      "to",
      "group_by",
      "tags",
      "limit"
    ],
    "description": "Get all aggregated connections",
    "parameterDescriptions": {
      "from": "Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window is 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`.",
      "to": "Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window is the current time. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`.",
      "group_by": "Comma-separated list of fields to group connections by. The maximum number of group_by(s) is 10.",
      "tags": "Comma-separated list of tags to filter connections by.",
      "limit": "The number of connections to be returned. The maximum value is 7500. The default is 100."
    }
  },
  "GetAggregatedDns": {
    "accessPath": [
      "getAggregatedDns"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/network/dns/aggregate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "from",
      "to",
      "group_by",
      "tags",
      "limit"
    ],
    "description": "Get all aggregated DNS traffic",
    "parameterDescriptions": {
      "from": "Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window is 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`.",
      "to": "Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window is the current time. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`.",
      "group_by": "Comma-separated list of fields to group DNS traffic by. The server side defaults to `network.dns_query` if unspecified. `server_ungrouped` may be used if groups are not desired. The maximum number of group_by(s) is 10.",
      "tags": "Comma-separated list of tags to filter DNS traffic by.",
      "limit": "The number of aggregated DNS entries to be returned. The maximum value is 7500. The default is 100."
    }
  },
  "ListPipelines": {
    "accessPath": [
      "listPipelines"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/obs-pipelines/pipelines",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]"
    ],
    "description": "List pipelines",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return."
    }
  },
  "CreatePipeline": {
    "accessPath": [
      "createPipeline"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/obs-pipelines/pipelines",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new pipeline"
  },
  "ValidatePipeline": {
    "accessPath": [
      "validatePipeline"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/obs-pipelines/pipelines/validate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Validate an observability pipeline"
  },
  "DeletePipeline": {
    "accessPath": [
      "deletePipeline"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/obs-pipelines/pipelines/{pipeline_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "pipeline_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a pipeline",
    "parameterDescriptions": {
      "pipeline_id": "The ID of the pipeline to delete."
    }
  },
  "GetPipeline": {
    "accessPath": [
      "getPipeline"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/obs-pipelines/pipelines/{pipeline_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "pipeline_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a specific pipeline",
    "parameterDescriptions": {
      "pipeline_id": "The ID of the pipeline to retrieve."
    }
  },
  "UpdatePipeline": {
    "accessPath": [
      "updatePipeline"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/obs-pipelines/pipelines/{pipeline_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "pipeline_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a pipeline",
    "parameterDescriptions": {
      "pipeline_id": "The ID of the pipeline to update."
    }
  },
  "CreateOnCallEscalationPolicy": {
    "accessPath": [
      "createOnCallEscalationPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/on-call/escalation-policies",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Create On-Call escalation policy",
    "parameterDescriptions": {
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`."
    }
  },
  "DeleteOnCallEscalationPolicy": {
    "accessPath": [
      "deleteOnCallEscalationPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/on-call/escalation-policies/{policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete On-Call escalation policy",
    "parameterDescriptions": {
      "policy_id": "The ID of the escalation policy"
    }
  },
  "GetOnCallEscalationPolicy": {
    "accessPath": [
      "getOnCallEscalationPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/on-call/escalation-policies/{policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get On-Call escalation policy",
    "parameterDescriptions": {
      "policy_id": "The ID of the escalation policy",
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`."
    }
  },
  "UpdateOnCallEscalationPolicy": {
    "accessPath": [
      "updateOnCallEscalationPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/on-call/escalation-policies/{policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Update On-Call escalation policy",
    "parameterDescriptions": {
      "policy_id": "The ID of the escalation policy",
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`."
    }
  },
  "CreateOnCallPage": {
    "accessPath": [
      "createOnCallPage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/on-call/pages",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create On-Call Page"
  },
  "AcknowledgeOnCallPage": {
    "accessPath": [
      "acknowledgeOnCallPage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/on-call/pages/{page_id}/acknowledge",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Acknowledge On-Call Page",
    "parameterDescriptions": {
      "page_id": "The page ID."
    }
  },
  "EscalateOnCallPage": {
    "accessPath": [
      "escalateOnCallPage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/on-call/pages/{page_id}/escalate",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Escalate On-Call Page",
    "parameterDescriptions": {
      "page_id": "The page ID."
    }
  },
  "ResolveOnCallPage": {
    "accessPath": [
      "resolveOnCallPage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/on-call/pages/{page_id}/resolve",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Resolve On-Call Page",
    "parameterDescriptions": {
      "page_id": "The page ID."
    }
  },
  "CreateOnCallSchedule": {
    "accessPath": [
      "createOnCallSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/on-call/schedules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Create On-Call schedule",
    "parameterDescriptions": {
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`."
    }
  },
  "DeleteOnCallSchedule": {
    "accessPath": [
      "deleteOnCallSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/on-call/schedules/{schedule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "schedule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete On-Call schedule",
    "parameterDescriptions": {
      "schedule_id": "The ID of the schedule"
    }
  },
  "GetOnCallSchedule": {
    "accessPath": [
      "getOnCallSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/on-call/schedules/{schedule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "schedule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get On-Call schedule",
    "parameterDescriptions": {
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`.",
      "schedule_id": "The ID of the schedule"
    }
  },
  "UpdateOnCallSchedule": {
    "accessPath": [
      "updateOnCallSchedule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/on-call/schedules/{schedule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "schedule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Update On-Call schedule",
    "parameterDescriptions": {
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`.",
      "schedule_id": "The ID of the schedule"
    }
  },
  "GetScheduleOnCallUser": {
    "accessPath": [
      "getScheduleOnCallUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/on-call/schedules/{schedule_id}/on-call",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "schedule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include",
      "filter[at_ts]"
    ],
    "description": "Get scheduled on-call user",
    "parameterDescriptions": {
      "include": "Specifies related resources to include in the response as a comma-separated list. Allowed value: `user`.",
      "schedule_id": "The ID of the schedule.",
      "filter[at_ts]": "Retrieves the on-call user at the given timestamp in RFC3339 format (for example, `2025-05-07T02:53:01Z` or `2025-05-07T02:53:01+00:00`). When using timezone offsets with `+` or `-`, ensure proper URL encoding (`+` should be encoded as `%2B`). Defaults to the current time if omitted."
    }
  },
  "GetTeamOnCallUsers": {
    "accessPath": [
      "getTeamOnCallUsers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/on-call/teams/{team_id}/on-call",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get team on-call users",
    "parameterDescriptions": {
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `responders`, `escalations`, `escalations.responders`.",
      "team_id": "The team ID"
    }
  },
  "GetOnCallTeamRoutingRules": {
    "accessPath": [
      "getOnCallTeamRoutingRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/on-call/teams/{team_id}/routing-rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get On-Call team routing rules",
    "parameterDescriptions": {
      "team_id": "The team ID",
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `rules`, `rules.policy`."
    }
  },
  "SetOnCallTeamRoutingRules": {
    "accessPath": [
      "setOnCallTeamRoutingRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/on-call/teams/{team_id}/routing-rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Set On-Call team routing rules",
    "parameterDescriptions": {
      "team_id": "The team ID",
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `rules`, `rules.policy`."
    }
  },
  "ListUserNotificationChannels": {
    "accessPath": [
      "listUserNotificationChannels"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/on-call/users/{user_id}/notification-channels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List On-Call notification channels for a user",
    "parameterDescriptions": {
      "user_id": "The user ID"
    }
  },
  "CreateUserNotificationChannel": {
    "accessPath": [
      "createUserNotificationChannel"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/on-call/users/{user_id}/notification-channels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an On-Call notification channel for a user",
    "parameterDescriptions": {
      "user_id": "The user ID"
    }
  },
  "DeleteUserNotificationChannel": {
    "accessPath": [
      "deleteUserNotificationChannel"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/on-call/users/{user_id}/notification-channels/{channel_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id",
      "channel_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an On-Call notification channel for a user",
    "parameterDescriptions": {
      "user_id": "The user ID",
      "channel_id": "The channel ID"
    }
  },
  "GetUserNotificationChannel": {
    "accessPath": [
      "getUserNotificationChannel"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/on-call/users/{user_id}/notification-channels/{channel_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id",
      "channel_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an On-Call notification channel for a user",
    "parameterDescriptions": {
      "user_id": "The user ID",
      "channel_id": "The channel ID"
    }
  },
  "ListUserNotificationRules": {
    "accessPath": [
      "listUserNotificationRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/on-call/users/{user_id}/notification-rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "List On-Call notification rules for a user",
    "parameterDescriptions": {
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `channel`.",
      "user_id": "The user ID"
    }
  },
  "CreateUserNotificationRule": {
    "accessPath": [
      "createUserNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/on-call/users/{user_id}/notification-rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an On-Call notification rule for a user",
    "parameterDescriptions": {
      "user_id": "The user ID"
    }
  },
  "DeleteUserNotificationRule": {
    "accessPath": [
      "deleteUserNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/on-call/users/{user_id}/notification-rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id",
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an On-Call notification rule for a user",
    "parameterDescriptions": {
      "user_id": "The user ID",
      "rule_id": "The rule ID"
    }
  },
  "GetUserNotificationRule": {
    "accessPath": [
      "getUserNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/on-call/users/{user_id}/notification-rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id",
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get an On-Call notification rule for a user",
    "parameterDescriptions": {
      "user_id": "The user ID",
      "rule_id": "The rule ID",
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `channel`."
    }
  },
  "UpdateUserNotificationRule": {
    "accessPath": [
      "updateUserNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/on-call/users/{user_id}/notification-rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id",
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Update an On-Call notification rule for a user",
    "parameterDescriptions": {
      "user_id": "The user ID",
      "rule_id": "The rule ID",
      "include": "Comma-separated list of included relationships to be returned. Allowed values: `channel`."
    }
  },
  "ListOrgConfigs": {
    "accessPath": [
      "listOrgConfigs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/org_configs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Org Configs"
  },
  "GetOrgConfig": {
    "accessPath": [
      "getOrgConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/org_configs/{org_config_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org_config_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a specific Org Config value",
    "parameterDescriptions": {
      "org_config_name": "The name of an Org Config."
    }
  },
  "UpdateOrgConfig": {
    "accessPath": [
      "updateOrgConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/org_configs/{org_config_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org_config_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a specific Org Config",
    "parameterDescriptions": {
      "org_config_name": "The name of an Org Config."
    }
  },
  "ListOrgConnections": {
    "accessPath": [
      "listOrgConnections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/org_connections",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sink_org_id",
      "source_org_id",
      "limit",
      "offset"
    ],
    "description": "List Org Connections",
    "parameterDescriptions": {
      "sink_org_id": "The Org ID of the sink org.",
      "source_org_id": "The Org ID of the source org.",
      "limit": "The limit of number of entries you want to return. Default is 1000.",
      "offset": "The pagination offset which you want to query from. Default is 0."
    }
  },
  "CreateOrgConnections": {
    "accessPath": [
      "createOrgConnections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/org_connections",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Org Connection"
  },
  "DeleteOrgConnections": {
    "accessPath": [
      "deleteOrgConnections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/org_connections/{connection_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "connection_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Org Connection",
    "parameterDescriptions": {
      "connection_id": "The unique identifier of the org connection."
    }
  },
  "UpdateOrgConnections": {
    "accessPath": [
      "updateOrgConnections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/org_connections/{connection_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "connection_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Org Connection",
    "parameterDescriptions": {
      "connection_id": "The unique identifier of the org connection."
    }
  },
  "ListPermissions": {
    "accessPath": [
      "listPermissions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List permissions"
  },
  "ListFindings": {
    "accessPath": [
      "listFindings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/posture_management/findings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[limit]",
      "snapshot_timestamp",
      "page[cursor]",
      "filter[tags]",
      "filter[evaluation_changed_at]",
      "filter[muted]",
      "filter[rule_id]",
      "filter[rule_name]",
      "filter[resource_type]",
      "filter[@resource_id]",
      "filter[discovery_timestamp]",
      "filter[evaluation]",
      "filter[status]",
      "filter[vulnerability_type]",
      "detailed_findings"
    ],
    "description": "List findings",
    "parameterDescriptions": {
      "page[limit]": "Limit the number of findings returned. Must be <= 1000.",
      "snapshot_timestamp": "Return findings for a given snapshot of time (Unix ms).",
      "page[cursor]": "Return the next page of findings pointed to by the cursor.",
      "filter[tags]": "Return findings that have these associated tags (repeatable).",
      "filter[evaluation_changed_at]": "Return findings that have changed from pass to fail or vice versa on a specified date (Unix ms) or date range (using comparison operators).",
      "filter[muted]": "Set to `true` to return findings that are muted. Set to `false` to return unmuted findings.",
      "filter[rule_id]": "Return findings for the specified rule ID.",
      "filter[rule_name]": "Return findings for the specified rule.",
      "filter[resource_type]": "Return only findings for the specified resource type.",
      "filter[@resource_id]": "Return only findings for the specified resource id.",
      "filter[discovery_timestamp]": "Return findings that were found on a specified date (Unix ms) or date range (using comparison operators).",
      "filter[evaluation]": "Return only `pass` or `fail` findings.",
      "filter[status]": "Return only findings with the specified status.",
      "filter[vulnerability_type]": "Return findings that match the selected vulnerability types (repeatable).",
      "detailed_findings": "Return additional fields for some findings."
    }
  },
  "MuteFindings": {
    "accessPath": [
      "muteFindings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/posture_management/findings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Mute or unmute a batch of findings"
  },
  "GetFinding": {
    "accessPath": [
      "getFinding"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/posture_management/findings/{finding_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "finding_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "snapshot_timestamp"
    ],
    "description": "Get a finding",
    "parameterDescriptions": {
      "finding_id": "The ID of the finding.",
      "snapshot_timestamp": "Return the finding for a given snapshot of time (Unix ms)."
    }
  },
  "ListPowerpacks": {
    "accessPath": [
      "listPowerpacks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/powerpacks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[limit]",
      "page[offset]"
    ],
    "description": "Get all powerpacks",
    "parameterDescriptions": {
      "page[limit]": "Maximum number of powerpacks in the response.",
      "page[offset]": "Specific offset to use as the beginning of the returned page."
    }
  },
  "CreatePowerpack": {
    "accessPath": [
      "createPowerpack"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/powerpacks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new powerpack"
  },
  "DeletePowerpack": {
    "accessPath": [
      "deletePowerpack"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/powerpacks/{powerpack_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "powerpack_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a powerpack",
    "parameterDescriptions": {
      "powerpack_id": "Powerpack id"
    }
  },
  "GetPowerpack": {
    "accessPath": [
      "getPowerpack"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/powerpacks/{powerpack_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "powerpack_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a Powerpack",
    "parameterDescriptions": {
      "powerpack_id": "ID of the powerpack."
    }
  },
  "UpdatePowerpack": {
    "accessPath": [
      "updatePowerpack"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/powerpacks/{powerpack_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "powerpack_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a powerpack",
    "parameterDescriptions": {
      "powerpack_id": "ID of the powerpack."
    }
  },
  "ListProcesses": {
    "accessPath": [
      "listProcesses"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/processes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "search",
      "tags",
      "from",
      "to",
      "page[limit]",
      "page[cursor]"
    ],
    "description": "Get all processes",
    "parameterDescriptions": {
      "search": "String to search processes by.",
      "tags": "Comma-separated list of tags to filter processes by.",
      "from": "Unix timestamp (number of seconds since epoch) of the start of the query window.\nIf not provided, the start of the query window will be 15 minutes before the `to` timestamp. If neither\n`from` nor `to` are provided, the query window will be `[now - 15m, now]`.",
      "to": "Unix timestamp (number of seconds since epoch) of the end of the query window.\nIf not provided, the end of the query window will be 15 minutes after the `from` timestamp. If neither\n`from` nor `to` are provided, the query window will be `[now - 15m, now]`.",
      "page[limit]": "Maximum number of results returned.",
      "page[cursor]": "String to query the next page of results.\nThis key is provided with each valid response from the API in `meta.page.after`."
    }
  },
  "SubmitProductAnalyticsEvent": {
    "accessPath": [
      "submitProductAnalyticsEvent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "account",
      "application",
      "event",
      "session",
      "type",
      "usr"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/prodlytics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Send server-side events"
  },
  "GetAccountFacetInfo": {
    "accessPath": [
      "getAccountFacetInfo"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/product-analytics/accounts/facet_info",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get account facet info"
  },
  "QueryAccounts": {
    "accessPath": [
      "queryAccounts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/product-analytics/accounts/query",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Query accounts"
  },
  "QueryProductAnalyticsScalar": {
    "accessPath": [
      "queryProductAnalyticsScalar"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/product-analytics/analytics/scalar",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Compute scalar analytics"
  },
  "QueryProductAnalyticsTimeseries": {
    "accessPath": [
      "queryProductAnalyticsTimeseries"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/product-analytics/analytics/timeseries",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Compute timeseries analytics"
  },
  "QueryEventFilteredUsers": {
    "accessPath": [
      "queryEventFilteredUsers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/product-analytics/users/event_filtered_query",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Query event filtered users"
  },
  "GetUserFacetInfo": {
    "accessPath": [
      "getUserFacetInfo"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/product-analytics/users/facet_info",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get user facet info"
  },
  "QueryUsers": {
    "accessPath": [
      "queryUsers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/product-analytics/users/query",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Query users"
  },
  "GetMapping": {
    "accessPath": [
      "getMapping"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/product-analytics/{entity}/mapping",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "entity"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get mapping",
    "parameterDescriptions": {
      "entity": "The entity for which to get the mapping"
    }
  },
  "CreateConnection": {
    "accessPath": [
      "createConnection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/product-analytics/{entity}/mapping/connection",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "entity"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create connection",
    "parameterDescriptions": {
      "entity": "The entity for which to create the connection"
    }
  },
  "UpdateConnection": {
    "accessPath": [
      "updateConnection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/product-analytics/{entity}/mapping/connection",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "entity"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update connection",
    "parameterDescriptions": {
      "entity": "The entity for which to update the connection"
    }
  },
  "DeleteConnection": {
    "accessPath": [
      "deleteConnection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/product-analytics/{entity}/mapping/connection/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id",
      "entity"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete connection",
    "parameterDescriptions": {
      "id": "The connection ID to delete",
      "entity": "The entity for which to delete the connection"
    }
  },
  "ListConnections": {
    "accessPath": [
      "listConnections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/product-analytics/{entity}/mapping/connections",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "entity"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List connections",
    "parameterDescriptions": {
      "entity": "The entity for which to list connections"
    }
  },
  "QueryScalarData": {
    "accessPath": [
      "queryScalarData"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/query/scalar",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Query scalar data across multiple products"
  },
  "QueryTimeseriesData": {
    "accessPath": [
      "queryTimeseriesData"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/query/timeseries",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Query timeseries data across multiple products"
  },
  "BatchRowsQuery": {
    "accessPath": [
      "batchRowsQuery"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/reference-tables/queries/batch-rows",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Batch rows query"
  },
  "ListTables": {
    "accessPath": [
      "listTables"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/reference-tables/tables",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[limit]",
      "page[offset]",
      "sort",
      "filter[status]",
      "filter[table_name][exact]",
      "filter[table_name][contains]"
    ],
    "description": "List tables",
    "parameterDescriptions": {
      "page[limit]": "Number of tables to return.",
      "page[offset]": "Number of tables to skip for pagination.",
      "sort": "Sort field and direction for the list of reference tables. Use field name for ascending, prefix with \"-\" for descending.",
      "filter[status]": "Filter by table status.",
      "filter[table_name][exact]": "Filter by exact table name match.",
      "filter[table_name][contains]": "Filter by table name containing substring."
    }
  },
  "CreateReferenceTable": {
    "accessPath": [
      "createReferenceTable"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/reference-tables/tables",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create reference table"
  },
  "DeleteTable": {
    "accessPath": [
      "deleteTable"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/reference-tables/tables/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete table",
    "parameterDescriptions": {
      "id": "Unique identifier of the reference table to delete"
    }
  },
  "GetTable": {
    "accessPath": [
      "getTable"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/reference-tables/tables/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get table",
    "parameterDescriptions": {
      "id": "Unique identifier of the reference table to retrieve"
    }
  },
  "UpdateReferenceTable": {
    "accessPath": [
      "updateReferenceTable"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/reference-tables/tables/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update reference table",
    "parameterDescriptions": {
      "id": "Unique identifier of the reference table to update"
    }
  },
  "DeleteRows": {
    "accessPath": [
      "deleteRows"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/reference-tables/tables/{id}/rows",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete rows",
    "parameterDescriptions": {
      "id": "Unique identifier of the reference table to delete rows from"
    }
  },
  "GetRowsByID": {
    "accessPath": [
      "getRowsById"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/reference-tables/tables/{id}/rows",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "row_id"
    ],
    "description": "Get rows by id",
    "parameterDescriptions": {
      "id": "Unique identifier of the reference table to get rows from",
      "row_id": "List of row IDs (primary key values) to retrieve from the reference table."
    }
  },
  "UpsertRows": {
    "accessPath": [
      "upsertRows"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/reference-tables/tables/{id}/rows",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Upsert rows",
    "parameterDescriptions": {
      "id": "Unique identifier of the reference table to upsert rows into"
    }
  },
  "CreateReferenceTableUpload": {
    "accessPath": [
      "createReferenceTableUpload"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/reference-tables/uploads",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create reference table upload"
  },
  "ListApplicationSecurityWAFCustomRules": {
    "accessPath": [
      "listApplicationSecurityWafCustomRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/remote_config/products/asm/waf/custom_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List all WAF custom rules"
  },
  "CreateApplicationSecurityWafCustomRule": {
    "accessPath": [
      "createApplicationSecurityWafCustomRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/remote_config/products/asm/waf/custom_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a WAF custom rule"
  },
  "DeleteApplicationSecurityWafCustomRule": {
    "accessPath": [
      "deleteApplicationSecurityWafCustomRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "custom_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a WAF Custom Rule",
    "parameterDescriptions": {
      "custom_rule_id": "The ID of the custom rule."
    }
  },
  "GetApplicationSecurityWafCustomRule": {
    "accessPath": [
      "getApplicationSecurityWafCustomRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "custom_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a WAF custom rule",
    "parameterDescriptions": {
      "custom_rule_id": "The ID of the custom rule."
    }
  },
  "UpdateApplicationSecurityWafCustomRule": {
    "accessPath": [
      "updateApplicationSecurityWafCustomRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "custom_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a WAF Custom Rule",
    "parameterDescriptions": {
      "custom_rule_id": "The ID of the custom rule."
    }
  },
  "ListApplicationSecurityWafExclusionFilters": {
    "accessPath": [
      "listApplicationSecurityWafExclusionFilters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/remote_config/products/asm/waf/exclusion_filters",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List all WAF exclusion filters"
  },
  "CreateApplicationSecurityWafExclusionFilter": {
    "accessPath": [
      "createApplicationSecurityWafExclusionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/remote_config/products/asm/waf/exclusion_filters",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a WAF exclusion filter"
  },
  "DeleteApplicationSecurityWafExclusionFilter": {
    "accessPath": [
      "deleteApplicationSecurityWafExclusionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "exclusion_filter_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a WAF exclusion filter",
    "parameterDescriptions": {
      "exclusion_filter_id": "The identifier of the WAF exclusion filter."
    }
  },
  "GetApplicationSecurityWafExclusionFilter": {
    "accessPath": [
      "getApplicationSecurityWafExclusionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "exclusion_filter_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a WAF exclusion filter",
    "parameterDescriptions": {
      "exclusion_filter_id": "The identifier of the WAF exclusion filter."
    }
  },
  "UpdateApplicationSecurityWafExclusionFilter": {
    "accessPath": [
      "updateApplicationSecurityWafExclusionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "exclusion_filter_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a WAF exclusion filter",
    "parameterDescriptions": {
      "exclusion_filter_id": "The identifier of the WAF exclusion filter."
    }
  },
  "ListCSMThreatsAgentRules": {
    "accessPath": [
      "listCsmThreatsAgentRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/remote_config/products/cws/agent_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "policy_id"
    ],
    "description": "Get all Workload Protection agent rules",
    "parameterDescriptions": {
      "policy_id": "The ID of the Agent policy"
    }
  },
  "CreateCSMThreatsAgentRule": {
    "accessPath": [
      "createCsmThreatsAgentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/remote_config/products/cws/agent_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Workload Protection agent rule"
  },
  "DeleteCSMThreatsAgentRule": {
    "accessPath": [
      "deleteCsmThreatsAgentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "policy_id"
    ],
    "description": "Delete a Workload Protection agent rule",
    "parameterDescriptions": {
      "agent_rule_id": "The ID of the Agent rule",
      "policy_id": "The ID of the Agent policy"
    }
  },
  "GetCSMThreatsAgentRule": {
    "accessPath": [
      "getCsmThreatsAgentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "policy_id"
    ],
    "description": "Get a Workload Protection agent rule",
    "parameterDescriptions": {
      "agent_rule_id": "The ID of the Agent rule",
      "policy_id": "The ID of the Agent policy"
    }
  },
  "UpdateCSMThreatsAgentRule": {
    "accessPath": [
      "updateCsmThreatsAgentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "policy_id"
    ],
    "description": "Update a Workload Protection agent rule",
    "parameterDescriptions": {
      "agent_rule_id": "The ID of the Agent rule",
      "policy_id": "The ID of the Agent policy"
    }
  },
  "ListCSMThreatsAgentPolicies": {
    "accessPath": [
      "listCsmThreatsAgentPolicies"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/remote_config/products/cws/policy",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all Workload Protection policies"
  },
  "CreateCSMThreatsAgentPolicy": {
    "accessPath": [
      "createCsmThreatsAgentPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/remote_config/products/cws/policy",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Workload Protection policy"
  },
  "DownloadCSMThreatsPolicy": {
    "accessPath": [
      "downloadCsmThreatsPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/remote_config/products/cws/policy/download",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Download the Workload Protection policy"
  },
  "DeleteCSMThreatsAgentPolicy": {
    "accessPath": [
      "deleteCsmThreatsAgentPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/remote_config/products/cws/policy/{policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Workload Protection policy",
    "parameterDescriptions": {
      "policy_id": "The ID of the Agent policy"
    }
  },
  "GetCSMThreatsAgentPolicy": {
    "accessPath": [
      "getCsmThreatsAgentPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/remote_config/products/cws/policy/{policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a Workload Protection policy",
    "parameterDescriptions": {
      "policy_id": "The ID of the Agent policy"
    }
  },
  "UpdateCSMThreatsAgentPolicy": {
    "accessPath": [
      "updateCsmThreatsAgentPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/remote_config/products/cws/policy/{policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Workload Protection policy",
    "parameterDescriptions": {
      "policy_id": "The ID of the Agent policy"
    }
  },
  "ListReplayHeatmapSnapshots": {
    "accessPath": [
      "listReplayHeatmapSnapshots"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/replay/heatmap/snapshots",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[device_type]",
      "filter[view_name]",
      "page[limit]",
      "filter[application_id]"
    ],
    "description": "List replay heatmap snapshots",
    "parameterDescriptions": {
      "filter[device_type]": "Device type to filter snapshots.",
      "filter[view_name]": "View name to filter snapshots.",
      "page[limit]": "Maximum number of snapshots to return.",
      "filter[application_id]": "Filter by application ID."
    }
  },
  "CreateReplayHeatmapSnapshot": {
    "accessPath": [
      "createReplayHeatmapSnapshot"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/replay/heatmap/snapshots",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create replay heatmap snapshot"
  },
  "DeleteReplayHeatmapSnapshot": {
    "accessPath": [
      "deleteReplayHeatmapSnapshot"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/replay/heatmap/snapshots/{snapshot_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "snapshot_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete replay heatmap snapshot",
    "parameterDescriptions": {
      "snapshot_id": "Unique identifier of the heatmap snapshot."
    }
  },
  "UpdateReplayHeatmapSnapshot": {
    "accessPath": [
      "updateReplayHeatmapSnapshot"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/replay/heatmap/snapshots/{snapshot_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "snapshot_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update replay heatmap snapshot",
    "parameterDescriptions": {
      "snapshot_id": "Unique identifier of the heatmap snapshot."
    }
  },
  "DeleteRestrictionPolicy": {
    "accessPath": [
      "deleteRestrictionPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/restriction_policy/{resource_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "resource_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a restriction policy",
    "parameterDescriptions": {
      "resource_id": "Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `powerpack`, `reference-table`, `security-rule`, `slo`, `synthetics-global-variable`, `synthetics-test`, `synthetics-private-location`, `monitor`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`, `case-management-project`, `monitor-notification-rule`."
    }
  },
  "GetRestrictionPolicy": {
    "accessPath": [
      "getRestrictionPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/restriction_policy/{resource_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "resource_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a restriction policy",
    "parameterDescriptions": {
      "resource_id": "Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `powerpack`, `reference-table`, `security-rule`, `slo`, `synthetics-global-variable`, `synthetics-test`, `synthetics-private-location`, `monitor`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`, `case-management-project`, `monitor-notification-rule`."
    }
  },
  "UpdateRestrictionPolicy": {
    "accessPath": [
      "updateRestrictionPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/restriction_policy/{resource_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "resource_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "allow_self_lockout"
    ],
    "description": "Update a restriction policy",
    "parameterDescriptions": {
      "resource_id": "Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `powerpack`, `reference-table`, `security-rule`, `slo`, `synthetics-global-variable`, `synthetics-test`, `synthetics-private-location`, `monitor`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`, `case-management-project`, `monitor-notification-rule`.",
      "allow_self_lockout": "Allows admins (users with the `user_access_manage` permission) to remove their own access from the resource if set to `true`. By default, this is set to `false`, preventing admins from locking themselves out."
    }
  },
  "ListRoles": {
    "accessPath": [
      "listRoles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/roles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort",
      "filter",
      "filter[id]"
    ],
    "description": "List roles",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "sort": "Sort roles depending on the given field. Sort order is **ascending** by default.\nSort order is **descending** if the field is prefixed by a negative sign, for example:\n`sort=-name`.",
      "filter": "Filter all roles by the given string.",
      "filter[id]": "Filter all roles by the given list of role IDs."
    }
  },
  "CreateRole": {
    "accessPath": [
      "createRole"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/roles",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create role"
  },
  "ListRoleTemplates": {
    "accessPath": [
      "listRoleTemplates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/roles/templates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List role templates"
  },
  "DeleteRole": {
    "accessPath": [
      "deleteRole"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/roles/{role_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete role",
    "parameterDescriptions": {
      "role_id": "The unique identifier of the role."
    }
  },
  "GetRole": {
    "accessPath": [
      "getRole"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/roles/{role_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a role",
    "parameterDescriptions": {
      "role_id": "The unique identifier of the role."
    }
  },
  "UpdateRole": {
    "accessPath": [
      "updateRole"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/roles/{role_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a role",
    "parameterDescriptions": {
      "role_id": "The unique identifier of the role."
    }
  },
  "CloneRole": {
    "accessPath": [
      "cloneRole"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/roles/{role_id}/clone",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new role by cloning an existing role",
    "parameterDescriptions": {
      "role_id": "The unique identifier of the role."
    }
  },
  "RemovePermissionFromRole": {
    "accessPath": [
      "removePermissionFromRole"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/roles/{role_id}/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Revoke permission",
    "parameterDescriptions": {
      "role_id": "The unique identifier of the role."
    }
  },
  "ListRolePermissions": {
    "accessPath": [
      "listRolePermissions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/roles/{role_id}/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List permissions for a role",
    "parameterDescriptions": {
      "role_id": "The unique identifier of the role."
    }
  },
  "AddPermissionToRole": {
    "accessPath": [
      "addPermissionToRole"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/roles/{role_id}/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Grant permission to a role",
    "parameterDescriptions": {
      "role_id": "The unique identifier of the role."
    }
  },
  "RemoveUserFromRole": {
    "accessPath": [
      "removeUserFromRole"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/roles/{role_id}/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove a user from a role",
    "parameterDescriptions": {
      "role_id": "The unique identifier of the role."
    }
  },
  "ListRoleUsers": {
    "accessPath": [
      "listRoleUsers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/roles/{role_id}/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort",
      "filter"
    ],
    "description": "Get all users of a role",
    "parameterDescriptions": {
      "role_id": "The unique identifier of the role.",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "sort": "User attribute to order results by. Sort order is **ascending** by default.\nSort order is **descending** if the field is prefixed by a negative sign,\nfor example `sort=-name`. Options: `name`, `email`, `status`.",
      "filter": "Filter all users by the given string. Defaults to no filtering."
    }
  },
  "AddUserToRole": {
    "accessPath": [
      "addUserToRole"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/roles/{role_id}/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add a user to a role",
    "parameterDescriptions": {
      "role_id": "The unique identifier of the role."
    }
  },
  "AggregateRUMEvents": {
    "accessPath": [
      "aggregateRumEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "compute",
      "filter",
      "group_by",
      "options",
      "page"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/rum/analytics/aggregate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Aggregate RUM events"
  },
  "GetRUMApplications": {
    "accessPath": [
      "getRumApplications"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/applications",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List all the RUM applications"
  },
  "CreateRUMApplication": {
    "accessPath": [
      "createRumApplication"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/rum/applications",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new RUM application"
  },
  "OrderRetentionFilters": {
    "accessPath": [
      "orderRetentionFilters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/rum/applications/{app_id}/relationships/retention_filters",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Order RUM retention filters",
    "parameterDescriptions": {
      "app_id": "RUM application ID."
    }
  },
  "ListRetentionFilters": {
    "accessPath": [
      "listRetentionFilters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/applications/{app_id}/retention_filters",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all RUM retention filters",
    "parameterDescriptions": {
      "app_id": "RUM application ID."
    }
  },
  "CreateRetentionFilter": {
    "accessPath": [
      "createRetentionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/rum/applications/{app_id}/retention_filters",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a RUM retention filter",
    "parameterDescriptions": {
      "app_id": "RUM application ID."
    }
  },
  "DeleteRetentionFilter": {
    "accessPath": [
      "deleteRetentionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "rf_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a RUM retention filter",
    "parameterDescriptions": {
      "app_id": "RUM application ID.",
      "rf_id": "Retention filter ID."
    }
  },
  "GetRetentionFilter": {
    "accessPath": [
      "getRetentionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "rf_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a RUM retention filter",
    "parameterDescriptions": {
      "app_id": "RUM application ID.",
      "rf_id": "Retention filter ID."
    }
  },
  "UpdateRetentionFilter": {
    "accessPath": [
      "updateRetentionFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "rf_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a RUM retention filter",
    "parameterDescriptions": {
      "app_id": "RUM application ID.",
      "rf_id": "Retention filter ID."
    }
  },
  "DeleteRUMApplication": {
    "accessPath": [
      "deleteRumApplication"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/rum/applications/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a RUM application",
    "parameterDescriptions": {
      "id": "RUM application ID."
    }
  },
  "GetRUMApplication": {
    "accessPath": [
      "getRumApplication"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/applications/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a RUM application",
    "parameterDescriptions": {
      "id": "RUM application ID."
    }
  },
  "UpdateRUMApplication": {
    "accessPath": [
      "updateRumApplication"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/rum/applications/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a RUM application",
    "parameterDescriptions": {
      "id": "RUM application ID."
    }
  },
  "ListRumMetrics": {
    "accessPath": [
      "listRumMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/config/metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all rum-based metrics"
  },
  "CreateRumMetric": {
    "accessPath": [
      "createRumMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/rum/config/metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a rum-based metric"
  },
  "DeleteRumMetric": {
    "accessPath": [
      "deleteRumMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/rum/config/metrics/{metric_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a rum-based metric",
    "parameterDescriptions": {
      "metric_id": "The name of the rum-based metric."
    }
  },
  "GetRumMetric": {
    "accessPath": [
      "getRumMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/config/metrics/{metric_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a rum-based metric",
    "parameterDescriptions": {
      "metric_id": "The name of the rum-based metric."
    }
  },
  "UpdateRumMetric": {
    "accessPath": [
      "updateRumMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/rum/config/metrics/{metric_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a rum-based metric",
    "parameterDescriptions": {
      "metric_id": "The name of the rum-based metric."
    }
  },
  "ListRUMEvents": {
    "accessPath": [
      "listRumEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[query]",
      "filter[from]",
      "filter[to]",
      "sort",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "Get a list of RUM events",
    "parameterDescriptions": {
      "filter[query]": "Search query following RUM syntax.",
      "filter[from]": "Minimum timestamp for requested events.",
      "filter[to]": "Maximum timestamp for requested events.",
      "sort": "Order of events in results.",
      "page[cursor]": "List following results with a cursor provided in the previous query.",
      "page[limit]": "Maximum number of events in the response."
    }
  },
  "SearchRUMEvents": {
    "accessPath": [
      "searchRumEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "filter",
      "options",
      "page",
      "sort"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/rum/events/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Search RUM events"
  },
  "ListRumReplayPlaylists": {
    "accessPath": [
      "listRumReplayPlaylists"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/replay/playlists",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[created_by_uuid]",
      "filter[query]",
      "page[number]",
      "page[size]"
    ],
    "description": "List rum replay playlists",
    "parameterDescriptions": {
      "filter[created_by_uuid]": "Filter playlists by the UUID of the user who created them.",
      "filter[query]": "Search query to filter playlists by name.",
      "page[number]": "Page number for pagination (0-indexed).",
      "page[size]": "Number of items per page."
    }
  },
  "CreateRumReplayPlaylist": {
    "accessPath": [
      "createRumReplayPlaylist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/rum/replay/playlists",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create rum replay playlist"
  },
  "DeleteRumReplayPlaylist": {
    "accessPath": [
      "deleteRumReplayPlaylist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/rum/replay/playlists/{playlist_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete rum replay playlist",
    "parameterDescriptions": {
      "playlist_id": "Unique identifier of the playlist."
    }
  },
  "GetRumReplayPlaylist": {
    "accessPath": [
      "getRumReplayPlaylist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/replay/playlists/{playlist_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get rum replay playlist",
    "parameterDescriptions": {
      "playlist_id": "Unique identifier of the playlist."
    }
  },
  "UpdateRumReplayPlaylist": {
    "accessPath": [
      "updateRumReplayPlaylist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/rum/replay/playlists/{playlist_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update rum replay playlist",
    "parameterDescriptions": {
      "playlist_id": "Unique identifier of the playlist."
    }
  },
  "BulkRemoveRumReplayPlaylistSessions": {
    "accessPath": [
      "bulkRemoveRumReplayPlaylistSessions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/rum/replay/playlists/{playlist_id}/sessions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Bulk remove rum replay playlist sessions",
    "parameterDescriptions": {
      "playlist_id": "Unique identifier of the playlist."
    }
  },
  "ListRumReplayPlaylistSessions": {
    "accessPath": [
      "listRumReplayPlaylistSessions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/replay/playlists/{playlist_id}/sessions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[number]",
      "page[size]"
    ],
    "description": "List rum replay playlist sessions",
    "parameterDescriptions": {
      "playlist_id": "Unique identifier of the playlist.",
      "page[number]": "Page number for pagination (0-indexed).",
      "page[size]": "Number of items per page."
    }
  },
  "RemoveRumReplaySessionFromPlaylist": {
    "accessPath": [
      "removeRumReplaySessionFromPlaylist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/rum/replay/playlists/{playlist_id}/sessions/{session_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id",
      "session_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove rum replay session from playlist",
    "parameterDescriptions": {
      "playlist_id": "Unique identifier of the playlist.",
      "session_id": "Unique identifier of the session."
    }
  },
  "AddRumReplaySessionToPlaylist": {
    "accessPath": [
      "addRumReplaySessionToPlaylist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/rum/replay/playlists/{playlist_id}/sessions/{session_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id",
      "session_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "data_source",
      "ts"
    ],
    "description": "Add rum replay session to playlist",
    "parameterDescriptions": {
      "data_source": "Data source type. Valid values: 'rum' or 'product_analytics'. Defaults to 'rum'.",
      "ts": "Server-side timestamp in milliseconds.",
      "playlist_id": "Unique identifier of the playlist.",
      "session_id": "Unique identifier of the session."
    }
  },
  "GetSegments": {
    "accessPath": [
      "getSegments"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/replay/sessions/{session_id}/views/{view_id}/segments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "view_id",
      "session_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "source",
      "ts",
      "max_list_size",
      "paging"
    ],
    "description": "Get segments",
    "parameterDescriptions": {
      "view_id": "Unique identifier of the view.",
      "source": "Storage source: 'event_platform' or 'blob'.",
      "session_id": "Unique identifier of the session.",
      "ts": "Server-side timestamp in milliseconds.",
      "max_list_size": "Maximum size in bytes for the segment list.",
      "paging": "Paging token for pagination."
    }
  },
  "ListRumReplaySessionWatchers": {
    "accessPath": [
      "listRumReplaySessionWatchers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/replay/sessions/{session_id}/watchers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "session_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]"
    ],
    "description": "List rum replay session watchers",
    "parameterDescriptions": {
      "page[size]": "Number of items per page.",
      "page[number]": "Page number for pagination (0-indexed).",
      "session_id": "Unique identifier of the session."
    }
  },
  "DeleteRumReplaySessionWatch": {
    "accessPath": [
      "deleteRumReplaySessionWatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/rum/replay/sessions/{session_id}/watches",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "session_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete rum replay session watch",
    "parameterDescriptions": {
      "session_id": "Unique identifier of the session."
    }
  },
  "CreateRumReplaySessionWatch": {
    "accessPath": [
      "createRumReplaySessionWatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/rum/replay/sessions/{session_id}/watches",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "session_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create rum replay session watch",
    "parameterDescriptions": {
      "session_id": "Unique identifier of the session."
    }
  },
  "ListRumReplayViewershipHistorySessions": {
    "accessPath": [
      "listRumReplayViewershipHistorySessions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/rum/replay/viewership-history/sessions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[watched_at][start]",
      "page[number]",
      "filter[created_by]",
      "filter[watched_at][end]",
      "filter[session_ids]",
      "page[size]",
      "filter[application_id]"
    ],
    "description": "List rum replay viewership history sessions",
    "parameterDescriptions": {
      "filter[watched_at][start]": "Start timestamp in milliseconds for watched_at filter.",
      "page[number]": "Page number for pagination (0-indexed).",
      "filter[created_by]": "Filter by user UUID. Defaults to current user if not specified.",
      "filter[watched_at][end]": "End timestamp in milliseconds for watched_at filter.",
      "filter[session_ids]": "Comma-separated list of session IDs to filter by.",
      "page[size]": "Number of items per page.",
      "filter[application_id]": "Filter by application ID."
    }
  },
  "UploadIdPMetadata": {
    "accessPath": [
      "uploadIdPMetadata"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "idp_file"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/saml_configurations/idp_metadata",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Upload IdP metadata"
  },
  "ListScorecardOutcomes": {
    "accessPath": [
      "listScorecardOutcomes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/scorecard/outcomes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[offset]",
      "include",
      "fields[outcome]",
      "fields[rule]",
      "filter[outcome][service_name]",
      "filter[outcome][state]",
      "filter[rule][enabled]",
      "filter[rule][id]",
      "filter[rule][name]"
    ],
    "description": "List all rule outcomes",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[offset]": "Specific offset to use as the beginning of the returned page.",
      "include": "Include related rule details in the response.",
      "fields[outcome]": "Return only specified values in the outcome attributes.",
      "fields[rule]": "Return only specified values in the included rule details.",
      "filter[outcome][service_name]": "Filter the outcomes on a specific service name.",
      "filter[outcome][state]": "Filter the outcomes by a specific state.",
      "filter[rule][enabled]": "Filter outcomes on whether a rule is enabled/disabled.",
      "filter[rule][id]": "Filter outcomes based on rule ID.",
      "filter[rule][name]": "Filter outcomes based on rule name."
    }
  },
  "UpdateScorecardOutcomesAsync": {
    "accessPath": [
      "updateScorecardOutcomesAsync"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/scorecard/outcomes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Scorecard outcomes asynchronously"
  },
  "CreateScorecardOutcomesBatch": {
    "accessPath": [
      "createScorecardOutcomesBatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/scorecard/outcomes/batch",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create outcomes batch"
  },
  "ListScorecardRules": {
    "accessPath": [
      "listScorecardRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/scorecard/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[offset]",
      "include",
      "filter[rule][id]",
      "filter[rule][enabled]",
      "filter[rule][custom]",
      "filter[rule][name]",
      "filter[rule][description]",
      "fields[rule]",
      "fields[scorecard]"
    ],
    "description": "List all rules",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[offset]": "Specific offset to use as the beginning of the returned page.",
      "include": "Include related scorecard details in the response.",
      "filter[rule][id]": "Filter the rules on a rule ID.",
      "filter[rule][enabled]": "Filter for enabled rules only.",
      "filter[rule][custom]": "Filter for custom rules only.",
      "filter[rule][name]": "Filter rules on the rule name.",
      "filter[rule][description]": "Filter rules on the rule description.",
      "fields[rule]": "Return only specific fields in the response for rule attributes.",
      "fields[scorecard]": "Return only specific fields in the included response for scorecard attributes."
    }
  },
  "CreateScorecardRule": {
    "accessPath": [
      "createScorecardRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/scorecard/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new rule"
  },
  "DeleteScorecardRule": {
    "accessPath": [
      "deleteScorecardRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/scorecard/rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a rule",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule."
    }
  },
  "UpdateScorecardRule": {
    "accessPath": [
      "updateScorecardRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/scorecard/rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an existing rule",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule."
    }
  },
  "UnassignSeatsUser": {
    "accessPath": [
      "unassignSeatsUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/seats/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Unassign seats from users"
  },
  "GetSeatsUsers": {
    "accessPath": [
      "getSeatsUsers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/seats/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "product_code",
      "page[limit]",
      "page[cursor]"
    ],
    "description": "Get users with seats",
    "parameterDescriptions": {
      "product_code": "The product code for which to retrieve seat users.",
      "page[limit]": "Maximum number of results to return.",
      "page[cursor]": "Cursor for pagination."
    }
  },
  "AssignSeatsUser": {
    "accessPath": [
      "assignSeatsUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/seats/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Assign seats to users"
  },
  "ListEntityRiskScores": {
    "accessPath": [
      "listEntityRiskScores"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security-entities/risk-scores",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "from",
      "to",
      "page[size]",
      "page[number]",
      "page[queryId]",
      "filter[sort]",
      "filter[query]",
      "entityType"
    ],
    "description": "List Entity Risk Scores",
    "parameterDescriptions": {
      "from": "Start time for the query in Unix timestamp (milliseconds). Defaults to 2 weeks ago.",
      "to": "End time for the query in Unix timestamp (milliseconds). Defaults to now.",
      "page[size]": "Size of the page to return. Maximum is 1000.",
      "page[number]": "Page number to return (1-indexed).",
      "page[queryId]": "Query ID for pagination consistency.",
      "filter[sort]": "Sort order for results. Format: `field:direction` where direction is `asc` or `desc`.\nSupported fields: `riskScore`, `lastDetected`, `firstDetected`, `entityName`, `signalsDetected`.",
      "filter[query]": "Supports filtering by entity attributes, risk scores, severity, and more.\nExample: `severity:critical AND entityType:aws_iam_user`",
      "entityType": "Filter by entity type(s). Can specify multiple values."
    }
  },
  "DownloadCloudWorkloadPolicyFile": {
    "accessPath": [
      "downloadCloudWorkloadPolicyFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security/cloud_workload/policy/download",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Download the Workload Protection policy (US1-FED)"
  },
  "ListSecurityFindings": {
    "accessPath": [
      "listSecurityFindings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security/findings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[query]",
      "page[cursor]",
      "page[limit]",
      "sort"
    ],
    "description": "List security findings",
    "parameterDescriptions": {
      "filter[query]": "The search query following log search syntax.",
      "page[cursor]": "Get the next page of results with a cursor provided in the previous query.",
      "page[limit]": "The maximum number of findings in the response.",
      "sort": "Sorts by @detection_changed_at."
    }
  },
  "DetachCase": {
    "accessPath": [
      "detachCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/security/findings/cases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Detach security findings from their case"
  },
  "CreateCases": {
    "accessPath": [
      "createCases"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security/findings/cases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create cases for security findings"
  },
  "AttachCase": {
    "accessPath": [
      "attachCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security/findings/cases/{case_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "case_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Attach security findings to a case",
    "parameterDescriptions": {
      "case_id": "Unique identifier of the case to attach security findings to"
    }
  },
  "AttachJiraIssue": {
    "accessPath": [
      "attachJiraIssue"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security/findings/jira_issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Attach security findings to a Jira issue"
  },
  "CreateJiraIssues": {
    "accessPath": [
      "createJiraIssues"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security/findings/jira_issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Jira issues for security findings"
  },
  "SearchSecurityFindings": {
    "accessPath": [
      "searchSecurityFindings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security/findings/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Search security findings"
  },
  "ListAssetsSBOMs": {
    "accessPath": [
      "listAssetsSboMs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security/sboms",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[token]",
      "page[number]",
      "filter[asset_type]",
      "filter[asset_name]",
      "filter[package_name]",
      "filter[package_version]",
      "filter[license_name]",
      "filter[license_type]"
    ],
    "description": "List assets SBOMs",
    "parameterDescriptions": {
      "page[token]": "Its value must come from the `links` section of the response of the first request. Do not manually edit it.",
      "page[number]": "The page number to be retrieved. It should be equal to or greater than 1.",
      "filter[asset_type]": "The type of the assets for the SBOM request.",
      "filter[asset_name]": "The name of the asset for the SBOM request.",
      "filter[package_name]": "The name of the component that is a dependency of an asset.",
      "filter[package_version]": "The version of the component that is a dependency of an asset.",
      "filter[license_name]": "The software license name of the component that is a dependency of an asset.",
      "filter[license_type]": "The software license type of the component that is a dependency of an asset."
    }
  },
  "GetSBOM": {
    "accessPath": [
      "getSbom"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security/sboms/{asset_type}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "asset_type"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[asset_name]",
      "filter[repo_digest]",
      "ext:format"
    ],
    "description": "Get SBOM",
    "parameterDescriptions": {
      "asset_type": "The type of the asset for the SBOM request.",
      "filter[asset_name]": "The name of the asset for the SBOM request.",
      "filter[repo_digest]": "The container image `repo_digest` for the SBOM request. When the requested asset type is 'Image', this filter is mandatory.",
      "ext:format": "The standard of the SBOM."
    }
  },
  "ListScannedAssetsMetadata": {
    "accessPath": [
      "listScannedAssetsMetadata"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security/scanned-assets-metadata",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[token]",
      "page[number]",
      "filter[asset.type]",
      "filter[asset.name]",
      "filter[last_success.origin]",
      "filter[last_success.env]"
    ],
    "description": "List scanned assets metadata",
    "parameterDescriptions": {
      "page[token]": "Its value must come from the `links` section of the response of the first request. Do not manually edit it.",
      "page[number]": "The page number to be retrieved. It should be equal to or greater than 1.",
      "filter[asset.type]": "The type of the scanned asset.",
      "filter[asset.name]": "The name of the scanned asset.",
      "filter[last_success.origin]": "The origin of last success scan.",
      "filter[last_success.env]": "The environment of last success scan."
    }
  },
  "GetSignalNotificationRules": {
    "accessPath": [
      "getSignalNotificationRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security/signals/notification_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the list of signal-based notification rules"
  },
  "CreateSignalNotificationRule": {
    "accessPath": [
      "createSignalNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security/signals/notification_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new signal-based notification rule"
  },
  "DeleteSignalNotificationRule": {
    "accessPath": [
      "deleteSignalNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/security/signals/notification_rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a signal-based notification rule",
    "parameterDescriptions": {
      "id": "ID of the notification rule."
    }
  },
  "GetSignalNotificationRule": {
    "accessPath": [
      "getSignalNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security/signals/notification_rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get details of a signal-based notification rule",
    "parameterDescriptions": {
      "id": "ID of the notification rule."
    }
  },
  "PatchSignalNotificationRule": {
    "accessPath": [
      "patchSignalNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security/signals/notification_rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Patch a signal-based notification rule",
    "parameterDescriptions": {
      "id": "ID of the notification rule."
    }
  },
  "ListVulnerabilities": {
    "accessPath": [
      "listVulnerabilities"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security/vulnerabilities",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[token]",
      "page[number]",
      "filter[type]",
      "filter[cvss.base.score][`$op`]",
      "filter[cvss.base.severity]",
      "filter[cvss.base.vector]",
      "filter[cvss.datadog.score][`$op`]",
      "filter[cvss.datadog.severity]",
      "filter[cvss.datadog.vector]",
      "filter[status]",
      "filter[tool]",
      "filter[library.name]",
      "filter[library.version]",
      "filter[advisory.id]",
      "filter[risks.exploitation_probability]",
      "filter[risks.poc_exploit_available]",
      "filter[risks.exploit_available]",
      "filter[risks.epss.score][`$op`]",
      "filter[risks.epss.severity]",
      "filter[language]",
      "filter[ecosystem]",
      "filter[code_location.location]",
      "filter[code_location.file_path]",
      "filter[code_location.method]",
      "filter[fix_available]",
      "filter[repo_digests]",
      "filter[origin]",
      "filter[running_kernel]",
      "filter[asset.name]",
      "filter[asset.type]",
      "filter[asset.version.first]",
      "filter[asset.version.last]",
      "filter[asset.repository_url]",
      "filter[asset.risks.in_production]",
      "filter[asset.risks.under_attack]",
      "filter[asset.risks.is_publicly_accessible]",
      "filter[asset.risks.has_privileged_access]",
      "filter[asset.risks.has_access_to_sensitive_data]",
      "filter[asset.environments]",
      "filter[asset.teams]",
      "filter[asset.arch]",
      "filter[asset.operating_system.name]",
      "filter[asset.operating_system.version]"
    ],
    "description": "List vulnerabilities",
    "parameterDescriptions": {
      "page[token]": "Its value must come from the `links` section of the response of the first request. Do not manually edit it.",
      "page[number]": "The page number to be retrieved. It should be equal or greater than `1`",
      "filter[type]": "Filter by vulnerability type.",
      "filter[cvss.base.score][`$op`]": "Filter by vulnerability base (i.e. from the original advisory) severity score.",
      "filter[cvss.base.severity]": "Filter by vulnerability base severity.",
      "filter[cvss.base.vector]": "Filter by vulnerability base CVSS vector.",
      "filter[cvss.datadog.score][`$op`]": "Filter by vulnerability Datadog severity score.",
      "filter[cvss.datadog.severity]": "Filter by vulnerability Datadog severity.",
      "filter[cvss.datadog.vector]": "Filter by vulnerability Datadog CVSS vector.",
      "filter[status]": "Filter by the status of the vulnerability.",
      "filter[tool]": "Filter by the tool of the vulnerability.",
      "filter[library.name]": "Filter by library name.",
      "filter[library.version]": "Filter by library version.",
      "filter[advisory.id]": "Filter by advisory ID.",
      "filter[risks.exploitation_probability]": "Filter by exploitation probability.",
      "filter[risks.poc_exploit_available]": "Filter by POC exploit availability.",
      "filter[risks.exploit_available]": "Filter by public exploit availability.",
      "filter[risks.epss.score][`$op`]": "Filter by vulnerability [EPSS](https://www.first.org/epss/) severity score.",
      "filter[risks.epss.severity]": "Filter by vulnerability [EPSS](https://www.first.org/epss/) severity.",
      "filter[language]": "Filter by language.",
      "filter[ecosystem]": "Filter by ecosystem.",
      "filter[code_location.location]": "Filter by vulnerability location.",
      "filter[code_location.file_path]": "Filter by vulnerability file path.",
      "filter[code_location.method]": "Filter by method.",
      "filter[fix_available]": "Filter by fix availability.",
      "filter[repo_digests]": "Filter by vulnerability `repo_digest` (when the vulnerability is related to `Image` asset).",
      "filter[origin]": "Filter by origin.",
      "filter[running_kernel]": "Filter for whether the vulnerability affects a running kernel (for vulnerabilities related to a `Host` asset).",
      "filter[asset.name]": "Filter by asset name. This field supports the usage of wildcards (*).",
      "filter[asset.type]": "Filter by asset type.",
      "filter[asset.version.first]": "Filter by the first version of the asset this vulnerability has been detected on.",
      "filter[asset.version.last]": "Filter by the last version of the asset this vulnerability has been detected on.",
      "filter[asset.repository_url]": "Filter by the repository url associated to the asset.",
      "filter[asset.risks.in_production]": "Filter whether the asset is in production or not.",
      "filter[asset.risks.under_attack]": "Filter whether the asset is under attack or not.",
      "filter[asset.risks.is_publicly_accessible]": "Filter whether the asset is publicly accessible or not.",
      "filter[asset.risks.has_privileged_access]": "Filter whether the asset is publicly accessible or not.",
      "filter[asset.risks.has_access_to_sensitive_data]": "Filter whether the asset  has access to sensitive data or not.",
      "filter[asset.environments]": "Filter by asset environments.",
      "filter[asset.teams]": "Filter by asset teams.",
      "filter[asset.arch]": "Filter by asset architecture.",
      "filter[asset.operating_system.name]": "Filter by asset operating system name.",
      "filter[asset.operating_system.version]": "Filter by asset operating system version."
    }
  },
  "GetVulnerabilityNotificationRules": {
    "accessPath": [
      "getVulnerabilityNotificationRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security/vulnerabilities/notification_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the list of vulnerability notification rules"
  },
  "CreateVulnerabilityNotificationRule": {
    "accessPath": [
      "createVulnerabilityNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security/vulnerabilities/notification_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new vulnerability-based notification rule"
  },
  "DeleteVulnerabilityNotificationRule": {
    "accessPath": [
      "deleteVulnerabilityNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/security/vulnerabilities/notification_rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a vulnerability-based notification rule",
    "parameterDescriptions": {
      "id": "ID of the notification rule."
    }
  },
  "GetVulnerabilityNotificationRule": {
    "accessPath": [
      "getVulnerabilityNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security/vulnerabilities/notification_rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get details of a vulnerability notification rule",
    "parameterDescriptions": {
      "id": "ID of the notification rule."
    }
  },
  "PatchVulnerabilityNotificationRule": {
    "accessPath": [
      "patchVulnerabilityNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security/vulnerabilities/notification_rules/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Patch a vulnerability-based notification rule",
    "parameterDescriptions": {
      "id": "ID of the notification rule."
    }
  },
  "ListVulnerableAssets": {
    "accessPath": [
      "listVulnerableAssets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security/vulnerable-assets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[token]",
      "page[number]",
      "filter[name]",
      "filter[type]",
      "filter[version.first]",
      "filter[version.last]",
      "filter[repository_url]",
      "filter[risks.in_production]",
      "filter[risks.under_attack]",
      "filter[risks.is_publicly_accessible]",
      "filter[risks.has_privileged_access]",
      "filter[risks.has_access_to_sensitive_data]",
      "filter[environments]",
      "filter[teams]",
      "filter[arch]",
      "filter[operating_system.name]",
      "filter[operating_system.version]"
    ],
    "description": "List vulnerable assets",
    "parameterDescriptions": {
      "page[token]": "Its value must come from the `links` section of the response of the first request. Do not manually edit it.",
      "page[number]": "The page number to be retrieved. It should be equal or greater than `1`",
      "filter[name]": "Filter by name. This field supports the usage of wildcards (*).",
      "filter[type]": "Filter by type.",
      "filter[version.first]": "Filter by the first version of the asset since it has been vulnerable.",
      "filter[version.last]": "Filter by the last detected version of the asset.",
      "filter[repository_url]": "Filter by the repository url associated to the asset.",
      "filter[risks.in_production]": "Filter whether the asset is in production or not.",
      "filter[risks.under_attack]": "Filter whether the asset (Service) is under attack or not.",
      "filter[risks.is_publicly_accessible]": "Filter whether the asset (Host) is publicly accessible or not.",
      "filter[risks.has_privileged_access]": "Filter whether the asset (Host) has privileged access or not.",
      "filter[risks.has_access_to_sensitive_data]": "Filter whether the asset (Host)  has access to sensitive data or not.",
      "filter[environments]": "Filter by environment.",
      "filter[teams]": "Filter by teams.",
      "filter[arch]": "Filter by architecture.",
      "filter[operating_system.name]": "Filter by operating system name.",
      "filter[operating_system.version]": "Filter by operating system version."
    }
  },
  "ListCloudWorkloadSecurityAgentRules": {
    "accessPath": [
      "listCloudWorkloadSecurityAgentRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/cloud_workload_security/agent_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all Workload Protection agent rules (US1-FED)"
  },
  "CreateCloudWorkloadSecurityAgentRule": {
    "accessPath": [
      "createCloudWorkloadSecurityAgentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/cloud_workload_security/agent_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Workload Protection agent rule (US1-FED)"
  },
  "DeleteCloudWorkloadSecurityAgentRule": {
    "accessPath": [
      "deleteCloudWorkloadSecurityAgentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Workload Protection agent rule (US1-FED)",
    "parameterDescriptions": {
      "agent_rule_id": "The ID of the Agent rule"
    }
  },
  "GetCloudWorkloadSecurityAgentRule": {
    "accessPath": [
      "getCloudWorkloadSecurityAgentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a Workload Protection agent rule (US1-FED)",
    "parameterDescriptions": {
      "agent_rule_id": "The ID of the Agent rule"
    }
  },
  "UpdateCloudWorkloadSecurityAgentRule": {
    "accessPath": [
      "updateCloudWorkloadSecurityAgentRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Workload Protection agent rule (US1-FED)",
    "parameterDescriptions": {
      "agent_rule_id": "The ID of the Agent rule"
    }
  },
  "ListSecurityMonitoringCriticalAssets": {
    "accessPath": [
      "listSecurityMonitoringCriticalAssets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/configuration/critical_assets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all critical assets"
  },
  "CreateSecurityMonitoringCriticalAsset": {
    "accessPath": [
      "createSecurityMonitoringCriticalAsset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/configuration/critical_assets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a critical asset"
  },
  "GetCriticalAssetsAffectingRule": {
    "accessPath": [
      "getCriticalAssetsAffectingRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/configuration/critical_assets/rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get critical assets affecting a specific rule",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule."
    }
  },
  "DeleteSecurityMonitoringCriticalAsset": {
    "accessPath": [
      "deleteSecurityMonitoringCriticalAsset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/security_monitoring/configuration/critical_assets/{critical_asset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "critical_asset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a critical asset",
    "parameterDescriptions": {
      "critical_asset_id": "The ID of the critical asset."
    }
  },
  "GetSecurityMonitoringCriticalAsset": {
    "accessPath": [
      "getSecurityMonitoringCriticalAsset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/configuration/critical_assets/{critical_asset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "critical_asset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a critical asset",
    "parameterDescriptions": {
      "critical_asset_id": "The ID of the critical asset."
    }
  },
  "UpdateSecurityMonitoringCriticalAsset": {
    "accessPath": [
      "updateSecurityMonitoringCriticalAsset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security_monitoring/configuration/critical_assets/{critical_asset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "critical_asset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a critical asset",
    "parameterDescriptions": {
      "critical_asset_id": "The ID of the critical asset."
    }
  },
  "ListSecurityFilters": {
    "accessPath": [
      "listSecurityFilters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/configuration/security_filters",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get all security filters"
  },
  "CreateSecurityFilter": {
    "accessPath": [
      "createSecurityFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/configuration/security_filters",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a security filter"
  },
  "DeleteSecurityFilter": {
    "accessPath": [
      "deleteSecurityFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/security_monitoring/configuration/security_filters/{security_filter_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "security_filter_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a security filter",
    "parameterDescriptions": {
      "security_filter_id": "The ID of the security filter."
    }
  },
  "GetSecurityFilter": {
    "accessPath": [
      "getSecurityFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/configuration/security_filters/{security_filter_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "security_filter_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a security filter",
    "parameterDescriptions": {
      "security_filter_id": "The ID of the security filter."
    }
  },
  "UpdateSecurityFilter": {
    "accessPath": [
      "updateSecurityFilter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security_monitoring/configuration/security_filters/{security_filter_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "security_filter_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a security filter",
    "parameterDescriptions": {
      "security_filter_id": "The ID of the security filter."
    }
  },
  "ListSecurityMonitoringSuppressions": {
    "accessPath": [
      "listSecurityMonitoringSuppressions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/configuration/suppressions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "query",
      "sort",
      "page[size]",
      "page[number]"
    ],
    "description": "Get all suppression rules",
    "parameterDescriptions": {
      "query": "Query string.",
      "sort": "Attribute used to sort the list of suppression rules. Prefix with `-` to sort in descending order.",
      "page[size]": "Size for a given page. Use `-1` to return all items.",
      "page[number]": "Specific page number to return."
    }
  },
  "CreateSecurityMonitoringSuppression": {
    "accessPath": [
      "createSecurityMonitoringSuppression"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/configuration/suppressions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a suppression rule"
  },
  "GetSuppressionsAffectingFutureRule": {
    "accessPath": [
      "getSuppressionsAffectingFutureRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/configuration/suppressions/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get suppressions affecting future rule"
  },
  "GetSuppressionsAffectingRule": {
    "accessPath": [
      "getSuppressionsAffectingRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/configuration/suppressions/rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get suppressions affecting a specific rule",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule."
    }
  },
  "ValidateSecurityMonitoringSuppression": {
    "accessPath": [
      "validateSecurityMonitoringSuppression"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/configuration/suppressions/validation",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Validate a suppression rule"
  },
  "DeleteSecurityMonitoringSuppression": {
    "accessPath": [
      "deleteSecurityMonitoringSuppression"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/security_monitoring/configuration/suppressions/{suppression_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "suppression_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a suppression rule",
    "parameterDescriptions": {
      "suppression_id": "The ID of the suppression rule"
    }
  },
  "GetSecurityMonitoringSuppression": {
    "accessPath": [
      "getSecurityMonitoringSuppression"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/configuration/suppressions/{suppression_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "suppression_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a suppression rule",
    "parameterDescriptions": {
      "suppression_id": "The ID of the suppression rule"
    }
  },
  "UpdateSecurityMonitoringSuppression": {
    "accessPath": [
      "updateSecurityMonitoringSuppression"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security_monitoring/configuration/suppressions/{suppression_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "suppression_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a suppression rule",
    "parameterDescriptions": {
      "suppression_id": "The ID of the suppression rule"
    }
  },
  "GetSuppressionVersionHistory": {
    "accessPath": [
      "getSuppressionVersionHistory"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/configuration/suppressions/{suppression_id}/version_history",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "suppression_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]"
    ],
    "description": "Get a suppression's version history",
    "parameterDescriptions": {
      "suppression_id": "The ID of the suppression rule",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return."
    }
  },
  "GetContentPacksStates": {
    "accessPath": [
      "getContentPacksStates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/content_packs/states",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get content pack states"
  },
  "ActivateContentPack": {
    "accessPath": [
      "activateContentPack"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/security_monitoring/content_packs/{content_pack_id}/activate",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "content_pack_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Activate content pack",
    "parameterDescriptions": {
      "content_pack_id": "The ID of the content pack to activate."
    }
  },
  "DeactivateContentPack": {
    "accessPath": [
      "deactivateContentPack"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/security_monitoring/content_packs/{content_pack_id}/deactivate",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "content_pack_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Deactivate content pack",
    "parameterDescriptions": {
      "content_pack_id": "The ID of the content pack to deactivate."
    }
  },
  "ListSecurityMonitoringRules": {
    "accessPath": [
      "listSecurityMonitoringRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "query",
      "sort"
    ],
    "description": "List rules",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "query": "A search query to filter security rules. You can filter by attributes such as `type`, `source`, `tags`.",
      "sort": "Attribute used to sort rules. Prefix with `-` to sort in descending order."
    }
  },
  "CreateSecurityMonitoringRule": {
    "accessPath": [
      "createSecurityMonitoringRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a detection rule"
  },
  "BulkExportSecurityMonitoringRules": {
    "accessPath": [
      "bulkExportSecurityMonitoringRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/rules/bulk_export",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Bulk export security monitoring rules"
  },
  "ConvertSecurityMonitoringRuleFromJSONToTerraform": {
    "accessPath": [
      "convertSecurityMonitoringRuleFromJsonToTerraform"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/rules/convert",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Convert a rule from JSON to Terraform"
  },
  "TestSecurityMonitoringRule": {
    "accessPath": [
      "testSecurityMonitoringRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "rule",
      "ruleQueryPayloads"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/rules/test",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Test a rule"
  },
  "ValidateSecurityMonitoringRule": {
    "accessPath": [
      "validateSecurityMonitoringRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/rules/validation",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Validate a detection rule"
  },
  "DeleteSecurityMonitoringRule": {
    "accessPath": [
      "deleteSecurityMonitoringRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/security_monitoring/rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an existing rule",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule."
    }
  },
  "GetSecurityMonitoringRule": {
    "accessPath": [
      "getSecurityMonitoringRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a rule's details",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule."
    }
  },
  "UpdateSecurityMonitoringRule": {
    "accessPath": [
      "updateSecurityMonitoringRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "calculatedFields",
      "cases",
      "complianceSignalOptions",
      "customMessage",
      "customName",
      "filters",
      "groupSignalsBy",
      "hasExtendedTitle",
      "isEnabled",
      "message",
      "name",
      "options",
      "queries",
      "referenceTables",
      "schedulingOptions",
      "tags",
      "thirdPartyCases",
      "version"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/security_monitoring/rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an existing rule",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule."
    }
  },
  "ConvertExistingSecurityMonitoringRule": {
    "accessPath": [
      "convertExistingSecurityMonitoringRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/rules/{rule_id}/convert",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Convert an existing rule from JSON to Terraform",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule."
    }
  },
  "TestExistingSecurityMonitoringRule": {
    "accessPath": [
      "testExistingSecurityMonitoringRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "rule",
      "ruleQueryPayloads"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/rules/{rule_id}/test",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Test an existing rule",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule."
    }
  },
  "GetRuleVersionHistory": {
    "accessPath": [
      "getRuleVersionHistory"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/rules/{rule_id}/version_history",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]"
    ],
    "description": "Get a rule's version history",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule.",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return."
    }
  },
  "ListSecurityMonitoringSignals": {
    "accessPath": [
      "listSecurityMonitoringSignals"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/signals",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[query]",
      "filter[from]",
      "filter[to]",
      "sort",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "Get a quick list of security signals",
    "parameterDescriptions": {
      "filter[query]": "The search query for security signals.",
      "filter[from]": "The minimum timestamp for requested security signals.",
      "filter[to]": "The maximum timestamp for requested security signals.",
      "sort": "The order of the security signals in results.",
      "page[cursor]": "A list of results using the cursor provided in the previous query.",
      "page[limit]": "The maximum number of security signals in the response."
    }
  },
  "BulkEditSecurityMonitoringSignalsAssignee": {
    "accessPath": [
      "bulkEditSecurityMonitoringSignalsAssignee"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security_monitoring/signals/bulk/assignee",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Bulk update triage assignee of security signals"
  },
  "BulkEditSecurityMonitoringSignalsState": {
    "accessPath": [
      "bulkEditSecurityMonitoringSignalsState"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security_monitoring/signals/bulk/state",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Bulk update triage state of security signals"
  },
  "SearchSecurityMonitoringSignals": {
    "accessPath": [
      "searchSecurityMonitoringSignals"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "filter",
      "page",
      "sort"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/security_monitoring/signals/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a list of security signals"
  },
  "GetSecurityMonitoringSignal": {
    "accessPath": [
      "getSecurityMonitoringSignal"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/security_monitoring/signals/{signal_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "signal_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a signal's details",
    "parameterDescriptions": {
      "signal_id": "The ID of the signal."
    }
  },
  "EditSecurityMonitoringSignalAssignee": {
    "accessPath": [
      "editSecurityMonitoringSignalAssignee"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security_monitoring/signals/{signal_id}/assignee",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "signal_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Modify the triage assignee of a security signal",
    "parameterDescriptions": {
      "signal_id": "The ID of the signal."
    }
  },
  "EditSecurityMonitoringSignalIncidents": {
    "accessPath": [
      "editSecurityMonitoringSignalIncidents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security_monitoring/signals/{signal_id}/incidents",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "signal_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Change the related incidents of a security signal",
    "parameterDescriptions": {
      "signal_id": "The ID of the signal."
    }
  },
  "EditSecurityMonitoringSignalState": {
    "accessPath": [
      "editSecurityMonitoringSignalState"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/security_monitoring/signals/{signal_id}/state",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "signal_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Change the triage state of a security signal",
    "parameterDescriptions": {
      "signal_id": "The ID of the signal."
    }
  },
  "ListScanningGroups": {
    "accessPath": [
      "listScanningGroups"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/sensitive-data-scanner/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Scanning Groups"
  },
  "ReorderScanningGroups": {
    "accessPath": [
      "reorderScanningGroups"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data",
      "meta"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/sensitive-data-scanner/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Reorder Groups"
  },
  "CreateScanningGroup": {
    "accessPath": [
      "createScanningGroup"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data",
      "meta"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/sensitive-data-scanner/config/groups",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Scanning Group"
  },
  "DeleteScanningGroup": {
    "accessPath": [
      "deleteScanningGroup"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "meta"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/sensitive-data-scanner/config/groups/{group_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "group_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Scanning Group",
    "parameterDescriptions": {
      "group_id": "The ID of a group of rules."
    }
  },
  "UpdateScanningGroup": {
    "accessPath": [
      "updateScanningGroup"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data",
      "meta"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/sensitive-data-scanner/config/groups/{group_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "group_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Scanning Group",
    "parameterDescriptions": {
      "group_id": "The ID of a group of rules."
    }
  },
  "CreateScanningRule": {
    "accessPath": [
      "createScanningRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data",
      "meta"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/sensitive-data-scanner/config/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Scanning Rule"
  },
  "DeleteScanningRule": {
    "accessPath": [
      "deleteScanningRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "meta"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/sensitive-data-scanner/config/rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Scanning Rule",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule."
    }
  },
  "UpdateScanningRule": {
    "accessPath": [
      "updateScanningRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data",
      "meta"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/sensitive-data-scanner/config/rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Scanning Rule",
    "parameterDescriptions": {
      "rule_id": "The ID of the rule."
    }
  },
  "ListStandardPatterns": {
    "accessPath": [
      "listStandardPatterns"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/sensitive-data-scanner/config/standard-patterns",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List standard patterns"
  },
  "SubmitMetrics": {
    "accessPath": [
      "submitMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "series"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [
      "Content-Encoding"
    ],
    "method": "POST",
    "routeTemplate": "/api/v2/series",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Submit metrics",
    "parameterDescriptions": {
      "Content-Encoding": "HTTP header used to compress the media-type."
    }
  },
  "CreateServiceAccount": {
    "accessPath": [
      "createServiceAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/service_accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a service account"
  },
  "ListServiceAccountApplicationKeys": {
    "accessPath": [
      "listServiceAccountApplicationKeys"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/service_accounts/{service_account_id}/application_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "service_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort",
      "filter",
      "filter[created_at][start]",
      "filter[created_at][end]"
    ],
    "description": "List application keys for this service account",
    "parameterDescriptions": {
      "service_account_id": "The ID of the service account.",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "sort": "Application key attribute used to sort results. Sort order is ascending\nby default. In order to specify a descending sort, prefix the\nattribute with a minus sign.",
      "filter": "Filter application keys by the specified string.",
      "filter[created_at][start]": "Only include application keys created on or after the specified date.",
      "filter[created_at][end]": "Only include application keys created on or before the specified date."
    }
  },
  "CreateServiceAccountApplicationKey": {
    "accessPath": [
      "createServiceAccountApplicationKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/service_accounts/{service_account_id}/application_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "service_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an application key for this service account",
    "parameterDescriptions": {
      "service_account_id": "The ID of the service account."
    }
  },
  "DeleteServiceAccountApplicationKey": {
    "accessPath": [
      "deleteServiceAccountApplicationKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "service_account_id",
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an application key for this service account",
    "parameterDescriptions": {
      "service_account_id": "The ID of the service account.",
      "app_key_id": "The ID of the application key."
    }
  },
  "GetServiceAccountApplicationKey": {
    "accessPath": [
      "getServiceAccountApplicationKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "service_account_id",
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get one application key for this service account",
    "parameterDescriptions": {
      "service_account_id": "The ID of the service account.",
      "app_key_id": "The ID of the application key."
    }
  },
  "UpdateServiceAccountApplicationKey": {
    "accessPath": [
      "updateServiceAccountApplicationKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "service_account_id",
      "app_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Edit an application key for this service account",
    "parameterDescriptions": {
      "service_account_id": "The ID of the service account.",
      "app_key_id": "The ID of the application key."
    }
  },
  "ListIncidentServices": {
    "accessPath": [
      "listIncidentServices"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/services",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include",
      "page[size]",
      "page[offset]",
      "filter"
    ],
    "description": "Get a list of all incident services",
    "parameterDescriptions": {
      "include": "Specifies which types of related objects should be included in the response.",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[offset]": "Specific offset to use as the beginning of the returned page.",
      "filter": "A search query that filters services by name."
    }
  },
  "CreateIncidentService": {
    "accessPath": [
      "createIncidentService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/services",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new incident service"
  },
  "ListServiceDefinitions": {
    "accessPath": [
      "listServiceDefinitions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/services/definitions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "schema_version"
    ],
    "description": "Get all service definitions",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "schema_version": "The schema version desired in the response."
    }
  },
  "CreateOrUpdateServiceDefinitions": {
    "accessPath": [
      "createOrUpdateServiceDefinitions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/services/definitions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create or update service definition"
  },
  "DeleteServiceDefinition": {
    "accessPath": [
      "deleteServiceDefinition"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/services/definitions/{service_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "service_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a single service definition",
    "parameterDescriptions": {
      "service_name": "The name of the service."
    }
  },
  "GetServiceDefinition": {
    "accessPath": [
      "getServiceDefinition"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/services/definitions/{service_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "service_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "schema_version"
    ],
    "description": "Get a single service definition",
    "parameterDescriptions": {
      "service_name": "The name of the service.",
      "schema_version": "The schema version desired in the response."
    }
  },
  "DeleteIncidentService": {
    "accessPath": [
      "deleteIncidentService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/services/{service_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "service_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an existing incident service",
    "parameterDescriptions": {
      "service_id": "The ID of the incident service."
    }
  },
  "GetIncidentService": {
    "accessPath": [
      "getIncidentService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/services/{service_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "service_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get details of an incident service",
    "parameterDescriptions": {
      "service_id": "The ID of the incident service.",
      "include": "Specifies which types of related objects should be included in the response."
    }
  },
  "UpdateIncidentService": {
    "accessPath": [
      "updateIncidentService"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/services/{service_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "service_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an existing incident service",
    "parameterDescriptions": {
      "service_id": "The ID of the incident service."
    }
  },
  "ListSecurityMonitoringHistsignals": {
    "accessPath": [
      "listSecurityMonitoringHistsignals"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/siem-threat-hunting/histsignals",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[query]",
      "filter[from]",
      "filter[to]",
      "sort",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "List hist signals",
    "parameterDescriptions": {
      "filter[query]": "The search query for security signals.",
      "filter[from]": "The minimum timestamp for requested security signals.",
      "filter[to]": "The maximum timestamp for requested security signals.",
      "sort": "The order of the security signals in results.",
      "page[cursor]": "A list of results using the cursor provided in the previous query.",
      "page[limit]": "The maximum number of security signals in the response."
    }
  },
  "SearchSecurityMonitoringHistsignals": {
    "accessPath": [
      "searchSecurityMonitoringHistsignals"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "filter",
      "page",
      "sort"
    ],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/siem-threat-hunting/histsignals/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Search hist signals"
  },
  "GetSecurityMonitoringHistsignal": {
    "accessPath": [
      "getSecurityMonitoringHistsignal"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/siem-threat-hunting/histsignals/{histsignal_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "histsignal_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a hist signal's details",
    "parameterDescriptions": {
      "histsignal_id": "The ID of the threat hunting signal."
    }
  },
  "ListThreatHuntingJobs": {
    "accessPath": [
      "listThreatHuntingJobs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/siem-threat-hunting/jobs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort",
      "filter[query]"
    ],
    "description": "List threat hunting jobs",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "sort": "The order of the jobs in results.",
      "filter[query]": "Query used to filter items from the fetched list."
    }
  },
  "RunThreatHuntingJob": {
    "accessPath": [
      "runThreatHuntingJob"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/siem-threat-hunting/jobs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Run a threat hunting job"
  },
  "ConvertJobResultToSignal": {
    "accessPath": [
      "convertJobResultToSignal"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/siem-threat-hunting/jobs/signal_convert",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Convert a job result to a signal"
  },
  "DeleteThreatHuntingJob": {
    "accessPath": [
      "deleteThreatHuntingJob"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/siem-threat-hunting/jobs/{job_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "job_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an existing job",
    "parameterDescriptions": {
      "job_id": "The ID of the job."
    }
  },
  "GetThreatHuntingJob": {
    "accessPath": [
      "getThreatHuntingJob"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/siem-threat-hunting/jobs/{job_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "job_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a job's details",
    "parameterDescriptions": {
      "job_id": "The ID of the job."
    }
  },
  "CancelThreatHuntingJob": {
    "accessPath": [
      "cancelThreatHuntingJob"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/siem-threat-hunting/jobs/{job_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "job_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel a threat hunting job",
    "parameterDescriptions": {
      "job_id": "The ID of the job."
    }
  },
  "GetSecurityMonitoringHistsignalsByJobId": {
    "accessPath": [
      "getSecurityMonitoringHistsignalsByJobId"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/siem-threat-hunting/jobs/{job_id}/histsignals",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "job_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[query]",
      "filter[from]",
      "filter[to]",
      "sort",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "Get a job's hist signals",
    "parameterDescriptions": {
      "job_id": "The ID of the job.",
      "filter[query]": "The search query for security signals.",
      "filter[from]": "The minimum timestamp for requested security signals.",
      "filter[to]": "The maximum timestamp for requested security signals.",
      "sort": "The order of the security signals in results.",
      "page[cursor]": "A list of results using the cursor provided in the previous query.",
      "page[limit]": "The maximum number of security signals in the response."
    }
  },
  "CreateSLOReportJob": {
    "accessPath": [
      "createSloReportJob"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/slo/report",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new SLO report"
  },
  "GetSLOReport": {
    "accessPath": [
      "getSloReport"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/slo/report/{report_id}/download",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "report_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get SLO report",
    "parameterDescriptions": {
      "report_id": "The ID of the report job."
    }
  },
  "GetSLOReportJobStatus": {
    "accessPath": [
      "getSloReportJobStatus"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/slo/report/{report_id}/status",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "report_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get SLO report status",
    "parameterDescriptions": {
      "report_id": "The ID of the report job."
    }
  },
  "GetSloStatus": {
    "accessPath": [
      "getSloStatus"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/slo/{slo_id}/status",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "slo_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "from_ts",
      "to_ts",
      "disable_corrections"
    ],
    "description": "Get SLO status",
    "parameterDescriptions": {
      "slo_id": "The ID of the SLO.",
      "from_ts": "The starting timestamp for the SLO status query in epoch seconds.",
      "to_ts": "The ending timestamp for the SLO status query in epoch seconds.",
      "disable_corrections": "Whether to exclude correction windows from the SLO status calculation. Defaults to false."
    }
  },
  "GetSPARecommendations": {
    "accessPath": [
      "getSpaRecommendations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/spa/recommendations/{service}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "service"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "bypass_cache"
    ],
    "description": "Get SPA Recommendations",
    "parameterDescriptions": {
      "bypass_cache": "The recommendation service should not use its metrics cache.",
      "service": "The service name for a spark job."
    }
  },
  "GetSPARecommendationsWithShard": {
    "accessPath": [
      "getSpaRecommendationsWithShard"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/spa/recommendations/{service}/{shard}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "shard",
      "service"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "bypass_cache"
    ],
    "description": "Get SPA Recommendations with a shard parameter",
    "parameterDescriptions": {
      "shard": "The shard tag for a spark job, which differentiates jobs within the same service that have different resource needs",
      "service": "The service name for a spark job",
      "bypass_cache": "The recommendation service should not use its metrics cache."
    }
  },
  "AggregateSpans": {
    "accessPath": [
      "aggregateSpans"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/spans/analytics/aggregate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Aggregate spans"
  },
  "ListSpansGet": {
    "accessPath": [
      "listSpansGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/spans/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[query]",
      "filter[from]",
      "filter[to]",
      "sort",
      "page[cursor]",
      "page[limit]"
    ],
    "description": "Get a list of spans",
    "parameterDescriptions": {
      "filter[query]": "Search query following spans syntax.",
      "filter[from]": "Minimum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds).",
      "filter[to]": "Maximum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds).",
      "sort": "Order of spans in results.",
      "page[cursor]": "List following results with a cursor provided in the previous query.",
      "page[limit]": "Maximum number of spans in the response."
    }
  },
  "ListSpans": {
    "accessPath": [
      "listSpans"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/spans/events/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Search spans"
  },
  "CreateSCAResult": {
    "accessPath": [
      "createScaResult"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/static-analysis-sca/dependencies",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Post dependencies for analysis"
  },
  "CreateSCAResolveVulnerableSymbols": {
    "accessPath": [
      "createScaResolveVulnerableSymbols"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/static-analysis-sca/vulnerabilities/resolve-vulnerable-symbols",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "POST request to resolve vulnerable symbols"
  },
  "DeleteCustomRuleset": {
    "accessPath": [
      "deleteCustomRuleset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/static-analysis/custom/rulesets/{ruleset_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Custom Ruleset",
    "parameterDescriptions": {
      "ruleset_name": "The ruleset name"
    }
  },
  "GetCustomRuleset": {
    "accessPath": [
      "getCustomRuleset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/static-analysis/custom/rulesets/{ruleset_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Show Custom Ruleset",
    "parameterDescriptions": {
      "ruleset_name": "The ruleset name"
    }
  },
  "UpdateCustomRuleset": {
    "accessPath": [
      "updateCustomRuleset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/static-analysis/custom/rulesets/{ruleset_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Custom Ruleset",
    "parameterDescriptions": {
      "ruleset_name": "The ruleset name"
    }
  },
  "CreateCustomRule": {
    "accessPath": [
      "createCustomRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Custom Rule",
    "parameterDescriptions": {
      "ruleset_name": "The ruleset name"
    }
  },
  "DeleteCustomRule": {
    "accessPath": [
      "deleteCustomRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_name",
      "rule_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Custom Rule",
    "parameterDescriptions": {
      "ruleset_name": "The ruleset name",
      "rule_name": "The rule name"
    }
  },
  "GetCustomRule": {
    "accessPath": [
      "getCustomRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_name",
      "rule_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Show Custom Rule",
    "parameterDescriptions": {
      "ruleset_name": "The ruleset name",
      "rule_name": "The rule name"
    }
  },
  "ListCustomRuleRevisions": {
    "accessPath": [
      "listCustomRuleRevisions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_name",
      "rule_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[offset]",
      "page[limit]"
    ],
    "description": "List Custom Rule Revisions",
    "parameterDescriptions": {
      "ruleset_name": "The ruleset name",
      "rule_name": "The rule name",
      "page[offset]": "Pagination offset",
      "page[limit]": "Pagination limit"
    }
  },
  "CreateCustomRuleRevision": {
    "accessPath": [
      "createCustomRuleRevision"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_name",
      "rule_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Custom Rule Revision",
    "parameterDescriptions": {
      "ruleset_name": "The ruleset name",
      "rule_name": "The rule name"
    }
  },
  "RevertCustomRuleRevision": {
    "accessPath": [
      "revertCustomRuleRevision"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions/revert",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_name",
      "rule_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Revert Custom Rule Revision",
    "parameterDescriptions": {
      "ruleset_name": "The ruleset name",
      "rule_name": "The rule name"
    }
  },
  "GetCustomRuleRevision": {
    "accessPath": [
      "getCustomRuleRevision"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_name",
      "rule_name",
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Show Custom Rule Revision",
    "parameterDescriptions": {
      "ruleset_name": "The ruleset name",
      "rule_name": "The rule name",
      "id": "The revision ID"
    }
  },
  "ListMultipleRulesets": {
    "accessPath": [
      "listMultipleRulesets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/static-analysis/rulesets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Ruleset get multiple"
  },
  "GetSecretsRules": {
    "accessPath": [
      "getSecretsRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/static-analysis/secrets/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Returns a list of Secrets rules"
  },
  "ListStatusPages": {
    "accessPath": [
      "listStatusPages"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/statuspages",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[offset]",
      "page[limit]",
      "include"
    ],
    "description": "List status pages",
    "parameterDescriptions": {
      "page[offset]": "Offset to use as the start of the page.",
      "page[limit]": "The number of status pages to return per page.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user."
    }
  },
  "CreateStatusPage": {
    "accessPath": [
      "createStatusPage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/statuspages",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Create status page",
    "parameterDescriptions": {
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user."
    }
  },
  "ListDegradations": {
    "accessPath": [
      "listDegradations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/statuspages/degradations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[page_id]",
      "page[offset]",
      "page[limit]",
      "include",
      "filter[status]",
      "sort"
    ],
    "description": "List degradations",
    "parameterDescriptions": {
      "filter[page_id]": "Optional page id filter.",
      "page[offset]": "Offset to use as the start of the page.",
      "page[limit]": "The number of degradations to return per page.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.",
      "filter[status]": "Optional degradation status filter. Supported values: investigating, identified, monitoring, resolved.",
      "sort": "Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, modified_at, -modified_at."
    }
  },
  "ListMaintenances": {
    "accessPath": [
      "listMaintenances"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/statuspages/maintenances",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[page_id]",
      "page[offset]",
      "page[limit]",
      "include",
      "filter[status]",
      "sort"
    ],
    "description": "List maintenances",
    "parameterDescriptions": {
      "filter[page_id]": "Optional page id filter.",
      "page[offset]": "Offset to use as the start of the page.",
      "page[limit]": "The number of maintenances to return per page.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.",
      "filter[status]": "Optional maintenance status filter. Supported values: scheduled, in_progress, completed.",
      "sort": "Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, start_date, -start_date."
    }
  },
  "DeleteStatusPage": {
    "accessPath": [
      "deleteStatusPage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/statuspages/{page_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete status page",
    "parameterDescriptions": {
      "page_id": "The ID of the status page."
    }
  },
  "GetStatusPage": {
    "accessPath": [
      "getStatusPage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/statuspages/{page_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get status page",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user."
    }
  },
  "UpdateStatusPage": {
    "accessPath": [
      "updateStatusPage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/statuspages/{page_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "delete_subscribers",
      "include"
    ],
    "description": "Update status page",
    "parameterDescriptions": {
      "delete_subscribers": "Whether to delete existing subscribers when updating a status page's type.",
      "page_id": "The ID of the status page.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user."
    }
  },
  "ListComponents": {
    "accessPath": [
      "listComponents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/statuspages/{page_id}/components",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "List components",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group."
    }
  },
  "CreateComponent": {
    "accessPath": [
      "createComponent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/statuspages/{page_id}/components",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Create component",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group."
    }
  },
  "DeleteComponent": {
    "accessPath": [
      "deleteComponent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/statuspages/{page_id}/components/{component_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id",
      "component_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete component",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "component_id": "The ID of the component."
    }
  },
  "GetComponent": {
    "accessPath": [
      "getComponent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/statuspages/{page_id}/components/{component_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id",
      "component_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get component",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "component_id": "The ID of the component.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group."
    }
  },
  "UpdateComponent": {
    "accessPath": [
      "updateComponent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/statuspages/{page_id}/components/{component_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id",
      "component_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Update component",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "component_id": "The ID of the component.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group."
    }
  },
  "CreateDegradation": {
    "accessPath": [
      "createDegradation"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/statuspages/{page_id}/degradations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "notify_subscribers",
      "include"
    ],
    "description": "Create degradation",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "notify_subscribers": "Whether to notify page subscribers of the degradation.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page."
    }
  },
  "DeleteDegradation": {
    "accessPath": [
      "deleteDegradation"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/statuspages/{page_id}/degradations/{degradation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id",
      "degradation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete degradation",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "degradation_id": "The ID of the degradation."
    }
  },
  "GetDegradation": {
    "accessPath": [
      "getDegradation"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/statuspages/{page_id}/degradations/{degradation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id",
      "degradation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get degradation",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "degradation_id": "The ID of the degradation.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page."
    }
  },
  "UpdateDegradation": {
    "accessPath": [
      "updateDegradation"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/statuspages/{page_id}/degradations/{degradation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id",
      "degradation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "notify_subscribers",
      "include"
    ],
    "description": "Update degradation",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "notify_subscribers": "Whether to notify page subscribers of the degradation.",
      "degradation_id": "The ID of the degradation.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page."
    }
  },
  "CreateMaintenance": {
    "accessPath": [
      "createMaintenance"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/statuspages/{page_id}/maintenances",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "notify_subscribers",
      "include"
    ],
    "description": "Schedule maintenance",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "notify_subscribers": "Whether to notify page subscribers of the maintenance.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page."
    }
  },
  "GetMaintenance": {
    "accessPath": [
      "getMaintenance"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/statuspages/{page_id}/maintenances/{maintenance_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id",
      "maintenance_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get maintenance",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "maintenance_id": "The ID of the maintenance.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page."
    }
  },
  "UpdateMaintenance": {
    "accessPath": [
      "updateMaintenance"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/statuspages/{page_id}/maintenances/{maintenance_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id",
      "maintenance_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "notify_subscribers",
      "include"
    ],
    "description": "Update maintenance",
    "parameterDescriptions": {
      "page_id": "The ID of the status page.",
      "notify_subscribers": "Whether to notify page subscribers of the maintenance.",
      "maintenance_id": "The ID of the maintenance.",
      "include": "Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page."
    }
  },
  "PublishStatusPage": {
    "accessPath": [
      "publishStatusPage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/statuspages/{page_id}/publish",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Publish status page",
    "parameterDescriptions": {
      "page_id": "The ID of the status page."
    }
  },
  "UnpublishStatusPage": {
    "accessPath": [
      "unpublishStatusPage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/statuspages/{page_id}/unpublish",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "page_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Unpublish status page",
    "parameterDescriptions": {
      "page_id": "The ID of the status page."
    }
  },
  "GetApiMultistepSubtests": {
    "accessPath": [
      "getApiMultistepSubtests"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/synthetics/api-multistep/subtests/{public_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get available subtests for a multistep test",
    "parameterDescriptions": {
      "public_id": "The public ID of the API multistep test."
    }
  },
  "GetApiMultistepSubtestParents": {
    "accessPath": [
      "getApiMultistepSubtestParents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/synthetics/api-multistep/subtests/{public_id}/parents",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get parent tests for a subtest",
    "parameterDescriptions": {
      "public_id": "The public ID of the subtest."
    }
  },
  "GetOnDemandConcurrencyCap": {
    "accessPath": [
      "getOnDemandConcurrencyCap"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/synthetics/settings/on_demand_concurrency_cap",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the on-demand concurrency cap"
  },
  "SetOnDemandConcurrencyCap": {
    "accessPath": [
      "setOnDemandConcurrencyCap"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "on_demand_concurrency_cap"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/synthetics/settings/on_demand_concurrency_cap",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Save new value for on-demand concurrency cap"
  },
  "CreateSyntheticsSuite": {
    "accessPath": [
      "createSyntheticsSuite"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/synthetics/suites",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a test suite"
  },
  "DeleteSyntheticsSuites": {
    "accessPath": [
      "deleteSyntheticsSuites"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/synthetics/suites/bulk-delete",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Bulk delete suites"
  },
  "SearchSuites": {
    "accessPath": [
      "searchSuites"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/synthetics/suites/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "query",
      "sort",
      "facets_only",
      "start",
      "count"
    ],
    "description": "Search test suites",
    "parameterDescriptions": {
      "query": "The search query.",
      "sort": "The sort order for the results (e.g., `name,asc` or `name,desc`).",
      "facets_only": "If true, return only facets instead of full test details.",
      "start": "The offset from which to start returning results.",
      "count": "The maximum number of results to return."
    }
  },
  "GetSyntheticsSuite": {
    "accessPath": [
      "getSyntheticsSuite"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/synthetics/suites/{public_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a suite",
    "parameterDescriptions": {
      "public_id": "The public ID of the suite to get details from."
    }
  },
  "EditSyntheticsSuite": {
    "accessPath": [
      "editSyntheticsSuite"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/synthetics/suites/{public_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Edit a test suite",
    "parameterDescriptions": {
      "public_id": "The public ID of the suite to edit."
    }
  },
  "PatchTestSuite": {
    "accessPath": [
      "patchTestSuite"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/synthetics/suites/{public_id}/jsonpatch",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Patch a test suite",
    "parameterDescriptions": {
      "public_id": "The public ID of the Synthetic test suite to patch."
    }
  },
  "DeleteSyntheticsTests": {
    "accessPath": [
      "deleteSyntheticsTests"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/synthetics/tests/bulk-delete",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Bulk delete tests"
  },
  "GetSyntheticsFastTestResult": {
    "accessPath": [
      "getSyntheticsFastTestResult"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/synthetics/tests/fast/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a fast test result",
    "parameterDescriptions": {
      "id": "The UUID of the fast test to retrieve the result for."
    }
  },
  "CreateSyntheticsNetworkTest": {
    "accessPath": [
      "createSyntheticsNetworkTest"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/synthetics/tests/network",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Network Path test"
  },
  "GetSyntheticsNetworkTest": {
    "accessPath": [
      "getSyntheticsNetworkTest"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/synthetics/tests/network/{public_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a Network Path test",
    "parameterDescriptions": {
      "public_id": "The public ID of the Network Path test to get details from."
    }
  },
  "UpdateSyntheticsNetworkTest": {
    "accessPath": [
      "updateSyntheticsNetworkTest"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/synthetics/tests/network/{public_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Edit a Network Path test",
    "parameterDescriptions": {
      "public_id": "The public ID of the Network Path test to edit."
    }
  },
  "GetTestFileDownloadUrl": {
    "accessPath": [
      "getTestFileDownloadUrl"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "bucketKey"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/synthetics/tests/{public_id}/files/download",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a presigned URL for downloading a test file",
    "parameterDescriptions": {
      "public_id": "The public ID of the Synthetic test."
    }
  },
  "GetTestFileMultipartPresignedUrls": {
    "accessPath": [
      "getTestFileMultipartPresignedUrls"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "bucketKeyPrefix",
      "parts"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/synthetics/tests/{public_id}/files/multipart-presigned-urls",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get presigned URLs for uploading a test file",
    "parameterDescriptions": {
      "public_id": "The public ID of the Synthetic test."
    }
  },
  "AbortTestFileMultipartUpload": {
    "accessPath": [
      "abortTestFileMultipartUpload"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "key",
      "uploadId"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/synthetics/tests/{public_id}/files/multipart-upload-abort",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Abort a multipart upload of a test file",
    "parameterDescriptions": {
      "public_id": "The public ID of the Synthetic test."
    }
  },
  "CompleteTestFileMultipartUpload": {
    "accessPath": [
      "completeTestFileMultipartUpload"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "key",
      "parts",
      "uploadId"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/synthetics/tests/{public_id}/files/multipart-upload-complete",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Complete a multipart upload of a test file",
    "parameterDescriptions": {
      "public_id": "The public ID of the Synthetic test."
    }
  },
  "GetTestParentSuites": {
    "accessPath": [
      "getTestParentSuites"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/synthetics/tests/{public_id}/parent-suites",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get parent suites for a test",
    "parameterDescriptions": {
      "public_id": "The public ID of the Synthetic test."
    }
  },
  "ListSyntheticsTestVersions": {
    "accessPath": [
      "listSyntheticsTestVersions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/synthetics/tests/{public_id}/version_history",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "last_version_number",
      "limit"
    ],
    "description": "Get version history of a test",
    "parameterDescriptions": {
      "public_id": "The public ID of the Synthetic test.",
      "last_version_number": "The version number of the last item from the previous page. Omit to get the first page.",
      "limit": "Maximum number of version records to return per page."
    }
  },
  "GetSyntheticsTestVersion": {
    "accessPath": [
      "getSyntheticsTestVersion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/synthetics/tests/{public_id}/version_history/{version_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "public_id",
      "version_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include_change_metadata",
      "only_check_existence"
    ],
    "description": "Get a specific version of a test",
    "parameterDescriptions": {
      "public_id": "The public ID of the Synthetic test.",
      "version_number": "The version number to retrieve.",
      "include_change_metadata": "If `true`, include change metadata in the response.",
      "only_check_existence": "If `true`, only check whether the version exists without returning its full payload.\nReturns an empty object if the version exists, or 404 if not."
    }
  },
  "PatchGlobalVariable": {
    "accessPath": [
      "patchGlobalVariable"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/synthetics/variables/{variable_id}/jsonpatch",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "variable_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Patch a global variable",
    "parameterDescriptions": {
      "variable_id": "The ID of the global variable."
    }
  },
  "ListTagPipelinesRulesets": {
    "accessPath": [
      "listTagPipelinesRulesets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/tags/enrichment",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List tag pipeline rulesets"
  },
  "CreateTagPipelinesRuleset": {
    "accessPath": [
      "createTagPipelinesRuleset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/tags/enrichment",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create tag pipeline ruleset"
  },
  "ReorderTagPipelinesRulesets": {
    "accessPath": [
      "reorderTagPipelinesRulesets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/tags/enrichment/reorder",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Reorder tag pipeline rulesets"
  },
  "ValidateQuery": {
    "accessPath": [
      "validateQuery"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/tags/enrichment/validate-query",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Validate query"
  },
  "DeleteTagPipelinesRuleset": {
    "accessPath": [
      "deleteTagPipelinesRuleset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/tags/enrichment/{ruleset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete tag pipeline ruleset",
    "parameterDescriptions": {
      "ruleset_id": "The unique identifier of the ruleset"
    }
  },
  "GetTagPipelinesRuleset": {
    "accessPath": [
      "getTagPipelinesRuleset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/tags/enrichment/{ruleset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a tag pipeline ruleset",
    "parameterDescriptions": {
      "ruleset_id": "The unique identifier of the ruleset"
    }
  },
  "UpdateTagPipelinesRuleset": {
    "accessPath": [
      "updateTagPipelinesRuleset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/tags/enrichment/{ruleset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ruleset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update tag pipeline ruleset",
    "parameterDescriptions": {
      "ruleset_id": "The unique identifier of the ruleset"
    }
  },
  "ListTeams": {
    "accessPath": [
      "listTeams"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[number]",
      "page[size]",
      "sort",
      "include",
      "filter[keyword]",
      "filter[me]",
      "fields[team]"
    ],
    "description": "Get all teams",
    "parameterDescriptions": {
      "page[number]": "Specific page number to return.",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "sort": "Specifies the order of the returned teams",
      "include": "Included related resources optionally requested. Allowed enum values: `team_links, user_team_permissions`",
      "filter[keyword]": "Search query. Can be team name, team handle, or email of team member",
      "filter[me]": "When true, only returns teams the current user belongs to",
      "fields[team]": "List of fields that need to be fetched."
    }
  },
  "CreateTeam": {
    "accessPath": [
      "createTeam"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/team",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a team"
  },
  "ListTeamHierarchyLinks": {
    "accessPath": [
      "listTeamHierarchyLinks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team-hierarchy-links",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[number]",
      "page[size]",
      "filter[parent_team]",
      "filter[sub_team]"
    ],
    "description": "Get team hierarchy links",
    "parameterDescriptions": {
      "page[number]": "Specific page number to return.",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "filter[parent_team]": "Filter by parent team ID",
      "filter[sub_team]": "Filter by sub team ID"
    }
  },
  "AddTeamHierarchyLink": {
    "accessPath": [
      "addTeamHierarchyLink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/team-hierarchy-links",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a team hierarchy link"
  },
  "RemoveTeamHierarchyLink": {
    "accessPath": [
      "removeTeamHierarchyLink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/team-hierarchy-links/{link_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "link_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove a team hierarchy link",
    "parameterDescriptions": {
      "link_id": "The team hierarchy link's identifier"
    }
  },
  "GetTeamHierarchyLink": {
    "accessPath": [
      "getTeamHierarchyLink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team-hierarchy-links/{link_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "link_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a team hierarchy link",
    "parameterDescriptions": {
      "link_id": "The team hierarchy link's identifier"
    }
  },
  "DeleteTeamConnections": {
    "accessPath": [
      "deleteTeamConnections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/team/connections",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete team connections"
  },
  "ListTeamConnections": {
    "accessPath": [
      "listTeamConnections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team/connections",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "filter[sources]",
      "filter[team_ids]",
      "filter[connected_team_ids]",
      "filter[connection_ids]"
    ],
    "description": "List team connections",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "filter[sources]": "Filter team connections by external source systems.",
      "filter[team_ids]": "Filter team connections by Datadog team IDs.",
      "filter[connected_team_ids]": "Filter team connections by connected team IDs from external systems.",
      "filter[connection_ids]": "Filter team connections by connection IDs."
    }
  },
  "CreateTeamConnections": {
    "accessPath": [
      "createTeamConnections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/team/connections",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create team connections"
  },
  "GetTeamSync": {
    "accessPath": [
      "getTeamSync"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team/sync",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[source]"
    ],
    "description": "Get team sync configurations",
    "parameterDescriptions": {
      "filter[source]": "Filter by the external source platform for team synchronization"
    }
  },
  "SyncTeams": {
    "accessPath": [
      "syncTeams"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/team/sync",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Link Teams with GitHub Teams"
  },
  "ListMemberTeams": {
    "accessPath": [
      "listMemberTeams"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team/{super_team_id}/member_teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "super_team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "fields[team]"
    ],
    "description": "Get all member teams",
    "parameterDescriptions": {
      "super_team_id": "None",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "fields[team]": "List of fields that need to be fetched."
    }
  },
  "AddMemberTeam": {
    "accessPath": [
      "addMemberTeam"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/team/{super_team_id}/member_teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "super_team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add a member team",
    "parameterDescriptions": {
      "super_team_id": "None"
    }
  },
  "RemoveMemberTeam": {
    "accessPath": [
      "removeMemberTeam"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/team/{super_team_id}/member_teams/{member_team_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "super_team_id",
      "member_team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove a member team",
    "parameterDescriptions": {
      "super_team_id": "None",
      "member_team_id": "None"
    }
  },
  "DeleteTeam": {
    "accessPath": [
      "deleteTeam"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/team/{team_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove a team",
    "parameterDescriptions": {
      "team_id": "None"
    }
  },
  "GetTeam": {
    "accessPath": [
      "getTeam"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team/{team_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a team",
    "parameterDescriptions": {
      "team_id": "None"
    }
  },
  "UpdateTeam": {
    "accessPath": [
      "updateTeam"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/team/{team_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a team",
    "parameterDescriptions": {
      "team_id": "None"
    }
  },
  "GetTeamLinks": {
    "accessPath": [
      "getTeamLinks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team/{team_id}/links",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get links for a team",
    "parameterDescriptions": {
      "team_id": "None"
    }
  },
  "CreateTeamLink": {
    "accessPath": [
      "createTeamLink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/team/{team_id}/links",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a team link",
    "parameterDescriptions": {
      "team_id": "None"
    }
  },
  "DeleteTeamLink": {
    "accessPath": [
      "deleteTeamLink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/team/{team_id}/links/{link_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "link_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove a team link",
    "parameterDescriptions": {
      "team_id": "None",
      "link_id": "None"
    }
  },
  "GetTeamLink": {
    "accessPath": [
      "getTeamLink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team/{team_id}/links/{link_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "link_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a team link",
    "parameterDescriptions": {
      "team_id": "None",
      "link_id": "None"
    }
  },
  "UpdateTeamLink": {
    "accessPath": [
      "updateTeamLink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/team/{team_id}/links/{link_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "link_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a team link",
    "parameterDescriptions": {
      "team_id": "None",
      "link_id": "None"
    }
  },
  "GetTeamMemberships": {
    "accessPath": [
      "getTeamMemberships"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team/{team_id}/memberships",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort",
      "filter[keyword]"
    ],
    "description": "Get team memberships",
    "parameterDescriptions": {
      "team_id": "None",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "sort": "Specifies the order of returned team memberships",
      "filter[keyword]": "Search query, can be user email or name"
    }
  },
  "CreateTeamMembership": {
    "accessPath": [
      "createTeamMembership"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/team/{team_id}/memberships",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add a user to a team",
    "parameterDescriptions": {
      "team_id": "None"
    }
  },
  "DeleteTeamMembership": {
    "accessPath": [
      "deleteTeamMembership"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/team/{team_id}/memberships/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove a user from a team",
    "parameterDescriptions": {
      "team_id": "None",
      "user_id": "None"
    }
  },
  "UpdateTeamMembership": {
    "accessPath": [
      "updateTeamMembership"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/team/{team_id}/memberships/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a user's membership attributes on a team",
    "parameterDescriptions": {
      "team_id": "None",
      "user_id": "None"
    }
  },
  "GetTeamNotificationRules": {
    "accessPath": [
      "getTeamNotificationRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team/{team_id}/notification-rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get team notification rules",
    "parameterDescriptions": {
      "team_id": "None"
    }
  },
  "CreateTeamNotificationRule": {
    "accessPath": [
      "createTeamNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/team/{team_id}/notification-rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create team notification rule",
    "parameterDescriptions": {
      "team_id": "None"
    }
  },
  "DeleteTeamNotificationRule": {
    "accessPath": [
      "deleteTeamNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/team/{team_id}/notification-rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete team notification rule",
    "parameterDescriptions": {
      "team_id": "None",
      "rule_id": "None"
    }
  },
  "GetTeamNotificationRule": {
    "accessPath": [
      "getTeamNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team/{team_id}/notification-rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get team notification rule",
    "parameterDescriptions": {
      "team_id": "None",
      "rule_id": "None"
    }
  },
  "UpdateTeamNotificationRule": {
    "accessPath": [
      "updateTeamNotificationRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/team/{team_id}/notification-rules/{rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update team notification rule",
    "parameterDescriptions": {
      "team_id": "None",
      "rule_id": "None"
    }
  },
  "GetTeamPermissionSettings": {
    "accessPath": [
      "getTeamPermissionSettings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/team/{team_id}/permission-settings",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get permission settings for a team",
    "parameterDescriptions": {
      "team_id": "None"
    }
  },
  "UpdateTeamPermissionSetting": {
    "accessPath": [
      "updateTeamPermissionSetting"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/team/{team_id}/permission-settings/{action}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "action"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update permission setting for team",
    "parameterDescriptions": {
      "team_id": "None",
      "action": "None"
    }
  },
  "ListIncidentTeams": {
    "accessPath": [
      "listIncidentTeams"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include",
      "page[size]",
      "page[offset]",
      "filter"
    ],
    "description": "Get a list of all incident teams",
    "parameterDescriptions": {
      "include": "Specifies which types of related objects should be included in the response.",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[offset]": "Specific offset to use as the beginning of the returned page.",
      "filter": "A search query that filters teams by name."
    }
  },
  "CreateIncidentTeam": {
    "accessPath": [
      "createIncidentTeam"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new incident team"
  },
  "DeleteIncidentTeam": {
    "accessPath": [
      "deleteIncidentTeam"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/teams/{team_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an existing incident team",
    "parameterDescriptions": {
      "team_id": "The ID of the incident team."
    }
  },
  "GetIncidentTeam": {
    "accessPath": [
      "getIncidentTeam"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/teams/{team_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get details of an incident team",
    "parameterDescriptions": {
      "team_id": "The ID of the incident team.",
      "include": "Specifies which types of related objects should be included in the response."
    }
  },
  "UpdateIncidentTeam": {
    "accessPath": [
      "updateIncidentTeam"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/teams/{team_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an existing incident team",
    "parameterDescriptions": {
      "team_id": "The ID of the incident team."
    }
  },
  "UpdateFlakyTests": {
    "accessPath": [
      "updateFlakyTests"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/test/flaky-test-management/tests",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update flaky test states"
  },
  "SearchFlakyTests": {
    "accessPath": [
      "searchFlakyTests"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/test/flaky-test-management/tests",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Search flaky tests"
  },
  "GetUsageApplicationSecurityMonitoring": {
    "accessPath": [
      "getUsageApplicationSecurityMonitoring"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/usage/application_security",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_hr",
      "end_hr"
    ],
    "description": "Get hourly usage for application security",
    "parameterDescriptions": {
      "start_hr": "Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.",
      "end_hr": "Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending\n**before** this hour."
    }
  },
  "GetBillingDimensionMapping": {
    "accessPath": [
      "getBillingDimensionMapping"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/usage/billing_dimension_mapping",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[month]",
      "filter[view]"
    ],
    "description": "Get billing dimension mapping for usage endpoints",
    "parameterDescriptions": {
      "filter[month]": "Datetime in ISO-8601 format, UTC, and for mappings beginning this month. Defaults to the current month.",
      "filter[view]": "String to specify whether to retrieve active billing dimension mappings for the contract or for all available mappings. Allowed views have the string `active` or `all`. Defaults to `active`."
    }
  },
  "GetCostByOrg": {
    "accessPath": [
      "getCostByOrg"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/usage/cost_by_org",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_month",
      "end_month"
    ],
    "description": "Get cost across multi-org account",
    "parameterDescriptions": {
      "start_month": "Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month.",
      "end_month": "Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month."
    }
  },
  "GetEstimatedCostByOrg": {
    "accessPath": [
      "getEstimatedCostByOrg"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/usage/estimated_cost",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "view",
      "start_month",
      "end_month",
      "start_date",
      "end_date",
      "cost_aggregation",
      "include_connected_accounts"
    ],
    "description": "Get estimated cost across your account",
    "parameterDescriptions": {
      "view": "String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`. Defaults to `summary`.",
      "start_month": "Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month. **Either start_month or start_date should be specified, but not both.** (start_month cannot go beyond two months in the past). Provide an `end_month` to view month-over-month cost.",
      "end_month": "Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.",
      "start_date": "Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost beginning this day. **Either start_month or start_date should be specified, but not both.** (start_date cannot go beyond two months in the past). Provide an `end_date` to view day-over-day cumulative cost.",
      "end_date": "Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost ending this day.",
      "cost_aggregation": "Controls how costs are aggregated when using `start_date`. The `cumulative` option returns month-to-date running totals.",
      "include_connected_accounts": "Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`."
    }
  },
  "GetHistoricalCostByOrg": {
    "accessPath": [
      "getHistoricalCostByOrg"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/usage/historical_cost",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_month",
      "view",
      "end_month",
      "include_connected_accounts"
    ],
    "description": "Get historical cost across your account",
    "parameterDescriptions": {
      "start_month": "Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month.",
      "view": "String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`.  Defaults to `summary`.",
      "end_month": "Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.",
      "include_connected_accounts": "Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`."
    }
  },
  "GetHourlyUsage": {
    "accessPath": [
      "getHourlyUsage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/usage/hourly_usage",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[timestamp][start]",
      "filter[timestamp][end]",
      "filter[product_families]",
      "filter[include_descendants]",
      "filter[include_connected_accounts]",
      "filter[include_breakdown]",
      "filter[versions]",
      "page[limit]",
      "page[next_record_id]"
    ],
    "description": "Get hourly usage by product family",
    "parameterDescriptions": {
      "filter[timestamp][start]": "Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.",
      "filter[timestamp][end]": "Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.",
      "filter[product_families]": "Comma separated list of product families to retrieve. Available families are `all`, `analyzed_logs`,\n`application_security`, `audit_trail`, `bits_ai`, `serverless`, `ci_app`, `cloud_cost_management`, `cloud_siem`,\n`csm_container_enterprise`, `csm_host_enterprise`, `cspm`, `custom_events`, `cws`, `dbm`, `error_tracking`,\n`fargate`, `infra_hosts`, `incident_management`, `indexed_logs`, `indexed_spans`, `ingested_spans`, `iot`,\n`lambda_traced_invocations`, `llm_observability`, `logs`, `network_flows`, `network_hosts`, `network_monitoring`,\n`observability_pipelines`, `online_archive`, `profiling`, `product_analytics`, `rum`, `rum_browser_sessions`,\n`rum_mobile_sessions`, `sds`, `snmp`, `software_delivery`, `synthetics_api`, `synthetics_browser`,\n`synthetics_mobile`, `synthetics_parallel_testing`, `timeseries`, `vuln_management` and `workflow_executions`.\nThe following product family has been **deprecated**: `audit_logs`.",
      "filter[include_descendants]": "Include child org usage in the response. Defaults to false.",
      "filter[include_connected_accounts]": "Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to false.",
      "filter[include_breakdown]": "Include breakdown of usage by subcategories where applicable (for product family logs only). Defaults to false.",
      "filter[versions]": "Comma separated list of product family versions to use in the format `product_family:version`. For example,\n`infra_hosts:1.0.0`. If this parameter is not used, the API will use the latest version of each requested\nproduct family. Currently all families have one version `1.0.0`.",
      "page[limit]": "Maximum number of results to return (between 1 and 500) - defaults to 500 if limit not specified.",
      "page[next_record_id]": "List following results with a next_record_id provided in the previous query."
    }
  },
  "GetUsageLambdaTracedInvocations": {
    "accessPath": [
      "getUsageLambdaTracedInvocations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/usage/lambda_traced_invocations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_hr",
      "end_hr"
    ],
    "description": "Get hourly usage for Lambda traced invocations",
    "parameterDescriptions": {
      "start_hr": "Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.",
      "end_hr": "Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending\n**before** this hour."
    }
  },
  "GetUsageObservabilityPipelines": {
    "accessPath": [
      "getUsageObservabilityPipelines"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/usage/observability_pipelines",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_hr",
      "end_hr"
    ],
    "description": "Get hourly usage for observability pipelines",
    "parameterDescriptions": {
      "start_hr": "Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.",
      "end_hr": "Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending\n**before** this hour."
    }
  },
  "GetProjectedCost": {
    "accessPath": [
      "getProjectedCost"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/usage/projected_cost",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "view",
      "include_connected_accounts"
    ],
    "description": "Get projected cost across your account",
    "parameterDescriptions": {
      "view": "String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`. Defaults to `summary`.",
      "include_connected_accounts": "Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`."
    }
  },
  "GetUsageAttributionTypes": {
    "accessPath": [
      "getUsageAttributionTypes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/usage/usage-attribution-types",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get usage attribution types"
  },
  "SendInvitations": {
    "accessPath": [
      "sendInvitations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/user_invitations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Send invitation emails"
  },
  "GetInvitation": {
    "accessPath": [
      "getInvitation"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/user_invitations/{user_invitation_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_invitation_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a user invitation",
    "parameterDescriptions": {
      "user_invitation_uuid": "The UUID of the user invitation."
    }
  },
  "ListUsers": {
    "accessPath": [
      "listUsers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]",
      "sort",
      "sort_dir",
      "filter",
      "filter[status]"
    ],
    "description": "List all users",
    "parameterDescriptions": {
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return.",
      "sort": "User attribute to order results by. Sort order is ascending by default.\nSort order is descending if the field\nis prefixed by a negative sign, for example `sort=-name`. Options: `name`,\n`modified_at`, `user_count`.",
      "sort_dir": "Direction of sort. Options: `asc`, `desc`.",
      "filter": "Filter all users by the given string. Defaults to no filtering.",
      "filter[status]": "Filter on status attribute.\nComma separated list, with possible values `Active`, `Pending`, and `Disabled`.\nDefaults to no filtering."
    }
  },
  "CreateUser": {
    "accessPath": [
      "createUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a user"
  },
  "DisableUser": {
    "accessPath": [
      "disableUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Disable a user",
    "parameterDescriptions": {
      "user_id": "The ID of the user."
    }
  },
  "GetUser": {
    "accessPath": [
      "getUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get user details",
    "parameterDescriptions": {
      "user_id": "The ID of the user."
    }
  },
  "UpdateUser": {
    "accessPath": [
      "updateUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a user",
    "parameterDescriptions": {
      "user_id": "The ID of the user."
    }
  },
  "ListUserOrganizations": {
    "accessPath": [
      "listUserOrganizations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/users/{user_id}/orgs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a user organization",
    "parameterDescriptions": {
      "user_id": "The ID of the user."
    }
  },
  "ListUserPermissions": {
    "accessPath": [
      "listUserPermissions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/users/{user_id}/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a user permissions",
    "parameterDescriptions": {
      "user_id": "The ID of the user."
    }
  },
  "GetUserMemberships": {
    "accessPath": [
      "getUserMemberships"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/users/{user_uuid}/memberships",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get user memberships",
    "parameterDescriptions": {
      "user_uuid": "None"
    }
  },
  "SearchWidgets": {
    "accessPath": [
      "searchWidgets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/widgets/{experience_type}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "experience_type"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter[widgetType]",
      "filter[creatorHandle]",
      "filter[isFavorited]",
      "filter[title]",
      "filter[tags]",
      "sort",
      "page[number]",
      "page[size]"
    ],
    "description": "Search widgets",
    "parameterDescriptions": {
      "experience_type": "The experience type for the widget.",
      "filter[widgetType]": "Filter widgets by widget type.",
      "filter[creatorHandle]": "Filter widgets by the email handle of the creator.",
      "filter[isFavorited]": "Filter to only widgets favorited by the current user.",
      "filter[title]": "Filter widgets by title (substring match).",
      "filter[tags]": "Filter widgets by tags. Format as bracket-delimited CSV, e.g. `[tag1,tag2]`.",
      "sort": "Sort field for the results. Prefix with `-` for descending order.\nAllowed values: `title`, `created_at`, `modified_at`.",
      "page[number]": "Page number for pagination (0-indexed).",
      "page[size]": "Number of widgets per page."
    }
  },
  "CreateWidget": {
    "accessPath": [
      "createWidget"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/widgets/{experience_type}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "experience_type"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a widget",
    "parameterDescriptions": {
      "experience_type": "The experience type for the widget."
    }
  },
  "DeleteWidget": {
    "accessPath": [
      "deleteWidget"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/widgets/{experience_type}/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "experience_type",
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a widget",
    "parameterDescriptions": {
      "experience_type": "The experience type for the widget.",
      "uuid": "The UUID of the widget."
    }
  },
  "GetWidget": {
    "accessPath": [
      "getWidget"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/widgets/{experience_type}/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "experience_type",
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a widget",
    "parameterDescriptions": {
      "experience_type": "The experience type for the widget.",
      "uuid": "The UUID of the widget."
    }
  },
  "UpdateWidget": {
    "accessPath": [
      "updateWidget"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/widgets/{experience_type}/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "experience_type",
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a widget",
    "parameterDescriptions": {
      "experience_type": "The experience type for the widget.",
      "uuid": "The UUID of the widget."
    }
  },
  "CreateWorkflow": {
    "accessPath": [
      "createWorkflow"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/workflows",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Workflow"
  },
  "DeleteWorkflow": {
    "accessPath": [
      "deleteWorkflow"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/api/v2/workflows/{workflow_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "workflow_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an existing Workflow",
    "parameterDescriptions": {
      "workflow_id": "The ID of the workflow."
    }
  },
  "GetWorkflow": {
    "accessPath": [
      "getWorkflow"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/workflows/{workflow_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "workflow_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an existing Workflow",
    "parameterDescriptions": {
      "workflow_id": "The ID of the workflow."
    }
  },
  "UpdateWorkflow": {
    "accessPath": [
      "updateWorkflow"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/api/v2/workflows/{workflow_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "workflow_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an existing Workflow",
    "parameterDescriptions": {
      "workflow_id": "The ID of the workflow."
    }
  },
  "ListWorkflowInstances": {
    "accessPath": [
      "listWorkflowInstances"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/workflows/{workflow_id}/instances",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "workflow_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page[size]",
      "page[number]"
    ],
    "description": "List workflow instances",
    "parameterDescriptions": {
      "workflow_id": "The ID of the workflow.",
      "page[size]": "Size for a given page. The maximum allowed value is 100.",
      "page[number]": "Specific page number to return."
    }
  },
  "CreateWorkflowInstance": {
    "accessPath": [
      "createWorkflowInstance"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "meta"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v2/workflows/{workflow_id}/instances",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "workflow_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Execute a workflow",
    "parameterDescriptions": {
      "workflow_id": "The ID of the workflow."
    }
  },
  "GetWorkflowInstance": {
    "accessPath": [
      "getWorkflowInstance"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/api/v2/workflows/{workflow_id}/instances/{instance_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "workflow_id",
      "instance_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a workflow instance",
    "parameterDescriptions": {
      "workflow_id": "The ID of the workflow.",
      "instance_id": "The ID of the workflow instance."
    }
  },
  "CancelWorkflowInstance": {
    "accessPath": [
      "cancelWorkflowInstance"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/api/v2/workflows/{workflow_id}/instances/{instance_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "workflow_id",
      "instance_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel a workflow instance",
    "parameterDescriptions": {
      "workflow_id": "The ID of the workflow.",
      "instance_id": "The ID of the workflow instance."
    }
  }
} satisfies ToolRuntimeMetadataMap;
