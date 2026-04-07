import type { ToolRuntimeMetadataMap } from "../../client.js";

export const toolMetadata = {
  "abuseReports.insert": {
    "accessPath": [
      "abuseReportsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "abuseTypes",
      "description",
      "relatedEntities",
      "subject"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/abuseReports",
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
      "part"
    ]
  },
  "activities.list": {
    "accessPath": [
      "activitiesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/activities",
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
      "part",
      "channelId",
      "home",
      "maxResults",
      "mine",
      "pageToken",
      "publishedAfter",
      "publishedBefore",
      "regionCode"
    ]
  },
  "captions.delete": {
    "accessPath": [
      "captionsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/captions",
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
      "id",
      "onBehalfOf",
      "onBehalfOfContentOwner"
    ]
  },
  "captions.list": {
    "accessPath": [
      "captionsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/captions",
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
      "part",
      "videoId",
      "id",
      "onBehalfOf",
      "onBehalfOfContentOwner"
    ]
  },
  "captions.insert": {
    "accessPath": [
      "captionsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "etag",
      "id",
      "kind",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/captions",
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
      "part",
      "onBehalfOf",
      "onBehalfOfContentOwner",
      "sync"
    ]
  },
  "captions.update": {
    "accessPath": [
      "captionsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "etag",
      "id",
      "kind",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/captions",
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
      "part",
      "onBehalfOf",
      "onBehalfOfContentOwner",
      "sync"
    ]
  },
  "captions.download": {
    "accessPath": [
      "captionsDownload"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/captions/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
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
      "onBehalfOf",
      "onBehalfOfContentOwner",
      "tfmt",
      "tlang"
    ]
  },
  "channelBanners.insert": {
    "accessPath": [
      "channelBannersInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "etag",
      "kind",
      "url"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/channelBanners/insert",
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
      "channelId",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel"
    ]
  },
  "channelSections.delete": {
    "accessPath": [
      "channelSectionsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/channelSections",
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
      "id",
      "onBehalfOfContentOwner"
    ]
  },
  "channelSections.list": {
    "accessPath": [
      "channelSectionsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/channelSections",
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
      "part",
      "channelId",
      "hl",
      "id",
      "mine",
      "onBehalfOfContentOwner"
    ]
  },
  "channelSections.insert": {
    "accessPath": [
      "channelSectionsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "contentDetails",
      "etag",
      "id",
      "kind",
      "localizations",
      "snippet",
      "targeting"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/channelSections",
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
      "part",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel"
    ]
  },
  "channelSections.update": {
    "accessPath": [
      "channelSectionsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "contentDetails",
      "etag",
      "id",
      "kind",
      "localizations",
      "snippet",
      "targeting"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/channelSections",
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
      "part",
      "onBehalfOfContentOwner"
    ]
  },
  "channels.list": {
    "accessPath": [
      "channelsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/channels",
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
      "part",
      "categoryId",
      "forHandle",
      "forUsername",
      "hl",
      "id",
      "managedByMe",
      "maxResults",
      "mine",
      "mySubscribers",
      "onBehalfOfContentOwner",
      "pageToken"
    ]
  },
  "channels.update": {
    "accessPath": [
      "channelsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "auditDetails",
      "brandingSettings",
      "contentDetails",
      "contentOwnerDetails",
      "conversionPings",
      "etag",
      "id",
      "kind",
      "localizations",
      "snippet",
      "statistics",
      "status",
      "topicDetails"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/channels",
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
      "part",
      "onBehalfOfContentOwner"
    ]
  },
  "commentThreads.list": {
    "accessPath": [
      "commentThreadsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/commentThreads",
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
      "part",
      "allThreadsRelatedToChannelId",
      "channelId",
      "id",
      "maxResults",
      "moderationStatus",
      "order",
      "pageToken",
      "searchTerms",
      "textFormat",
      "videoId"
    ]
  },
  "commentThreads.insert": {
    "accessPath": [
      "commentThreadsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "etag",
      "id",
      "kind",
      "replies",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/commentThreads",
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
      "part"
    ]
  },
  "youtube.v3.updateCommentThreads": {
    "accessPath": [
      "youtubeV3UpdateCommentThreads"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "etag",
      "id",
      "kind",
      "replies",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/commentThreads",
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
      "part"
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
    "pathTemplate": "/youtube/v3/comments",
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
      "id"
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
    "pathTemplate": "/youtube/v3/comments",
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
      "part",
      "id",
      "maxResults",
      "pageToken",
      "parentId",
      "textFormat"
    ]
  },
  "comments.insert": {
    "accessPath": [
      "commentsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "etag",
      "id",
      "kind",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/comments",
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
      "part"
    ]
  },
  "comments.update": {
    "accessPath": [
      "commentsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "etag",
      "id",
      "kind",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/comments",
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
      "part"
    ]
  },
  "comments.markAsSpam": {
    "accessPath": [
      "commentsMarkAsSpam"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/comments/markAsSpam",
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
      "id"
    ]
  },
  "comments.setModerationStatus": {
    "accessPath": [
      "commentsSetModerationStatus"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/comments/setModerationStatus",
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
      "id",
      "moderationStatus",
      "banAuthor"
    ]
  },
  "i18nLanguages.list": {
    "accessPath": [
      "i18NLanguagesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/i18nLanguages",
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
      "part",
      "hl"
    ]
  },
  "i18nRegions.list": {
    "accessPath": [
      "i18NRegionsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/i18nRegions",
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
      "part",
      "hl"
    ]
  },
  "liveBroadcasts.delete": {
    "accessPath": [
      "liveBroadcastsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/liveBroadcasts",
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
      "id",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel"
    ]
  },
  "liveBroadcasts.list": {
    "accessPath": [
      "liveBroadcastsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/liveBroadcasts",
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
      "part",
      "broadcastStatus",
      "broadcastType",
      "id",
      "maxResults",
      "mine",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel",
      "pageToken"
    ]
  },
  "liveBroadcasts.insert": {
    "accessPath": [
      "liveBroadcastsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "contentDetails",
      "etag",
      "id",
      "kind",
      "monetizationDetails",
      "snippet",
      "statistics",
      "status"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/liveBroadcasts",
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
      "part",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel"
    ]
  },
  "liveBroadcasts.update": {
    "accessPath": [
      "liveBroadcastsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "contentDetails",
      "etag",
      "id",
      "kind",
      "monetizationDetails",
      "snippet",
      "statistics",
      "status"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/liveBroadcasts",
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
      "part",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel"
    ]
  },
  "liveBroadcasts.bind": {
    "accessPath": [
      "liveBroadcastsBind"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/liveBroadcasts/bind",
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
      "id",
      "part",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel",
      "streamId"
    ]
  },
  "liveBroadcasts.insertCuepoint": {
    "accessPath": [
      "liveBroadcastsInsertCuepoint"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "cueType",
      "durationSecs",
      "etag",
      "id",
      "insertionOffsetTimeMs",
      "walltimeMs"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/liveBroadcasts/cuepoint",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [
      "id"
    ],
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
      "id",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel",
      "part"
    ]
  },
  "liveBroadcasts.transition": {
    "accessPath": [
      "liveBroadcastsTransition"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/liveBroadcasts/transition",
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
      "broadcastStatus",
      "id",
      "part",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel"
    ]
  },
  "liveChatBans.delete": {
    "accessPath": [
      "liveChatBansDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/liveChat/bans",
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
      "id"
    ]
  },
  "liveChatBans.insert": {
    "accessPath": [
      "liveChatBansInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "etag",
      "id",
      "kind",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/liveChat/bans",
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
      "part"
    ]
  },
  "liveChatMessages.delete": {
    "accessPath": [
      "liveChatMessagesDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/liveChat/messages",
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
      "id"
    ]
  },
  "liveChatMessages.list": {
    "accessPath": [
      "liveChatMessagesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/liveChat/messages",
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
      "liveChatId",
      "part",
      "hl",
      "maxResults",
      "pageToken",
      "profileImageSize"
    ]
  },
  "liveChatMessages.insert": {
    "accessPath": [
      "liveChatMessagesInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "authorDetails",
      "etag",
      "id",
      "kind",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/liveChat/messages",
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
      "part"
    ]
  },
  "liveChatModerators.delete": {
    "accessPath": [
      "liveChatModeratorsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/liveChat/moderators",
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
      "id"
    ]
  },
  "liveChatModerators.list": {
    "accessPath": [
      "liveChatModeratorsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/liveChat/moderators",
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
      "liveChatId",
      "part",
      "maxResults",
      "pageToken"
    ]
  },
  "liveChatModerators.insert": {
    "accessPath": [
      "liveChatModeratorsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "etag",
      "id",
      "kind",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/liveChat/moderators",
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
      "part"
    ]
  },
  "liveStreams.delete": {
    "accessPath": [
      "liveStreamsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/liveStreams",
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
      "id",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel"
    ]
  },
  "liveStreams.list": {
    "accessPath": [
      "liveStreamsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/liveStreams",
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
      "part",
      "id",
      "maxResults",
      "mine",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel",
      "pageToken"
    ]
  },
  "liveStreams.insert": {
    "accessPath": [
      "liveStreamsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "cdn",
      "contentDetails",
      "etag",
      "id",
      "kind",
      "snippet",
      "status"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/liveStreams",
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
      "part",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel"
    ]
  },
  "liveStreams.update": {
    "accessPath": [
      "liveStreamsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "cdn",
      "contentDetails",
      "etag",
      "id",
      "kind",
      "snippet",
      "status"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/liveStreams",
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
      "part",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel"
    ]
  },
  "members.list": {
    "accessPath": [
      "membersList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/members",
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
      "part",
      "filterByMemberChannelId",
      "hasAccessToLevel",
      "maxResults",
      "mode",
      "pageToken"
    ]
  },
  "membershipsLevels.list": {
    "accessPath": [
      "membershipsLevelsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/membershipsLevels",
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
      "part"
    ]
  },
  "playlistImages.delete": {
    "accessPath": [
      "playlistImagesDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/playlistImages",
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
      "id",
      "onBehalfOfContentOwner"
    ]
  },
  "playlistImages.list": {
    "accessPath": [
      "playlistImagesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/playlistImages",
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
      "maxResults",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel",
      "pageToken",
      "parent",
      "part"
    ]
  },
  "playlistImages.insert": {
    "accessPath": [
      "playlistImagesInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "kind",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/playlistImages",
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
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel",
      "part"
    ]
  },
  "playlistImages.update": {
    "accessPath": [
      "playlistImagesUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "kind",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/playlistImages",
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
      "onBehalfOfContentOwner",
      "part"
    ]
  },
  "playlistItems.delete": {
    "accessPath": [
      "playlistItemsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/playlistItems",
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
      "id",
      "onBehalfOfContentOwner"
    ]
  },
  "playlistItems.list": {
    "accessPath": [
      "playlistItemsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/playlistItems",
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
      "part",
      "id",
      "maxResults",
      "onBehalfOfContentOwner",
      "pageToken",
      "playlistId",
      "videoId"
    ]
  },
  "playlistItems.insert": {
    "accessPath": [
      "playlistItemsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "contentDetails",
      "etag",
      "id",
      "kind",
      "snippet",
      "status"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/playlistItems",
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
      "part",
      "onBehalfOfContentOwner"
    ]
  },
  "playlistItems.update": {
    "accessPath": [
      "playlistItemsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "contentDetails",
      "etag",
      "id",
      "kind",
      "snippet",
      "status"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/playlistItems",
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
      "part",
      "onBehalfOfContentOwner"
    ]
  },
  "playlists.delete": {
    "accessPath": [
      "playlistsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/playlists",
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
      "id",
      "onBehalfOfContentOwner"
    ]
  },
  "playlists.list": {
    "accessPath": [
      "playlistsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/playlists",
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
      "part",
      "channelId",
      "hl",
      "id",
      "maxResults",
      "mine",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel",
      "pageToken"
    ]
  },
  "playlists.insert": {
    "accessPath": [
      "playlistsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "contentDetails",
      "etag",
      "id",
      "kind",
      "localizations",
      "player",
      "snippet",
      "status"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/playlists",
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
      "part",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel"
    ]
  },
  "playlists.update": {
    "accessPath": [
      "playlistsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "contentDetails",
      "etag",
      "id",
      "kind",
      "localizations",
      "player",
      "snippet",
      "status"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/playlists",
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
      "part",
      "onBehalfOfContentOwner"
    ]
  },
  "search.list": {
    "accessPath": [
      "searchList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/search",
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
      "part",
      "channelId",
      "channelType",
      "eventType",
      "forContentOwner",
      "forDeveloper",
      "forMine",
      "location",
      "locationRadius",
      "maxResults",
      "onBehalfOfContentOwner",
      "order",
      "pageToken",
      "publishedAfter",
      "publishedBefore",
      "q",
      "regionCode",
      "relevanceLanguage",
      "safeSearch",
      "topicId",
      "type",
      "videoCaption",
      "videoCategoryId",
      "videoDefinition",
      "videoDimension",
      "videoDuration",
      "videoEmbeddable",
      "videoLicense",
      "videoPaidProductPlacement",
      "videoSyndicated",
      "videoType"
    ]
  },
  "subscriptions.delete": {
    "accessPath": [
      "subscriptionsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/subscriptions",
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
      "id"
    ]
  },
  "subscriptions.list": {
    "accessPath": [
      "subscriptionsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/subscriptions",
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
      "part",
      "channelId",
      "forChannelId",
      "id",
      "maxResults",
      "mine",
      "myRecentSubscribers",
      "mySubscribers",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel",
      "order",
      "pageToken"
    ]
  },
  "subscriptions.insert": {
    "accessPath": [
      "subscriptionsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "contentDetails",
      "etag",
      "id",
      "kind",
      "snippet",
      "subscriberSnippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/subscriptions",
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
      "part"
    ]
  },
  "superChatEvents.list": {
    "accessPath": [
      "superChatEventsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/superChatEvents",
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
      "part",
      "hl",
      "maxResults",
      "pageToken"
    ]
  },
  "tests.insert": {
    "accessPath": [
      "testsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "featuredPart",
      "gaia",
      "id",
      "snippet"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/tests",
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
      "part",
      "externalChannelId"
    ]
  },
  "thirdPartyLinks.delete": {
    "accessPath": [
      "thirdPartyLinksDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/thirdPartyLinks",
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
      "linkingToken",
      "type",
      "externalChannelId",
      "part"
    ]
  },
  "thirdPartyLinks.list": {
    "accessPath": [
      "thirdPartyLinksList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/thirdPartyLinks",
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
      "part",
      "externalChannelId",
      "linkingToken",
      "type"
    ]
  },
  "thirdPartyLinks.insert": {
    "accessPath": [
      "thirdPartyLinksInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "etag",
      "kind",
      "linkingToken",
      "snippet",
      "status"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/thirdPartyLinks",
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
      "part",
      "externalChannelId"
    ]
  },
  "thirdPartyLinks.update": {
    "accessPath": [
      "thirdPartyLinksUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "etag",
      "kind",
      "linkingToken",
      "snippet",
      "status"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/thirdPartyLinks",
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
      "part",
      "externalChannelId"
    ]
  },
  "thumbnails.set": {
    "accessPath": [
      "thumbnailsSet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/thumbnails/set",
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
      "videoId",
      "onBehalfOfContentOwner"
    ]
  },
  "videoAbuseReportReasons.list": {
    "accessPath": [
      "videoAbuseReportReasonsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/videoAbuseReportReasons",
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
      "part",
      "hl"
    ]
  },
  "videoCategories.list": {
    "accessPath": [
      "videoCategoriesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/videoCategories",
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
      "part",
      "hl",
      "id",
      "regionCode"
    ]
  },
  "videos.delete": {
    "accessPath": [
      "videosDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/youtube/v3/videos",
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
      "id",
      "onBehalfOfContentOwner"
    ]
  },
  "videos.list": {
    "accessPath": [
      "videosList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/videos",
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
      "part",
      "chart",
      "hl",
      "id",
      "locale",
      "maxHeight",
      "maxResults",
      "maxWidth",
      "myRating",
      "onBehalfOfContentOwner",
      "pageToken",
      "regionCode",
      "videoCategoryId"
    ]
  },
  "videos.insert": {
    "accessPath": [
      "videosInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ageGating",
      "contentDetails",
      "etag",
      "fileDetails",
      "id",
      "kind",
      "liveStreamingDetails",
      "localizations",
      "monetizationDetails",
      "player",
      "processingDetails",
      "projectDetails",
      "recordingDetails",
      "snippet",
      "statistics",
      "status",
      "suggestions",
      "topicDetails"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/videos",
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
      "part",
      "autoLevels",
      "notifySubscribers",
      "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel",
      "stabilize"
    ]
  },
  "videos.update": {
    "accessPath": [
      "videosUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ageGating",
      "contentDetails",
      "etag",
      "fileDetails",
      "id",
      "kind",
      "liveStreamingDetails",
      "localizations",
      "monetizationDetails",
      "player",
      "processingDetails",
      "projectDetails",
      "recordingDetails",
      "snippet",
      "statistics",
      "status",
      "suggestions",
      "topicDetails"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/youtube/v3/videos",
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
      "part",
      "onBehalfOfContentOwner"
    ]
  },
  "videos.getRating": {
    "accessPath": [
      "videosGetRating"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/youtube/v3/videos/getRating",
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
      "id",
      "onBehalfOfContentOwner"
    ]
  },
  "videos.rate": {
    "accessPath": [
      "videosRate"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/videos/rate",
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
      "id",
      "rating"
    ]
  },
  "videos.reportAbuse": {
    "accessPath": [
      "videosReportAbuse"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "comments",
      "language",
      "reasonId",
      "secondaryReasonId",
      "videoId"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/videos/reportAbuse",
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
      "onBehalfOfContentOwner"
    ]
  },
  "watermarks.set": {
    "accessPath": [
      "watermarksSet"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "imageBytes",
      "imageUrl",
      "position",
      "targetChannelId",
      "timing"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/watermarks/set",
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
      "channelId",
      "onBehalfOfContentOwner"
    ]
  },
  "watermarks.unset": {
    "accessPath": [
      "watermarksUnset"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/youtube/v3/watermarks/unset",
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
      "channelId",
      "onBehalfOfContentOwner"
    ]
  }
} satisfies ToolRuntimeMetadataMap;
