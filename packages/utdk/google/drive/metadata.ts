import type { ToolRuntimeMetadataMap } from "../../client.js";

export const toolMetadata = {
  "about.get": {
    "accessPath": [
      "aboutGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/about",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
  },
  "apps.list": {
    "accessPath": [
      "appsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "appFilterExtensions",
      "appFilterMimeTypes",
      "languageCode"
    ]
  },
  "apps.get": {
    "accessPath": [
      "appsGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/apps/{appId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "appId"
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
  },
  "changes.list": {
    "accessPath": [
      "changesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/changes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "pageToken",
      "driveId",
      "includeCorpusRemovals",
      "includeItemsFromAllDrives",
      "includeLabels",
      "includePermissionsForView",
      "includeRemoved",
      "includeTeamDriveItems",
      "pageSize",
      "restrictToMyDrive",
      "spaces",
      "supportsAllDrives",
      "supportsTeamDrives",
      "teamDriveId"
    ]
  },
  "changes.getStartPageToken": {
    "accessPath": [
      "changesGetStartPageToken"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/changes/startPageToken",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "driveId",
      "supportsAllDrives",
      "supportsTeamDrives",
      "teamDriveId"
    ]
  },
  "changes.watch": {
    "accessPath": [
      "changesWatch"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "address",
      "expiration",
      "id",
      "kind",
      "params",
      "payload",
      "resourceId",
      "resourceUri",
      "token",
      "type"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/changes/watch",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "pageToken",
      "driveId",
      "includeCorpusRemovals",
      "includeItemsFromAllDrives",
      "includeLabels",
      "includePermissionsForView",
      "includeRemoved",
      "includeTeamDriveItems",
      "pageSize",
      "restrictToMyDrive",
      "spaces",
      "supportsAllDrives",
      "supportsTeamDrives",
      "teamDriveId"
    ]
  },
  "channels.stop": {
    "accessPath": [
      "channelsStop"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "address",
      "expiration",
      "id",
      "kind",
      "params",
      "payload",
      "resourceId",
      "resourceUri",
      "token",
      "type"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/channels/stop",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
  },
  "drives.list": {
    "accessPath": [
      "drivesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/drives",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "pageSize",
      "pageToken",
      "q",
      "useDomainAdminAccess"
    ]
  },
  "drives.create": {
    "accessPath": [
      "drivesCreate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "backgroundImageFile",
      "backgroundImageLink",
      "capabilities",
      "colorRgb",
      "createdTime",
      "hidden",
      "id",
      "kind",
      "name",
      "orgUnitId",
      "restrictions",
      "themeId"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/drives",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "requestId"
    ]
  },
  "drives.delete": {
    "accessPath": [
      "drivesDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/drive/v3/drives/{driveId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "driveId"
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
      "uploadType",
      "allowItemDeletion",
      "useDomainAdminAccess"
    ]
  },
  "drives.get": {
    "accessPath": [
      "drivesGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/drives/{driveId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "driveId"
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
      "uploadType",
      "useDomainAdminAccess"
    ]
  },
  "drives.update": {
    "accessPath": [
      "drivesUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "backgroundImageFile",
      "backgroundImageLink",
      "capabilities",
      "colorRgb",
      "createdTime",
      "hidden",
      "id",
      "kind",
      "name",
      "orgUnitId",
      "restrictions",
      "themeId"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/drive/v3/drives/{driveId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "driveId"
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
      "uploadType",
      "useDomainAdminAccess"
    ]
  },
  "drives.hide": {
    "accessPath": [
      "drivesHide"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/drives/{driveId}/hide",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "driveId"
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
  },
  "drives.unhide": {
    "accessPath": [
      "drivesUnhide"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/drives/{driveId}/unhide",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "driveId"
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
  },
  "files.list": {
    "accessPath": [
      "filesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "corpora",
      "corpus",
      "driveId",
      "includeItemsFromAllDrives",
      "includeLabels",
      "includePermissionsForView",
      "includeTeamDriveItems",
      "orderBy",
      "pageSize",
      "pageToken",
      "q",
      "spaces",
      "supportsAllDrives",
      "supportsTeamDrives",
      "teamDriveId"
    ]
  },
  "files.create": {
    "accessPath": [
      "filesCreate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "appProperties",
      "capabilities",
      "contentHints",
      "contentRestrictions",
      "copyRequiresWriterPermission",
      "createdTime",
      "description",
      "driveId",
      "explicitlyTrashed",
      "exportLinks",
      "fileExtension",
      "folderColorRgb",
      "fullFileExtension",
      "hasAugmentedPermissions",
      "hasThumbnail",
      "headRevisionId",
      "iconLink",
      "id",
      "imageMediaMetadata",
      "isAppAuthorized",
      "kind",
      "labelInfo",
      "lastModifyingUser",
      "linkShareMetadata",
      "md5Checksum",
      "mimeType",
      "modifiedByMe",
      "modifiedByMeTime",
      "modifiedTime",
      "name",
      "originalFilename",
      "ownedByMe",
      "owners",
      "parents",
      "permissionIds",
      "permissions",
      "properties",
      "quotaBytesUsed",
      "resourceKey",
      "sha1Checksum",
      "sha256Checksum",
      "shared",
      "sharedWithMeTime",
      "sharingUser",
      "shortcutDetails",
      "size",
      "spaces",
      "starred",
      "teamDriveId",
      "thumbnailLink",
      "thumbnailVersion",
      "trashed",
      "trashedTime",
      "trashingUser",
      "version",
      "videoMediaMetadata",
      "viewedByMe",
      "viewedByMeTime",
      "viewersCanCopyContent",
      "webContentLink",
      "webViewLink",
      "writersCanShare"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/files",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "enforceSingleParent",
      "ignoreDefaultVisibility",
      "includeLabels",
      "includePermissionsForView",
      "keepRevisionForever",
      "ocrLanguage",
      "supportsAllDrives",
      "supportsTeamDrives",
      "useContentAsIndexableText"
    ]
  },
  "files.generateIds": {
    "accessPath": [
      "filesGenerateIds"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/generateIds",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "count",
      "space",
      "type"
    ]
  },
  "files.emptyTrash": {
    "accessPath": [
      "filesEmptyTrash"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/drive/v3/files/trash",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "driveId",
      "enforceSingleParent"
    ]
  },
  "files.delete": {
    "accessPath": [
      "filesDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/drive/v3/files/{fileId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
      "uploadType",
      "enforceSingleParent",
      "supportsAllDrives",
      "supportsTeamDrives"
    ]
  },
  "files.get": {
    "accessPath": [
      "filesGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/{fileId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
      "uploadType",
      "acknowledgeAbuse",
      "includeLabels",
      "includePermissionsForView",
      "supportsAllDrives",
      "supportsTeamDrives"
    ]
  },
  "files.update": {
    "accessPath": [
      "filesUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "appProperties",
      "capabilities",
      "contentHints",
      "contentRestrictions",
      "copyRequiresWriterPermission",
      "createdTime",
      "description",
      "driveId",
      "explicitlyTrashed",
      "exportLinks",
      "fileExtension",
      "folderColorRgb",
      "fullFileExtension",
      "hasAugmentedPermissions",
      "hasThumbnail",
      "headRevisionId",
      "iconLink",
      "id",
      "imageMediaMetadata",
      "isAppAuthorized",
      "kind",
      "labelInfo",
      "lastModifyingUser",
      "linkShareMetadata",
      "md5Checksum",
      "mimeType",
      "modifiedByMe",
      "modifiedByMeTime",
      "modifiedTime",
      "name",
      "originalFilename",
      "ownedByMe",
      "owners",
      "parents",
      "permissionIds",
      "permissions",
      "properties",
      "quotaBytesUsed",
      "resourceKey",
      "sha1Checksum",
      "sha256Checksum",
      "shared",
      "sharedWithMeTime",
      "sharingUser",
      "shortcutDetails",
      "size",
      "spaces",
      "starred",
      "teamDriveId",
      "thumbnailLink",
      "thumbnailVersion",
      "trashed",
      "trashedTime",
      "trashingUser",
      "version",
      "videoMediaMetadata",
      "viewedByMe",
      "viewedByMeTime",
      "viewersCanCopyContent",
      "webContentLink",
      "webViewLink",
      "writersCanShare"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/drive/v3/files/{fileId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
      "uploadType",
      "addParents",
      "enforceSingleParent",
      "includeLabels",
      "includePermissionsForView",
      "keepRevisionForever",
      "ocrLanguage",
      "removeParents",
      "supportsAllDrives",
      "supportsTeamDrives",
      "useContentAsIndexableText"
    ]
  },
  "comments.list": {
    "accessPath": [
      "commentsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/{fileId}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
      "uploadType",
      "includeDeleted",
      "pageSize",
      "pageToken",
      "startModifiedTime"
    ]
  },
  "comments.create": {
    "accessPath": [
      "commentsCreate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "anchor",
      "author",
      "content",
      "createdTime",
      "deleted",
      "htmlContent",
      "id",
      "kind",
      "modifiedTime",
      "quotedFileContent",
      "replies",
      "resolved"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/files/{fileId}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
  },
  "comments.delete": {
    "accessPath": [
      "commentsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/drive/v3/files/{fileId}/comments/{commentId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "commentId"
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
  },
  "comments.get": {
    "accessPath": [
      "commentsGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/{fileId}/comments/{commentId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "commentId"
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
      "uploadType",
      "includeDeleted"
    ]
  },
  "comments.update": {
    "accessPath": [
      "commentsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "anchor",
      "author",
      "content",
      "createdTime",
      "deleted",
      "htmlContent",
      "id",
      "kind",
      "modifiedTime",
      "quotedFileContent",
      "replies",
      "resolved"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/drive/v3/files/{fileId}/comments/{commentId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "commentId"
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
  },
  "replies.list": {
    "accessPath": [
      "repliesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/{fileId}/comments/{commentId}/replies",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "commentId"
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
      "uploadType",
      "includeDeleted",
      "pageSize",
      "pageToken"
    ]
  },
  "replies.create": {
    "accessPath": [
      "repliesCreate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "action",
      "author",
      "content",
      "createdTime",
      "deleted",
      "htmlContent",
      "id",
      "kind",
      "modifiedTime"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/files/{fileId}/comments/{commentId}/replies",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "commentId"
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
  },
  "replies.delete": {
    "accessPath": [
      "repliesDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "commentId",
      "replyId"
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
  },
  "replies.get": {
    "accessPath": [
      "repliesGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "commentId",
      "replyId"
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
      "uploadType",
      "includeDeleted"
    ]
  },
  "replies.update": {
    "accessPath": [
      "repliesUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "action",
      "author",
      "content",
      "createdTime",
      "deleted",
      "htmlContent",
      "id",
      "kind",
      "modifiedTime"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "commentId",
      "replyId"
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
  },
  "files.copy": {
    "accessPath": [
      "filesCopy"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "appProperties",
      "capabilities",
      "contentHints",
      "contentRestrictions",
      "copyRequiresWriterPermission",
      "createdTime",
      "description",
      "driveId",
      "explicitlyTrashed",
      "exportLinks",
      "fileExtension",
      "folderColorRgb",
      "fullFileExtension",
      "hasAugmentedPermissions",
      "hasThumbnail",
      "headRevisionId",
      "iconLink",
      "id",
      "imageMediaMetadata",
      "isAppAuthorized",
      "kind",
      "labelInfo",
      "lastModifyingUser",
      "linkShareMetadata",
      "md5Checksum",
      "mimeType",
      "modifiedByMe",
      "modifiedByMeTime",
      "modifiedTime",
      "name",
      "originalFilename",
      "ownedByMe",
      "owners",
      "parents",
      "permissionIds",
      "permissions",
      "properties",
      "quotaBytesUsed",
      "resourceKey",
      "sha1Checksum",
      "sha256Checksum",
      "shared",
      "sharedWithMeTime",
      "sharingUser",
      "shortcutDetails",
      "size",
      "spaces",
      "starred",
      "teamDriveId",
      "thumbnailLink",
      "thumbnailVersion",
      "trashed",
      "trashedTime",
      "trashingUser",
      "version",
      "videoMediaMetadata",
      "viewedByMe",
      "viewedByMeTime",
      "viewersCanCopyContent",
      "webContentLink",
      "webViewLink",
      "writersCanShare"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/files/{fileId}/copy",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
      "uploadType",
      "enforceSingleParent",
      "ignoreDefaultVisibility",
      "includeLabels",
      "includePermissionsForView",
      "keepRevisionForever",
      "ocrLanguage",
      "supportsAllDrives",
      "supportsTeamDrives"
    ]
  },
  "files.export": {
    "accessPath": [
      "filesExport"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/{fileId}/export",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
      "uploadType",
      "mimeType"
    ]
  },
  "files.listLabels": {
    "accessPath": [
      "filesListLabels"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/{fileId}/listLabels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
      "uploadType",
      "maxResults",
      "pageToken"
    ]
  },
  "files.modifyLabels": {
    "accessPath": [
      "filesModifyLabels"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "kind",
      "labelModifications"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/files/{fileId}/modifyLabels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
  },
  "permissions.list": {
    "accessPath": [
      "permissionsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/{fileId}/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
      "uploadType",
      "includePermissionsForView",
      "pageSize",
      "pageToken",
      "supportsAllDrives",
      "supportsTeamDrives",
      "useDomainAdminAccess"
    ]
  },
  "permissions.create": {
    "accessPath": [
      "permissionsCreate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "allowFileDiscovery",
      "deleted",
      "displayName",
      "domain",
      "emailAddress",
      "expirationTime",
      "id",
      "kind",
      "pendingOwner",
      "permissionDetails",
      "photoLink",
      "role",
      "teamDrivePermissionDetails",
      "type",
      "view"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/files/{fileId}/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
      "uploadType",
      "emailMessage",
      "enforceSingleParent",
      "moveToNewOwnersRoot",
      "sendNotificationEmail",
      "supportsAllDrives",
      "supportsTeamDrives",
      "transferOwnership",
      "useDomainAdminAccess"
    ]
  },
  "permissions.delete": {
    "accessPath": [
      "permissionsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/drive/v3/files/{fileId}/permissions/{permissionId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "permissionId"
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
      "uploadType",
      "supportsAllDrives",
      "supportsTeamDrives",
      "useDomainAdminAccess"
    ]
  },
  "permissions.get": {
    "accessPath": [
      "permissionsGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/{fileId}/permissions/{permissionId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "permissionId"
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
      "uploadType",
      "supportsAllDrives",
      "supportsTeamDrives",
      "useDomainAdminAccess"
    ]
  },
  "permissions.update": {
    "accessPath": [
      "permissionsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "allowFileDiscovery",
      "deleted",
      "displayName",
      "domain",
      "emailAddress",
      "expirationTime",
      "id",
      "kind",
      "pendingOwner",
      "permissionDetails",
      "photoLink",
      "role",
      "teamDrivePermissionDetails",
      "type",
      "view"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/drive/v3/files/{fileId}/permissions/{permissionId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "permissionId"
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
      "uploadType",
      "removeExpiration",
      "supportsAllDrives",
      "supportsTeamDrives",
      "transferOwnership",
      "useDomainAdminAccess"
    ]
  },
  "revisions.list": {
    "accessPath": [
      "revisionsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/{fileId}/revisions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
      "uploadType",
      "pageSize",
      "pageToken"
    ]
  },
  "revisions.delete": {
    "accessPath": [
      "revisionsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/drive/v3/files/{fileId}/revisions/{revisionId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "revisionId"
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
  },
  "revisions.get": {
    "accessPath": [
      "revisionsGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/files/{fileId}/revisions/{revisionId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "revisionId"
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
      "uploadType",
      "acknowledgeAbuse"
    ]
  },
  "revisions.update": {
    "accessPath": [
      "revisionsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "exportLinks",
      "id",
      "keepForever",
      "kind",
      "lastModifyingUser",
      "md5Checksum",
      "mimeType",
      "modifiedTime",
      "originalFilename",
      "publishAuto",
      "published",
      "publishedLink",
      "publishedOutsideDomain",
      "size"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/drive/v3/files/{fileId}/revisions/{revisionId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId",
      "revisionId"
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
  },
  "files.watch": {
    "accessPath": [
      "filesWatch"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "address",
      "expiration",
      "id",
      "kind",
      "params",
      "payload",
      "resourceId",
      "resourceUri",
      "token",
      "type"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/files/{fileId}/watch",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fileId"
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
      "uploadType",
      "acknowledgeAbuse",
      "includeLabels",
      "includePermissionsForView",
      "supportsAllDrives",
      "supportsTeamDrives"
    ]
  },
  "teamdrives.list": {
    "accessPath": [
      "teamdrivesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/teamdrives",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "pageSize",
      "pageToken",
      "q",
      "useDomainAdminAccess"
    ]
  },
  "teamdrives.create": {
    "accessPath": [
      "teamdrivesCreate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "backgroundImageFile",
      "backgroundImageLink",
      "capabilities",
      "colorRgb",
      "createdTime",
      "id",
      "kind",
      "name",
      "orgUnitId",
      "restrictions",
      "themeId"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/drive/v3/teamdrives",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
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
      "uploadType",
      "requestId"
    ]
  },
  "teamdrives.delete": {
    "accessPath": [
      "teamdrivesDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/drive/v3/teamdrives/{teamDriveId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "teamDriveId"
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
  },
  "teamdrives.get": {
    "accessPath": [
      "teamdrivesGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/drive/v3/teamdrives/{teamDriveId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "teamDriveId"
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
      "uploadType",
      "useDomainAdminAccess"
    ]
  },
  "teamdrives.update": {
    "accessPath": [
      "teamdrivesUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "backgroundImageFile",
      "backgroundImageLink",
      "capabilities",
      "colorRgb",
      "createdTime",
      "id",
      "kind",
      "name",
      "orgUnitId",
      "restrictions",
      "themeId"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/drive/v3/teamdrives/{teamDriveId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "teamDriveId"
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
      "uploadType",
      "useDomainAdminAccess"
    ]
  }
} satisfies ToolRuntimeMetadataMap;
