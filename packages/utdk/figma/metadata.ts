import type { ToolRuntimeMetadataMap } from "../client.js";

export const toolMetadata = {
  "getFile": {
    "accessPath": [
      "getFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "version",
      "ids",
      "depth",
      "geometry",
      "plugin_data",
      "branch_data"
    ],
    "description": "Get file JSON",
    "parameterDescriptions": {
      "file_key": "File to export JSON from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.",
      "version": "A specific version ID to get. Omitting this will get the current version of the file.",
      "ids": "Comma separated list of nodes that you care about in the document. If specified, only a subset of the document will be returned corresponding to the nodes listed, their children, and everything between the root node and the listed nodes.\n\nNote: There may be other nodes included in the returned JSON that are outside the ancestor chains of the desired nodes. The response may also include dependencies of anything in the nodes' subtrees. For example, if a node subtree contains an instance of a local component that lives elsewhere in that file, that component and its ancestor chain will also be included.\n\nFor historical reasons, top-level canvas nodes are always returned, regardless of whether they are listed in the `ids` parameter. This quirk may be removed in a future version of the API.",
      "depth": "Positive integer representing how deep into the document tree to traverse. For example, setting this to 1 returns only Pages, setting it to 2 returns Pages and all top level objects on each page. Not setting this parameter returns all nodes.",
      "geometry": "Set to \"paths\" to export vector data.",
      "plugin_data": "A comma separated list of plugin IDs and/or the string \"shared\". Any data present in the document written by those plugins will be included in the result in the `pluginData` and `sharedPluginData` properties.",
      "branch_data": "Returns branch metadata for the requested file. If the file is a branch, the main file's key will be included in the returned response. If the file has branches, their metadata will be included in the returned response. Default: false."
    }
  },
  "getFileNodes": {
    "accessPath": [
      "getFileNodes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/nodes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids",
      "version",
      "depth",
      "geometry",
      "plugin_data"
    ],
    "description": "Get file JSON for specific nodes",
    "parameterDescriptions": {
      "file_key": "File to export JSON from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.",
      "ids": "A comma separated list of node IDs to retrieve and convert.",
      "version": "A specific version ID to get. Omitting this will get the current version of the file.",
      "depth": "Positive integer representing how deep into the node tree to traverse. For example, setting this to 1 will return only the children directly underneath the desired nodes. Not setting this parameter returns all nodes.\n\nNote: this parameter behaves differently from the same parameter in the `GET /v1/files/:key` endpoint. In this endpoint, the depth will be counted starting from the desired node rather than the document root node.",
      "geometry": "Set to \"paths\" to export vector data.",
      "plugin_data": "A comma separated list of plugin IDs and/or the string \"shared\". Any data present in the document written by those plugins will be included in the result in the `pluginData` and `sharedPluginData` properties."
    }
  },
  "getImages": {
    "accessPath": [
      "getImages"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/images/{file_key}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids",
      "version",
      "scale",
      "format",
      "svg_outline_text",
      "svg_include_id",
      "svg_include_node_id",
      "svg_simplify_stroke",
      "contents_only",
      "use_absolute_bounds"
    ],
    "description": "Render images of file nodes",
    "parameterDescriptions": {
      "file_key": "File to export images from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.",
      "ids": "A comma separated list of node IDs to render.",
      "version": "A specific version ID to get. Omitting this will get the current version of the file.",
      "scale": "A number between 0.01 and 4, the image scaling factor.",
      "format": "A string enum for the image output format.",
      "svg_outline_text": "Whether text elements are rendered as outlines (vector paths) or as `<text>` elements in SVGs.\n\nRendering text elements as outlines guarantees that the text looks exactly the same in the SVG as it does in the browser/inside Figma.\n\nExporting as `<text>` allows text to be selectable inside SVGs and generally makes the SVG easier to read. However, this relies on the browser's rendering engine which can vary between browsers and/or operating systems. As such, visual accuracy is not guaranteed as the result could look different than in Figma.",
      "svg_include_id": "Whether to include id attributes for all SVG elements. Adds the layer name to the `id` attribute of an svg element.",
      "svg_include_node_id": "Whether to include node id attributes for all SVG elements. Adds the node id to a `data-node-id` attribute of an svg element.",
      "svg_simplify_stroke": "Whether to simplify inside/outside strokes and use stroke attribute if possible instead of `<mask>`.",
      "contents_only": "Whether content that overlaps the node should be excluded from rendering. Passing false (i.e., rendering overlaps) may increase processing time, since more of the document must be included in rendering.",
      "use_absolute_bounds": "Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty. Use this to export text nodes without cropping."
    }
  },
  "getImageFills": {
    "accessPath": [
      "getImageFills"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/images",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get image fills",
    "parameterDescriptions": {
      "file_key": "File to get image URLs from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."
    }
  },
  "getFileMeta": {
    "accessPath": [
      "getFileMeta"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/meta",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get file metadata",
    "parameterDescriptions": {
      "file_key": "File to get metadata for. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."
    }
  },
  "getTeamProjects": {
    "accessPath": [
      "getTeamProjects"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/teams/{team_id}/projects",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get projects in a team",
    "parameterDescriptions": {
      "team_id": "ID of the team to list projects from"
    }
  },
  "getProjectFiles": {
    "accessPath": [
      "getProjectFiles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/projects/{project_id}/files",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "branch_data"
    ],
    "description": "Get files in a project",
    "parameterDescriptions": {
      "project_id": "ID of the project to list files from",
      "branch_data": "Returns branch metadata in the response for each main file with a branch inside the project."
    }
  },
  "getFileVersions": {
    "accessPath": [
      "getFileVersions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/versions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page_size",
      "before",
      "after"
    ],
    "description": "Get versions of a file",
    "parameterDescriptions": {
      "file_key": "File to get version history from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.",
      "page_size": "The number of items returned in a page of the response. If not included, `page_size` is `30`.",
      "before": "A version ID for one of the versions in the history. Gets versions before this ID. Used for paginating. If the response is not paginated, this link returns the same data in the current response.",
      "after": "A version ID for one of the versions in the history. Gets versions after this ID. Used for paginating. If the response is not paginated, this property is not included."
    }
  },
  "getComments": {
    "accessPath": [
      "getComments"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "as_md"
    ],
    "description": "Get comments in a file",
    "parameterDescriptions": {
      "file_key": "File to get comments from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.",
      "as_md": "If enabled, will return comments as their markdown equivalents when applicable."
    }
  },
  "postComment": {
    "accessPath": [
      "postComment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "message",
      "comment_id",
      "client_meta"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/files/{file_key}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add a comment to a file",
    "parameterDescriptions": {
      "file_key": "File to add comments in. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."
    }
  },
  "deleteComment": {
    "accessPath": [
      "deleteComment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/files/{file_key}/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a comment",
    "parameterDescriptions": {
      "file_key": "File to delete comment from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.",
      "comment_id": "Comment id of comment to delete"
    }
  },
  "getCommentReactions": {
    "accessPath": [
      "getCommentReactions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/comments/{comment_id}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "cursor"
    ],
    "description": "Get reactions for a comment",
    "parameterDescriptions": {
      "file_key": "File to get comment containing reactions from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.",
      "comment_id": "ID of comment to get reactions from.",
      "cursor": "Cursor for pagination, retrieved from the response of the previous call."
    }
  },
  "postCommentReaction": {
    "accessPath": [
      "postCommentReaction"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "emoji"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/files/{file_key}/comments/{comment_id}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add a reaction to a comment",
    "parameterDescriptions": {
      "file_key": "File to post comment reactions to. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.",
      "comment_id": "ID of comment to react to."
    }
  },
  "deleteCommentReaction": {
    "accessPath": [
      "deleteCommentReaction"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/files/{file_key}/comments/{comment_id}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "emoji"
    ],
    "description": "Delete a reaction",
    "parameterDescriptions": {
      "file_key": "File to delete comment reaction from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.",
      "comment_id": "ID of comment to delete reaction from."
    }
  },
  "getMe": {
    "accessPath": [
      "getMe"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get current user"
  },
  "getTeamComponents": {
    "accessPath": [
      "getTeamComponents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/teams/{team_id}/components",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page_size",
      "after",
      "before"
    ],
    "description": "Get team components",
    "parameterDescriptions": {
      "team_id": "Id of the team to list components from.",
      "page_size": "Number of items to return in a paged list of results. Defaults to 30. Maximum of 1000.",
      "after": "Cursor indicating which id after which to start retrieving components for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids.",
      "before": "Cursor indicating which id before which to start retrieving components for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids."
    }
  },
  "getFileComponents": {
    "accessPath": [
      "getFileComponents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/components",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get file components",
    "parameterDescriptions": {
      "file_key": "File to list components from. This must be a main file key, not a branch key, as it is not possible to publish from branches."
    }
  },
  "getComponent": {
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
    "routeTemplate": "/v1/components/{key}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get component",
    "parameterDescriptions": {
      "key": "The unique identifier of the component."
    }
  },
  "getTeamComponentSets": {
    "accessPath": [
      "getTeamComponentSets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/teams/{team_id}/component_sets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page_size",
      "after",
      "before"
    ],
    "description": "Get team component sets",
    "parameterDescriptions": {
      "team_id": "Id of the team to list component sets from.",
      "page_size": "Number of items to return in a paged list of results. Defaults to 30.",
      "after": "Cursor indicating which id after which to start retrieving component sets for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids.",
      "before": "Cursor indicating which id before which to start retrieving component sets for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids."
    }
  },
  "getFileComponentSets": {
    "accessPath": [
      "getFileComponentSets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/component_sets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get file component sets",
    "parameterDescriptions": {
      "file_key": "File to list component sets from. This must be a main file key, not a branch key, as it is not possible to publish from branches."
    }
  },
  "getComponentSet": {
    "accessPath": [
      "getComponentSet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/component_sets/{key}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get component set",
    "parameterDescriptions": {
      "key": "The unique identifier of the component set."
    }
  },
  "getTeamStyles": {
    "accessPath": [
      "getTeamStyles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/teams/{team_id}/styles",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page_size",
      "after",
      "before"
    ],
    "description": "Get team styles",
    "parameterDescriptions": {
      "team_id": "Id of the team to list styles from.",
      "page_size": "Number of items to return in a paged list of results. Defaults to 30.",
      "after": "Cursor indicating which id after which to start retrieving styles for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids.",
      "before": "Cursor indicating which id before which to start retrieving styles for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids."
    }
  },
  "getFileStyles": {
    "accessPath": [
      "getFileStyles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/styles",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get file styles",
    "parameterDescriptions": {
      "file_key": "File to list styles from. This must be a main file key, not a branch key, as it is not possible to publish from branches."
    }
  },
  "getStyle": {
    "accessPath": [
      "getStyle"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/styles/{key}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get style",
    "parameterDescriptions": {
      "key": "The unique identifier of the style."
    }
  },
  "getWebhooks": {
    "accessPath": [
      "getWebhooks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/webhooks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "context",
      "context_id",
      "plan_api_id",
      "cursor"
    ],
    "description": "Get webhooks by context or plan",
    "parameterDescriptions": {
      "context": "Context to create the resource on. Should be \"team\", \"project\", or \"file\".",
      "context_id": "The id of the context that you want to get attached webhooks for. If you're using context_id, you cannot use plan_api_id.",
      "plan_api_id": "The id of your plan. Use this to get all webhooks for all contexts you have access to. If you're using plan_api_id, you cannot use context or context_id. When you use plan_api_id, the response is paginated.",
      "cursor": "If you're using plan_api_id, this is the cursor to use for pagination. If you're using context or context_id, this parameter is ignored. Provide the next_page or prev_page value from the previous response to get the next or previous page of results."
    }
  },
  "postWebhook": {
    "accessPath": [
      "postWebhook"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "event_type",
      "team_id",
      "context",
      "context_id",
      "endpoint",
      "passcode",
      "status",
      "description"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/webhooks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a webhook"
  },
  "getWebhook": {
    "accessPath": [
      "getWebhook"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/webhooks/{webhook_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "webhook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a webhook",
    "parameterDescriptions": {
      "webhook_id": "ID of webhook to get"
    }
  },
  "putWebhook": {
    "accessPath": [
      "putWebhook"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "event_type",
      "endpoint",
      "passcode",
      "status",
      "description"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/webhooks/{webhook_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "webhook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a webhook",
    "parameterDescriptions": {
      "webhook_id": "ID of webhook to update"
    }
  },
  "deleteWebhook": {
    "accessPath": [
      "deleteWebhook"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/webhooks/{webhook_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "webhook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a webhook",
    "parameterDescriptions": {
      "webhook_id": "ID of webhook to delete"
    }
  },
  "getTeamWebhooks": {
    "accessPath": [
      "getTeamWebhooks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/teams/{team_id}/webhooks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "[Deprecated] Get team webhooks",
    "parameterDescriptions": {
      "team_id": "ID of team to get webhooks for"
    }
  },
  "getWebhookRequests": {
    "accessPath": [
      "getWebhookRequests"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/webhooks/{webhook_id}/requests",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "webhook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get webhook requests",
    "parameterDescriptions": {
      "webhook_id": "The id of the webhook subscription you want to see events from"
    }
  },
  "getActivityLogs": {
    "accessPath": [
      "getActivityLogs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/activity_logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "events",
      "start_time",
      "end_time",
      "limit",
      "order"
    ],
    "description": "Get activity logs",
    "parameterDescriptions": {
      "events": "Event type(s) to include in the response. Can have multiple values separated by comma. All events are returned by default.",
      "start_time": "Unix timestamp of the least recent event to include. This param defaults to one year ago if unspecified.",
      "end_time": "Unix timestamp of the most recent event to include. This param defaults to the current timestamp if unspecified.",
      "limit": "Maximum number of events to return. This param defaults to 1000 if unspecified.",
      "order": "Event order by timestamp. This param can be either \"asc\" (default) or \"desc\"."
    }
  },
  "getPayments": {
    "accessPath": [
      "getPayments"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/payments",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "plugin_payment_token",
      "user_id",
      "community_file_id",
      "plugin_id",
      "widget_id"
    ],
    "description": "Get payments",
    "parameterDescriptions": {
      "plugin_payment_token": "Short-lived token returned from \"getPluginPaymentTokenAsync\" in the plugin payments API and used to authenticate to this endpoint. Read more about generating this token through \"Calling the Payments REST API from a plugin or widget\" below.",
      "user_id": "The ID of the user to query payment information about. You can get the user ID by having the user OAuth2 to the Figma REST API.",
      "community_file_id": "The ID of the Community file to query a user's payment information on. You can get the Community file ID from the file's Community page (look for the number after \"file/\" in the URL). Provide exactly one of \"community_file_id\", \"plugin_id\", or \"widget_id\".",
      "plugin_id": "The ID of the plugin to query a user's payment information on. You can get the plugin ID from the plugin's manifest, or from the plugin's Community page (look for the number after \"plugin/\" in the URL). Provide exactly one of \"community_file_id\", \"plugin_id\", or \"widget_id\".",
      "widget_id": "The ID of the widget to query a user's payment information on. You can get the widget ID from the widget's manifest, or from the widget's Community page (look for the number after \"widget/\" in the URL). Provide exactly one of \"community_file_id\", \"plugin_id\", or \"widget_id\"."
    }
  },
  "getLocalVariables": {
    "accessPath": [
      "getLocalVariables"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/variables/local",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get local variables",
    "parameterDescriptions": {
      "file_key": "File to get variables from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."
    }
  },
  "getPublishedVariables": {
    "accessPath": [
      "getPublishedVariables"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/variables/published",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get published variables",
    "parameterDescriptions": {
      "file_key": "File to get variables from. This must be a main file key, not a branch key, as it is not possible to publish from branches."
    }
  },
  "postVariables": {
    "accessPath": [
      "postVariables"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "variableCollections",
      "variableModes",
      "variables",
      "variableModeValues"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/files/{file_key}/variables",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create/modify/delete variables",
    "parameterDescriptions": {
      "file_key": "File to modify variables in. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."
    }
  },
  "getDevResources": {
    "accessPath": [
      "getDevResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_key}/dev_resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "node_ids"
    ],
    "description": "Get dev resources",
    "parameterDescriptions": {
      "file_key": "The file to get the dev resources from. This must be a main file key, not a branch key.",
      "node_ids": "Comma separated list of nodes that you care about in the document. If specified, only dev resources attached to these nodes will be returned. If not specified, all dev resources in the file will be returned."
    }
  },
  "postDevResources": {
    "accessPath": [
      "postDevResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "dev_resources"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/dev_resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create dev resources"
  },
  "putDevResources": {
    "accessPath": [
      "putDevResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "dev_resources"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/dev_resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update dev resources"
  },
  "deleteDevResource": {
    "accessPath": [
      "deleteDevResource"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/files/{file_key}/dev_resources/{dev_resource_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key",
      "dev_resource_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete dev resource",
    "parameterDescriptions": {
      "file_key": "The file to delete the dev resource from. This must be a main file key, not a branch key.",
      "dev_resource_id": "The id of the dev resource to delete."
    }
  },
  "getLibraryAnalyticsComponentActions": {
    "accessPath": [
      "getLibraryAnalyticsComponentActions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/analytics/libraries/{file_key}/component/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "cursor",
      "group_by",
      "start_date",
      "end_date"
    ],
    "description": "Get library analytics component action data.",
    "parameterDescriptions": {
      "file_key": "File key of the library to fetch analytics data for.",
      "cursor": "Cursor indicating what page of data to fetch. Obtained from prior API call.",
      "group_by": "A dimension to group returned analytics data by.",
      "start_date": "ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior.",
      "end_date": "ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week."
    }
  },
  "getLibraryAnalyticsComponentUsages": {
    "accessPath": [
      "getLibraryAnalyticsComponentUsages"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/analytics/libraries/{file_key}/component/usages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "cursor",
      "group_by"
    ],
    "description": "Get library analytics component usage data.",
    "parameterDescriptions": {
      "file_key": "File key of the library to fetch analytics data for.",
      "cursor": "Cursor indicating what page of data to fetch. Obtained from prior API call.",
      "group_by": "A dimension to group returned analytics data by."
    }
  },
  "getLibraryAnalyticsStyleActions": {
    "accessPath": [
      "getLibraryAnalyticsStyleActions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/analytics/libraries/{file_key}/style/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "cursor",
      "group_by",
      "start_date",
      "end_date"
    ],
    "description": "Get library analytics style action data.",
    "parameterDescriptions": {
      "file_key": "File key of the library to fetch analytics data for.",
      "cursor": "Cursor indicating what page of data to fetch. Obtained from prior API call.",
      "group_by": "A dimension to group returned analytics data by.",
      "start_date": "ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior.",
      "end_date": "ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week."
    }
  },
  "getLibraryAnalyticsStyleUsages": {
    "accessPath": [
      "getLibraryAnalyticsStyleUsages"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/analytics/libraries/{file_key}/style/usages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "cursor",
      "group_by"
    ],
    "description": "Get library analytics style usage data.",
    "parameterDescriptions": {
      "file_key": "File key of the library to fetch analytics data for.",
      "cursor": "Cursor indicating what page of data to fetch. Obtained from prior API call.",
      "group_by": "A dimension to group returned analytics data by."
    }
  },
  "getLibraryAnalyticsVariableActions": {
    "accessPath": [
      "getLibraryAnalyticsVariableActions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/analytics/libraries/{file_key}/variable/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "cursor",
      "group_by",
      "start_date",
      "end_date"
    ],
    "description": "Get library analytics variable action data.",
    "parameterDescriptions": {
      "file_key": "File key of the library to fetch analytics data for.",
      "cursor": "Cursor indicating what page of data to fetch. Obtained from prior API call.",
      "group_by": "A dimension to group returned analytics data by.",
      "start_date": "ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior.",
      "end_date": "ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week."
    }
  },
  "getLibraryAnalyticsVariableUsages": {
    "accessPath": [
      "getLibraryAnalyticsVariableUsages"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/analytics/libraries/{file_key}/variable/usages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "cursor",
      "group_by"
    ],
    "description": "Get library analytics variable usage data.",
    "parameterDescriptions": {
      "file_key": "File key of the library to fetch analytics data for.",
      "cursor": "Cursor indicating what page of data to fetch. Obtained from prior API call.",
      "group_by": "A dimension to group returned analytics data by."
    }
  },
  "getOEmbed": {
    "accessPath": [
      "getOEmbed"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/oembed",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "url",
      "maxwidth",
      "maxheight"
    ],
    "description": "Get oEmbed data",
    "parameterDescriptions": {
      "url": "The URL of the Figma file or published Make site to retrieve oEmbed data for.",
      "maxwidth": "Maximum width of the embed in pixels. Defaults to 800. The response width will be adjusted to maintain a 16:9 aspect ratio with maxheight.",
      "maxheight": "Maximum height of the embed in pixels. Defaults to 450. The response height will be adjusted to maintain a 16:9 aspect ratio with maxwidth."
    }
  }
} satisfies ToolRuntimeMetadataMap;
