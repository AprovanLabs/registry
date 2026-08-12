import type { ToolRuntimeMetadataMap } from "../client.js";

export const toolMetadata = {
  "listNetworkEntities": {
    "accessPath": [
      "listNetworkEntities"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/_api/ws/proxy/v1/api/networkentity",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "entityType",
      "limit",
      "offset",
      "sort",
      "categoryId"
    ],
    "description": "Browse public entities on the API network",
    "parameterDescriptions": {
      "entityType": "Type of entity to browse",
      "limit": "Number of results per page",
      "offset": "Pagination offset",
      "sort": "Sort order for results",
      "categoryId": "Filter by category ID (numeric, from categories endpoint)"
    }
  },
  "getNetworkEntityCounts": {
    "accessPath": [
      "getNetworkEntityCounts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/_api/ws/proxy/v1/api/networkentity/count",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "flattenAPIVersions"
    ],
    "description": "Get total counts of entities on the network"
  },
  "searchAll": {
    "accessPath": [
      "searchAll"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "queryText",
      "size",
      "from",
      "domain",
      "queryIndices",
      "mergeEntities",
      "nested",
      "nonNestedRequests",
      "filter"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/_api/ws/proxy/search-all",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Full-text search across the public API network"
  },
  "listCategories": {
    "accessPath": [
      "listCategories"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/_api/ws/proxy/v2/api/category",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sort"
    ],
    "description": "List all API categories",
    "parameterDescriptions": {
      "sort": "Sort order"
    }
  },
  "getCategory": {
    "accessPath": [
      "getCategory"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/_api/ws/proxy/v2/api/category/{slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get details for a specific category",
    "parameterDescriptions": {
      "slug": "Category URL slug (e.g., artificial-intelligence, devops)"
    }
  },
  "listTeams": {
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
    "routeTemplate": "/_api/ws/proxy/v1/api/team",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "sort"
    ],
    "description": "List publisher teams on the API network"
  }
} satisfies ToolRuntimeMetadataMap;
