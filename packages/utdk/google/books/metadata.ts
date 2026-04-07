import type { ToolRuntimeMetadataMap } from "../../client.js";

export const toolMetadata = {
  "cloudloading.addBook": {
    "accessPath": [
      "cloudloadingAddBook"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/cloudloading/addBook",
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
      "drive_document_id",
      "mime_type",
      "name",
      "upload_client_token"
    ]
  },
  "cloudloading.deleteBook": {
    "accessPath": [
      "cloudloadingDeleteBook"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/cloudloading/deleteBook",
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
      "volumeId"
    ]
  },
  "cloudloading.updateBook": {
    "accessPath": [
      "cloudloadingUpdateBook"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "author",
      "processingState",
      "title",
      "volumeId"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/cloudloading/updateBook",
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
  "dictionary.listOfflineMetadata": {
    "accessPath": [
      "dictionaryListOfflineMetadata"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/dictionary/listOfflineMetadata",
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
      "cpksver"
    ]
  },
  "familysharing.getFamilyInfo": {
    "accessPath": [
      "familysharingGetFamilyInfo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/familysharing/getFamilyInfo",
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
      "source"
    ]
  },
  "familysharing.share": {
    "accessPath": [
      "familysharingShare"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/familysharing/share",
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
      "docId",
      "source",
      "volumeId"
    ]
  },
  "familysharing.unshare": {
    "accessPath": [
      "familysharingUnshare"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/familysharing/unshare",
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
      "docId",
      "source",
      "volumeId"
    ]
  },
  "myconfig.getUserSettings": {
    "accessPath": [
      "myconfigGetUserSettings"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/myconfig/getUserSettings",
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
      "country"
    ]
  },
  "myconfig.releaseDownloadAccess": {
    "accessPath": [
      "myconfigReleaseDownloadAccess"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/myconfig/releaseDownloadAccess",
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
      "cpksver",
      "volumeIds",
      "locale",
      "source"
    ]
  },
  "myconfig.requestAccess": {
    "accessPath": [
      "myconfigRequestAccess"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/myconfig/requestAccess",
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
      "cpksver",
      "nonce",
      "source",
      "volumeId",
      "licenseTypes",
      "locale"
    ]
  },
  "myconfig.syncVolumeLicenses": {
    "accessPath": [
      "myconfigSyncVolumeLicenses"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/myconfig/syncVolumeLicenses",
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
      "cpksver",
      "nonce",
      "source",
      "features",
      "includeNonComicsSeries",
      "locale",
      "showPreorders",
      "volumeIds"
    ]
  },
  "myconfig.updateUserSettings": {
    "accessPath": [
      "myconfigUpdateUserSettings"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "kind",
      "notesExport",
      "notification"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/myconfig/updateUserSettings",
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
  "mylibrary.annotations.list": {
    "accessPath": [
      "mylibraryAnnotationsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/mylibrary/annotations",
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
      "contentVersion",
      "layerId",
      "layerIds",
      "maxResults",
      "pageToken",
      "showDeleted",
      "source",
      "updatedMax",
      "updatedMin",
      "volumeId"
    ]
  },
  "mylibrary.annotations.insert": {
    "accessPath": [
      "mylibraryAnnotationsInsert"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "afterSelectedText",
      "beforeSelectedText",
      "clientVersionRanges",
      "created",
      "currentVersionRanges",
      "data",
      "deleted",
      "highlightStyle",
      "id",
      "kind",
      "layerId",
      "layerSummary",
      "pageIds",
      "selectedText",
      "selfLink",
      "updated",
      "volumeId"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/mylibrary/annotations",
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
      "annotationId",
      "country",
      "showOnlySummaryInResponse",
      "source"
    ]
  },
  "mylibrary.annotations.summary": {
    "accessPath": [
      "mylibraryAnnotationsSummary"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/mylibrary/annotations/summary",
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
      "layerIds",
      "volumeId",
      "source"
    ]
  },
  "mylibrary.annotations.delete": {
    "accessPath": [
      "mylibraryAnnotationsDelete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/books/v1/mylibrary/annotations/{annotationId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "annotationId"
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
      "source"
    ]
  },
  "mylibrary.annotations.update": {
    "accessPath": [
      "mylibraryAnnotationsUpdate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "afterSelectedText",
      "beforeSelectedText",
      "clientVersionRanges",
      "created",
      "currentVersionRanges",
      "data",
      "deleted",
      "highlightStyle",
      "id",
      "kind",
      "layerId",
      "layerSummary",
      "pageIds",
      "selectedText",
      "selfLink",
      "updated",
      "volumeId"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/books/v1/mylibrary/annotations/{annotationId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "annotationId"
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
      "source"
    ]
  },
  "mylibrary.bookshelves.list": {
    "accessPath": [
      "mylibraryBookshelvesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/mylibrary/bookshelves",
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
      "source"
    ]
  },
  "mylibrary.bookshelves.get": {
    "accessPath": [
      "mylibraryBookshelvesGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/mylibrary/bookshelves/{shelf}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "shelf"
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
      "source"
    ]
  },
  "mylibrary.bookshelves.addVolume": {
    "accessPath": [
      "mylibraryBookshelvesAddVolume"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/mylibrary/bookshelves/{shelf}/addVolume",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "shelf"
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
      "volumeId",
      "reason",
      "source"
    ]
  },
  "mylibrary.bookshelves.clearVolumes": {
    "accessPath": [
      "mylibraryBookshelvesClearVolumes"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/mylibrary/bookshelves/{shelf}/clearVolumes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "shelf"
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
      "source"
    ]
  },
  "mylibrary.bookshelves.moveVolume": {
    "accessPath": [
      "mylibraryBookshelvesMoveVolume"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/mylibrary/bookshelves/{shelf}/moveVolume",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "shelf"
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
      "volumeId",
      "volumePosition",
      "source"
    ]
  },
  "mylibrary.bookshelves.removeVolume": {
    "accessPath": [
      "mylibraryBookshelvesRemoveVolume"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/mylibrary/bookshelves/{shelf}/removeVolume",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "shelf"
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
      "volumeId",
      "reason",
      "source"
    ]
  },
  "mylibrary.bookshelves.volumes.list": {
    "accessPath": [
      "mylibraryBookshelvesVolumesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/mylibrary/bookshelves/{shelf}/volumes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "shelf"
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
      "country",
      "maxResults",
      "projection",
      "q",
      "showPreorders",
      "source",
      "startIndex"
    ]
  },
  "mylibrary.readingpositions.get": {
    "accessPath": [
      "mylibraryReadingpositionsGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/mylibrary/readingpositions/{volumeId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volumeId"
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
      "contentVersion",
      "source"
    ]
  },
  "mylibrary.readingpositions.setPosition": {
    "accessPath": [
      "mylibraryReadingpositionsSetPosition"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/mylibrary/readingpositions/{volumeId}/setPosition",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volumeId"
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
      "position",
      "timestamp",
      "action",
      "contentVersion",
      "deviceCookie",
      "source"
    ]
  },
  "notification.get": {
    "accessPath": [
      "notificationGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/notification/get",
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
      "notification_id",
      "locale",
      "source"
    ]
  },
  "onboarding.listCategories": {
    "accessPath": [
      "onboardingListCategories"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/onboarding/listCategories",
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
      "locale"
    ]
  },
  "onboarding.listCategoryVolumes": {
    "accessPath": [
      "onboardingListCategoryVolumes"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/onboarding/listCategoryVolumes",
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
      "categoryId",
      "locale",
      "maxAllowedMaturityRating",
      "pageSize",
      "pageToken"
    ]
  },
  "personalizedstream.get": {
    "accessPath": [
      "personalizedstreamGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/personalizedstream/get",
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
      "locale",
      "maxAllowedMaturityRating",
      "source"
    ]
  },
  "promooffer.accept": {
    "accessPath": [
      "promoofferAccept"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/promooffer/accept",
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
      "androidId",
      "device",
      "manufacturer",
      "model",
      "offerId",
      "product",
      "serial",
      "volumeId"
    ]
  },
  "promooffer.dismiss": {
    "accessPath": [
      "promoofferDismiss"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/promooffer/dismiss",
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
      "androidId",
      "device",
      "manufacturer",
      "model",
      "offerId",
      "product",
      "serial"
    ]
  },
  "promooffer.get": {
    "accessPath": [
      "promoofferGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/promooffer/get",
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
      "androidId",
      "device",
      "manufacturer",
      "model",
      "product",
      "serial"
    ]
  },
  "series.get": {
    "accessPath": [
      "seriesGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/series/get",
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
      "series_id"
    ]
  },
  "series.membership.get": {
    "accessPath": [
      "seriesMembershipGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/series/membership/get",
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
      "series_id",
      "page_size",
      "page_token"
    ]
  },
  "bookshelves.list": {
    "accessPath": [
      "bookshelvesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/users/{userId}/bookshelves",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "userId"
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
      "source"
    ]
  },
  "bookshelves.get": {
    "accessPath": [
      "bookshelvesGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/users/{userId}/bookshelves/{shelf}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "userId",
      "shelf"
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
      "source"
    ]
  },
  "bookshelves.volumes.list": {
    "accessPath": [
      "bookshelvesVolumesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/users/{userId}/bookshelves/{shelf}/volumes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "userId",
      "shelf"
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
      "showPreorders",
      "source",
      "startIndex"
    ]
  },
  "volumes.list": {
    "accessPath": [
      "volumesList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes",
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
      "q",
      "download",
      "filter",
      "langRestrict",
      "libraryRestrict",
      "maxAllowedMaturityRating",
      "maxResults",
      "orderBy",
      "partner",
      "printType",
      "projection",
      "showPreorders",
      "source",
      "startIndex"
    ]
  },
  "volumes.mybooks.list": {
    "accessPath": [
      "volumesMybooksList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes/mybooks",
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
      "acquireMethod",
      "country",
      "locale",
      "maxResults",
      "processingState",
      "source",
      "startIndex"
    ]
  },
  "volumes.recommended.list": {
    "accessPath": [
      "volumesRecommendedList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes/recommended",
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
      "locale",
      "maxAllowedMaturityRating",
      "source"
    ]
  },
  "volumes.recommended.rate": {
    "accessPath": [
      "volumesRecommendedRate"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/books/v1/volumes/recommended/rate",
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
      "rating",
      "volumeId",
      "locale",
      "source"
    ]
  },
  "volumes.useruploaded.list": {
    "accessPath": [
      "volumesUseruploadedList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes/useruploaded",
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
      "locale",
      "maxResults",
      "processingState",
      "source",
      "startIndex",
      "volumeId"
    ]
  },
  "volumes.get": {
    "accessPath": [
      "volumesGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes/{volumeId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volumeId"
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
      "country",
      "includeNonComicsSeries",
      "partner",
      "projection",
      "source",
      "user_library_consistent_read"
    ]
  },
  "volumes.associated.list": {
    "accessPath": [
      "volumesAssociatedList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes/{volumeId}/associated",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volumeId"
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
      "association",
      "locale",
      "maxAllowedMaturityRating",
      "source"
    ]
  },
  "layers.volumeAnnotations.list": {
    "accessPath": [
      "layersVolumeAnnotationsList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes/{volumeId}/layers/{layerId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volumeId",
      "layerId"
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
      "contentVersion",
      "endOffset",
      "endPosition",
      "locale",
      "maxResults",
      "pageToken",
      "showDeleted",
      "source",
      "startOffset",
      "startPosition",
      "updatedMax",
      "updatedMin",
      "volumeAnnotationsVersion"
    ]
  },
  "layers.volumeAnnotations.get": {
    "accessPath": [
      "layersVolumeAnnotationsGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volumeId",
      "layerId",
      "annotationId"
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
      "locale",
      "source"
    ]
  },
  "layers.annotationData.list": {
    "accessPath": [
      "layersAnnotationDataList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes/{volumeId}/layers/{layerId}/data",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volumeId",
      "layerId"
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
      "contentVersion",
      "annotationDataId",
      "h",
      "locale",
      "maxResults",
      "pageToken",
      "scale",
      "source",
      "updatedMax",
      "updatedMin",
      "w"
    ]
  },
  "layers.annotationData.get": {
    "accessPath": [
      "layersAnnotationDataGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volumeId",
      "layerId",
      "annotationDataId"
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
      "contentVersion",
      "allowWebDefinitions",
      "h",
      "locale",
      "scale",
      "source",
      "w"
    ]
  },
  "layers.list": {
    "accessPath": [
      "layersList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes/{volumeId}/layersummary",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volumeId"
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
      "contentVersion",
      "maxResults",
      "pageToken",
      "source"
    ]
  },
  "layers.get": {
    "accessPath": [
      "layersGet"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/books/v1/volumes/{volumeId}/layersummary/{summaryId}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volumeId",
      "summaryId"
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
      "contentVersion",
      "source"
    ]
  }
} satisfies ToolRuntimeMetadataMap;
