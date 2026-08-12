import type { ToolRuntimeMetadataMap } from "../client.js";

export const toolMetadata = {
  "get-an-album": {
    "accessPath": [
      "getAnAlbum"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/albums/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market"
    ],
    "description": "Get Album\n"
  },
  "get-multiple-albums": {
    "accessPath": [
      "getMultipleAlbums"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/albums",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids",
      "market"
    ],
    "description": "Get Several Albums\n"
  },
  "get-an-albums-tracks": {
    "accessPath": [
      "getAnAlbumsTracks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/albums/{id}/tracks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "limit",
      "offset"
    ],
    "description": "Get Album Tracks\n"
  },
  "get-an-artist": {
    "accessPath": [
      "getAnArtist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/artists/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Artist\n"
  },
  "get-multiple-artists": {
    "accessPath": [
      "getMultipleArtists"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/artists",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Get Several Artists\n"
  },
  "get-an-artists-albums": {
    "accessPath": [
      "getAnArtistsAlbums"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/artists/{id}/albums",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include_groups",
      "market",
      "limit",
      "offset"
    ],
    "description": "Get Artist's Albums\n"
  },
  "get-an-artists-top-tracks": {
    "accessPath": [
      "getAnArtistsTopTracks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/artists/{id}/top-tracks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market"
    ],
    "description": "Get Artist's Top Tracks\n"
  },
  "get-an-artists-related-artists": {
    "accessPath": [
      "getAnArtistsRelatedArtists"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/artists/{id}/related-artists",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Artist's Related Artists\n"
  },
  "get-a-show": {
    "accessPath": [
      "getAShow"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/shows/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market"
    ],
    "description": "Get Show\n"
  },
  "get-multiple-shows": {
    "accessPath": [
      "getMultipleShows"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/shows",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "ids"
    ],
    "description": "Get Several Shows\n"
  },
  "get-a-shows-episodes": {
    "accessPath": [
      "getAShowsEpisodes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/shows/{id}/episodes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "limit",
      "offset"
    ],
    "description": "Get Show Episodes\n"
  },
  "get-an-episode": {
    "accessPath": [
      "getAnEpisode"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/episodes/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market"
    ],
    "description": "Get Episode\n"
  },
  "get-multiple-episodes": {
    "accessPath": [
      "getMultipleEpisodes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/episodes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids",
      "market"
    ],
    "description": "Get Several Episodes\n"
  },
  "get-an-audiobook": {
    "accessPath": [
      "getAnAudiobook"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/audiobooks/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market"
    ],
    "description": "Get an Audiobook\n"
  },
  "get-multiple-audiobooks": {
    "accessPath": [
      "getMultipleAudiobooks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/audiobooks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids",
      "market"
    ],
    "description": "Get Several Audiobooks\n"
  },
  "get-audiobook-chapters": {
    "accessPath": [
      "getAudiobookChapters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/audiobooks/{id}/chapters",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "limit",
      "offset"
    ],
    "description": "Get Audiobook Chapters\n"
  },
  "get-users-saved-audiobooks": {
    "accessPath": [
      "getUsersSavedAudiobooks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/audiobooks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "offset"
    ],
    "description": "Get User's Saved Audiobooks\n"
  },
  "save-audiobooks-user": {
    "accessPath": [
      "saveAudiobooksUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/audiobooks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Save Audiobooks for Current User\n"
  },
  "remove-audiobooks-user": {
    "accessPath": [
      "removeAudiobooksUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/me/audiobooks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Remove User's Saved Audiobooks\n"
  },
  "check-users-saved-audiobooks": {
    "accessPath": [
      "checkUsersSavedAudiobooks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/audiobooks/contains",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Check User's Saved Audiobooks\n"
  },
  "get-a-chapter": {
    "accessPath": [
      "getAChapter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/chapters/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market"
    ],
    "description": "Get a Chapter\n"
  },
  "get-several-chapters": {
    "accessPath": [
      "getSeveralChapters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/chapters",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids",
      "market"
    ],
    "description": "Get Several Chapters\n"
  },
  "get-track": {
    "accessPath": [
      "getTrack"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/tracks/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market"
    ],
    "description": "Get Track\n"
  },
  "get-several-tracks": {
    "accessPath": [
      "getSeveralTracks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/tracks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "ids"
    ],
    "description": "Get Several Tracks\n"
  },
  "search": {
    "accessPath": [
      "search"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "q",
      "type",
      "market",
      "limit",
      "offset",
      "include_external"
    ],
    "description": "Search for Item\n"
  },
  "get-current-users-profile": {
    "accessPath": [
      "getCurrentUsersProfile"
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
    "description": "Get Current User's Profile\n"
  },
  "get-playlist": {
    "accessPath": [
      "getPlaylist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/playlists/{playlist_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "fields",
      "additional_types"
    ],
    "description": "Get Playlist\n"
  },
  "change-playlist-details": {
    "accessPath": [
      "changePlaylistDetails"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "public",
      "collaborative",
      "description"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/playlists/{playlist_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Change Playlist Details\n"
  },
  "get-playlists-tracks": {
    "accessPath": [
      "getPlaylistsTracks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/playlists/{playlist_id}/tracks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "fields",
      "limit",
      "offset",
      "additional_types"
    ],
    "description": "Get Playlist Items [DEPRECATED]\n"
  },
  "add-tracks-to-playlist": {
    "accessPath": [
      "addTracksToPlaylist"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "uris",
      "position"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/playlists/{playlist_id}/tracks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [
      "position",
      "uris"
    ],
    "queryParameterKeys": [
      "position",
      "uris"
    ],
    "description": "Add Items to Playlist [DEPRECATED]\n"
  },
  "reorder-or-replace-playlists-tracks": {
    "accessPath": [
      "reorderOrReplacePlaylistsTracks"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "uris",
      "range_start",
      "insert_before",
      "range_length",
      "snapshot_id"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/playlists/{playlist_id}/tracks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [
      "uris"
    ],
    "queryParameterKeys": [
      "uris"
    ],
    "description": "Update Playlist Items [DEPRECATED]\n"
  },
  "remove-tracks-playlist": {
    "accessPath": [
      "removeTracksPlaylist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tracks",
      "snapshot_id"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/playlists/{playlist_id}/tracks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove Playlist Items [DEPRECATED]\n"
  },
  "get-playlists-items": {
    "accessPath": [
      "getPlaylistsItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/playlists/{playlist_id}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "fields",
      "limit",
      "offset",
      "additional_types"
    ],
    "description": "Get Playlist Items\n"
  },
  "add-items-to-playlist": {
    "accessPath": [
      "addItemsToPlaylist"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "uris",
      "position"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/playlists/{playlist_id}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [
      "position",
      "uris"
    ],
    "queryParameterKeys": [
      "position",
      "uris"
    ],
    "description": "Add Items to Playlist\n"
  },
  "reorder-or-replace-playlists-items": {
    "accessPath": [
      "reorderOrReplacePlaylistsItems"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "uris",
      "range_start",
      "insert_before",
      "range_length",
      "snapshot_id"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/playlists/{playlist_id}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [
      "uris"
    ],
    "queryParameterKeys": [
      "uris"
    ],
    "description": "Update Playlist Items\n"
  },
  "remove-items-playlist": {
    "accessPath": [
      "removeItemsPlaylist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "items",
      "snapshot_id"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/playlists/{playlist_id}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove Playlist Items\n"
  },
  "get-a-list-of-current-users-playlists": {
    "accessPath": [
      "getAListOfCurrentUsersPlaylists"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/playlists",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "offset"
    ],
    "description": "Get Current User's Playlists\n"
  },
  "create-playlist": {
    "accessPath": [
      "createPlaylist"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "public",
      "collaborative",
      "description"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/me/playlists",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Playlist\n"
  },
  "save-library-items": {
    "accessPath": [
      "saveLibraryItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/library",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "uris"
    ],
    "description": "Save Items to Library\n"
  },
  "remove-library-items": {
    "accessPath": [
      "removeLibraryItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/me/library",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "uris"
    ],
    "description": "Remove Items from Library\n"
  },
  "check-library-contains": {
    "accessPath": [
      "checkLibraryContains"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/library/contains",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "uris"
    ],
    "description": "Check User's Saved Items\n"
  },
  "get-users-saved-albums": {
    "accessPath": [
      "getUsersSavedAlbums"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/albums",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "offset",
      "market"
    ],
    "description": "Get User's Saved Albums\n"
  },
  "save-albums-user": {
    "accessPath": [
      "saveAlbumsUser"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/albums",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [
      "ids"
    ],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Save Albums for Current User\n"
  },
  "remove-albums-user": {
    "accessPath": [
      "removeAlbumsUser"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/me/albums",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [
      "ids"
    ],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Remove Users' Saved Albums\n"
  },
  "check-users-saved-albums": {
    "accessPath": [
      "checkUsersSavedAlbums"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/albums/contains",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Check User's Saved Albums\n"
  },
  "get-users-saved-tracks": {
    "accessPath": [
      "getUsersSavedTracks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/tracks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "limit",
      "offset"
    ],
    "description": "Get User's Saved Tracks\n"
  },
  "save-tracks-user": {
    "accessPath": [
      "saveTracksUser"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ids",
      "timestamped_ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/tracks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Save Tracks for Current User\n"
  },
  "remove-tracks-user": {
    "accessPath": [
      "removeTracksUser"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/me/tracks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [
      "ids"
    ],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Remove User's Saved Tracks\n"
  },
  "check-users-saved-tracks": {
    "accessPath": [
      "checkUsersSavedTracks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/tracks/contains",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Check User's Saved Tracks\n"
  },
  "get-users-saved-episodes": {
    "accessPath": [
      "getUsersSavedEpisodes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/episodes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "limit",
      "offset"
    ],
    "description": "Get User's Saved Episodes\n"
  },
  "save-episodes-user": {
    "accessPath": [
      "saveEpisodesUser"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/episodes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [
      "ids"
    ],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Save Episodes for Current User\n"
  },
  "remove-episodes-user": {
    "accessPath": [
      "removeEpisodesUser"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/me/episodes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [
      "ids"
    ],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Remove User's Saved Episodes\n"
  },
  "check-users-saved-episodes": {
    "accessPath": [
      "checkUsersSavedEpisodes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/episodes/contains",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Check User's Saved Episodes\n"
  },
  "get-users-saved-shows": {
    "accessPath": [
      "getUsersSavedShows"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/shows",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "offset"
    ],
    "description": "Get User's Saved Shows\n"
  },
  "save-shows-user": {
    "accessPath": [
      "saveShowsUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/shows",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Save Shows for Current User\n"
  },
  "remove-shows-user": {
    "accessPath": [
      "removeShowsUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/me/shows",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids",
      "market"
    ],
    "description": "Remove User's Saved Shows\n"
  },
  "check-users-saved-shows": {
    "accessPath": [
      "checkUsersSavedShows"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/shows/contains",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Check User's Saved Shows\n"
  },
  "get-users-top-artists-and-tracks": {
    "accessPath": [
      "getUsersTopArtistsAndTracks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/top/{type}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "type"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "time_range",
      "limit",
      "offset"
    ],
    "description": "Get User's Top Items\n"
  },
  "get-users-profile": {
    "accessPath": [
      "getUsersProfile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get User's Profile\n"
  },
  "get-list-users-playlists": {
    "accessPath": [
      "getListUsersPlaylists"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/users/{user_id}/playlists",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "offset"
    ],
    "description": "Get User's Playlists\n"
  },
  "create-playlist-for-user": {
    "accessPath": [
      "createPlaylistForUser"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "public",
      "collaborative",
      "description"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/users/{user_id}/playlists",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Playlist for user\n"
  },
  "follow-playlist": {
    "accessPath": [
      "followPlaylist"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "public"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/playlists/{playlist_id}/followers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Follow Playlist\n"
  },
  "unfollow-playlist": {
    "accessPath": [
      "unfollowPlaylist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/playlists/{playlist_id}/followers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Unfollow Playlist\n"
  },
  "get-featured-playlists": {
    "accessPath": [
      "getFeaturedPlaylists"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/browse/featured-playlists",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "locale",
      "limit",
      "offset"
    ],
    "description": "Get Featured Playlists\n"
  },
  "get-categories": {
    "accessPath": [
      "getCategories"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/browse/categories",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "locale",
      "limit",
      "offset"
    ],
    "description": "Get Several Browse Categories\n"
  },
  "get-a-category": {
    "accessPath": [
      "getACategory"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/browse/categories/{category_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "category_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "locale"
    ],
    "description": "Get Single Browse Category\n"
  },
  "get-a-categories-playlists": {
    "accessPath": [
      "getACategoriesPlaylists"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/browse/categories/{category_id}/playlists",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "category_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "offset"
    ],
    "description": "Get Category's Playlists\n"
  },
  "get-playlist-cover": {
    "accessPath": [
      "getPlaylistCover"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/playlists/{playlist_id}/images",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Playlist Cover Image\n"
  },
  "upload-custom-playlist-cover": {
    "accessPath": [
      "uploadCustomPlaylistCover"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/playlists/{playlist_id}/images",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Custom Playlist Cover Image\n"
  },
  "get-new-releases": {
    "accessPath": [
      "getNewReleases"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/browse/new-releases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "offset"
    ],
    "description": "Get New Releases\n"
  },
  "get-followed": {
    "accessPath": [
      "getFollowed"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/following",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "type",
      "after",
      "limit"
    ],
    "description": "Get Followed Artists\n"
  },
  "follow-artists-users": {
    "accessPath": [
      "followArtistsUsers"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/following",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [
      "ids"
    ],
    "queryParameterKeys": [
      "type",
      "ids"
    ],
    "description": "Follow Artists or Users\n"
  },
  "unfollow-artists-users": {
    "accessPath": [
      "unfollowArtistsUsers"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/me/following",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [
      "ids"
    ],
    "queryParameterKeys": [
      "type",
      "ids"
    ],
    "description": "Unfollow Artists or Users\n"
  },
  "check-current-user-follows": {
    "accessPath": [
      "checkCurrentUserFollows"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/following/contains",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "type",
      "ids"
    ],
    "description": "Check If User Follows Artists or Users\n"
  },
  "check-if-user-follows-playlist": {
    "accessPath": [
      "checkIfUserFollowsPlaylist"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/playlists/{playlist_id}/followers/contains",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "playlist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Check if Current User Follows Playlist\n"
  },
  "get-several-audio-features": {
    "accessPath": [
      "getSeveralAudioFeatures"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/audio-features",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ids"
    ],
    "description": "Get Several Tracks' Audio Features\n"
  },
  "get-audio-features": {
    "accessPath": [
      "getAudioFeatures"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/audio-features/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Track's Audio Features\n"
  },
  "get-audio-analysis": {
    "accessPath": [
      "getAudioAnalysis"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/audio-analysis/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Track's Audio Analysis\n"
  },
  "get-recommendations": {
    "accessPath": [
      "getRecommendations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/recommendations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "market",
      "seed_artists",
      "seed_genres",
      "seed_tracks",
      "min_acousticness",
      "max_acousticness",
      "target_acousticness",
      "min_danceability",
      "max_danceability",
      "target_danceability",
      "min_duration_ms",
      "max_duration_ms",
      "target_duration_ms",
      "min_energy",
      "max_energy",
      "target_energy",
      "min_instrumentalness",
      "max_instrumentalness",
      "target_instrumentalness",
      "min_key",
      "max_key",
      "target_key",
      "min_liveness",
      "max_liveness",
      "target_liveness",
      "min_loudness",
      "max_loudness",
      "target_loudness",
      "min_mode",
      "max_mode",
      "target_mode",
      "min_popularity",
      "max_popularity",
      "target_popularity",
      "min_speechiness",
      "max_speechiness",
      "target_speechiness",
      "min_tempo",
      "max_tempo",
      "target_tempo",
      "min_time_signature",
      "max_time_signature",
      "target_time_signature",
      "min_valence",
      "max_valence",
      "target_valence"
    ],
    "description": "Get Recommendations\n"
  },
  "get-recommendation-genres": {
    "accessPath": [
      "getRecommendationGenres"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/recommendations/available-genre-seeds",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Available Genre Seeds\n"
  },
  "get-information-about-the-users-current-playback": {
    "accessPath": [
      "getInformationAboutTheUsersCurrentPlayback"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/player",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "additional_types"
    ],
    "description": "Get Playback State\n"
  },
  "transfer-a-users-playback": {
    "accessPath": [
      "transferAUsersPlayback"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "device_ids",
      "play"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/player",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Transfer Playback\n"
  },
  "get-a-users-available-devices": {
    "accessPath": [
      "getAUsersAvailableDevices"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/player/devices",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Available Devices\n"
  },
  "get-the-users-currently-playing-track": {
    "accessPath": [
      "getTheUsersCurrentlyPlayingTrack"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/player/currently-playing",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "market",
      "additional_types"
    ],
    "description": "Get Currently Playing Track\n"
  },
  "start-a-users-playback": {
    "accessPath": [
      "startAUsersPlayback"
    ],
    "bodyAllowsAdditionalProperties": true,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "context_uri",
      "uris",
      "offset",
      "position_ms"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/player/play",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "device_id"
    ],
    "description": "Start/Resume Playback\n"
  },
  "pause-a-users-playback": {
    "accessPath": [
      "pauseAUsersPlayback"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/player/pause",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "device_id"
    ],
    "description": "Pause Playback\n"
  },
  "skip-users-playback-to-next-track": {
    "accessPath": [
      "skipUsersPlaybackToNextTrack"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/me/player/next",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "device_id"
    ],
    "description": "Skip To Next\n"
  },
  "skip-users-playback-to-previous-track": {
    "accessPath": [
      "skipUsersPlaybackToPreviousTrack"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/me/player/previous",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "device_id"
    ],
    "description": "Skip To Previous\n"
  },
  "seek-to-position-in-currently-playing-track": {
    "accessPath": [
      "seekToPositionInCurrentlyPlayingTrack"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/player/seek",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "position_ms",
      "device_id"
    ],
    "description": "Seek To Position\n"
  },
  "set-repeat-mode-on-users-playback": {
    "accessPath": [
      "setRepeatModeOnUsersPlayback"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/player/repeat",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "state",
      "device_id"
    ],
    "description": "Set Repeat Mode\n"
  },
  "set-volume-for-users-playback": {
    "accessPath": [
      "setVolumeForUsersPlayback"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/player/volume",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "volume_percent",
      "device_id"
    ],
    "description": "Set Playback Volume\n"
  },
  "toggle-shuffle-for-users-playback": {
    "accessPath": [
      "toggleShuffleForUsersPlayback"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v1/me/player/shuffle",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "state",
      "device_id"
    ],
    "description": "Toggle Playback Shuffle\n"
  },
  "get-recently-played": {
    "accessPath": [
      "getRecentlyPlayed"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/player/recently-played",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "after",
      "before"
    ],
    "description": "Get Recently Played Tracks\n"
  },
  "get-queue": {
    "accessPath": [
      "getQueue"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/me/player/queue",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the User's Queue\n"
  },
  "add-to-queue": {
    "accessPath": [
      "addToQueue"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/me/player/queue",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "uri",
      "device_id"
    ],
    "description": "Add Item to Playback Queue\n"
  },
  "get-available-markets": {
    "accessPath": [
      "getAvailableMarkets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/markets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Available Markets\n"
  }
} satisfies ToolRuntimeMetadataMap;
