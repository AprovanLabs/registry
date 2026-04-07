import type { ToolRuntimeMetadataMap } from "../../client.js";

export const toolMetadata = {
  "projects.messages.send": {
    "accessPath": [
      "projectsMessagesSend"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "message",
      "validateOnly"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/v1/{parent}/messages:send",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "parent"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "$.xgafv",
      "access_token",
      "alt",
      "callback",
      "fields",
      "key",
      "oauth_token",
      "prettyPrint",
      "quotaUser",
      "upload_protocol",
      "uploadType"
    ]
  }
} satisfies ToolRuntimeMetadataMap;
