# Playlists

18 operations · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.getACategoriesPlaylists`

Get Category's Playlists — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getACategoriesPlaylists(input: {
  /** The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.  */
  category_id: string;
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
}): Promise<PagingFeaturedPlaylistObject>
```

<sub>`GET /browse/categories/{category_id}/playlists` · `get-a-categories-playlists`</sub>

## `spotify.getFeaturedPlaylists`

Get Featured Playlists — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getFeaturedPlaylists(input: {
  /** The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._  */
  locale?: string;
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
}): Promise<PagingFeaturedPlaylistObject>
```

<sub>`GET /browse/featured-playlists` · `get-featured-playlists`</sub>

## `spotify.getAListOfCurrentUsersPlaylists`

Get Current User's Playlists — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAListOfCurrentUsersPlaylists(input: {
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** 'The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000\. Use with `limit` to get the next set of playlists.'  */
  offset?: number;
}): Promise<PagingPlaylistObject>
```

<sub>`GET /me/playlists` · `get-a-list-of-current-users-playlists`</sub>

## `spotify.createPlaylist`

Create Playlist — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.createPlaylist(input: {
  /** The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.  */
  name: string;
  /** Defaults to `true`. The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes). For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)  */
  public?: boolean;
  /** Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._  */
  collaborative?: boolean;
  /** value for playlist description as displayed in Spotify Clients and in the Web API.  */
  description?: string;
  [key: string]: unknown;
}): Promise<PlaylistObject>
```

<sub>`POST /me/playlists` · `create-playlist`</sub>

## `spotify.getPlaylist`

Get Playlist — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getPlaylist(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the playlist''s description and URI: `fields=description,uri`. A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder: `fields=tracks.items(added_at,added_by.id)`. Use multiple parentheses to drill down into nested objects, for example: `fields=tracks.items(track(name,href,album(name,href)))`. Fields can be excluded by prefixing them with an exclamation mark, for example: `fields=tracks.items(track(name,href,album(!name,href)))`  */
  fields?: string;
  /** A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.  */
  additional_types?: string;
}): Promise<PlaylistObject>
```

<sub>`GET /playlists/{playlist_id}` · `get-playlist`</sub>

## `spotify.changePlaylistDetails`

Change Playlist Details — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.changePlaylistDetails(input: {
  /** The new name for the playlist, for example `"My New Playlist Title"`  */
  name?: string;
  /** The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)  */
  public?: boolean;
  /** If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/> _**Note**: You can only set `collaborative` to `true` on non-public playlists._  */
  collaborative?: boolean;
  /** Value for playlist description as displayed in Spotify Clients and in the Web API.  */
  description?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
  [key: string]: unknown;
}): Promise<undefined>
```

<sub>`PUT /playlists/{playlist_id}` · `change-playlist-details`</sub>

## `spotify.getPlaylistCover`

Get Playlist Cover Image — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getPlaylistCover(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
}): Promise<(ImageObject)[]>
```

<sub>`GET /playlists/{playlist_id}/images` · `get-playlist-cover`</sub>

## `spotify.uploadCustomPlaylistCover`

Add Custom Playlist Cover Image — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.uploadCustomPlaylistCover(input: {
  /** Base64 encoded JPEG image data, maximum payload size is 256 KB. */
  body?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
}): Promise<undefined>
```

<sub>`PUT /playlists/{playlist_id}/images` · `upload-custom-playlist-cover`</sub>

## `spotify.removeItemsPlaylist`

Remove Playlist Items — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.removeItemsPlaylist(input: {
  /** An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove. For example: `{ "items": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.  */
  items: ({ uri?: string })[];
  /** The playlist's snapshot ID against which you want to make the changes. The API will validate that the specified items exist and in the specified positions and make the changes, even if more recent changes have been made to the playlist.  */
  snapshot_id?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
}): Promise<{ snapshot_id?: string }>
```

<sub>`DELETE /playlists/{playlist_id}/items` · `remove-items-playlist`</sub>

## `spotify.getPlaylistsItems`

Get Playlist Items — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getPlaylistsItems(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the total number of items and the request limit:<br/>`fields=total,limit`<br/>A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder:<br/>`fields=items(added_at,added_by.id)`<br/>Use multiple parentheses to drill down into nested objects, for example:<br/>`fields=items(track(name,href,album(name,href)))`<br/>Fields can be excluded by prefixing them with an exclamation mark, for example:<br/>`fields=items.track.album(!external_urls,images)`  */
  fields?: string;
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
  /** A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.  */
  additional_types?: string;
}): Promise<PagingPlaylistTrackObject>
```

<sub>`GET /playlists/{playlist_id}/items` · `get-playlists-items`</sub>

## `spotify.addItemsToPlaylist`

Add Items to Playlist — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.addItemsToPlaylist(input: {
  /** A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._  */
  uris?: (string)[];
  /** The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`  */
  position?: number;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
  [key: string]: unknown;
}, options?: { query?: { position?: number; uris?: string } }): Promise<{ snapshot_id?: string }>
```

<sub>`POST /playlists/{playlist_id}/items` · `add-items-to-playlist`</sub>

## `spotify.reorderOrReplacePlaylistsItems`

Update Playlist Items — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.reorderOrReplacePlaylistsItems(input: {
  uris?: (string)[];
  /** The position of the first item to be reordered.  */
  range_start?: number;
  /** The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.  */
  insert_before?: number;
  /** The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.  */
  range_length?: number;
  /** The playlist's snapshot ID against which you want to make the changes.  */
  snapshot_id?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
  [key: string]: unknown;
}, options?: { query?: { uris?: string } }): Promise<{ snapshot_id?: string }>
```

<sub>`PUT /playlists/{playlist_id}/items` · `reorder-or-replace-playlists-items`</sub>

## `spotify.removeTracksPlaylist`

Remove Playlist Items [DEPRECATED] — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.removeTracksPlaylist(input: {
  /** An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove. For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.  */
  tracks: ({ uri?: string })[];
  /** The playlist's snapshot ID against which you want to make the changes. The API will validate that the specified items exist and in the specified positions and make the changes, even if more recent changes have been made to the playlist.  */
  snapshot_id?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
}): Promise<{ snapshot_id?: string }>
```

<sub>`DELETE /playlists/{playlist_id}/tracks` · `remove-tracks-playlist`</sub>

## `spotify.getPlaylistsTracks`

Get Playlist Items [DEPRECATED] — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getPlaylistsTracks(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the total number of items and the request limit:<br/>`fields=total,limit`<br/>A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder:<br/>`fields=items(added_at,added_by.id)`<br/>Use multiple parentheses to drill down into nested objects, for example:<br/>`fields=items(track(name,href,album(name,href)))`<br/>Fields can be excluded by prefixing them with an exclamation mark, for example:<br/>`fields=items.track.album(!external_urls,images)`  */
  fields?: string;
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
  /** A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.  */
  additional_types?: string;
}): Promise<PagingPlaylistTrackObject>
```

<sub>`GET /playlists/{playlist_id}/tracks` · `get-playlists-tracks`</sub>

## `spotify.addTracksToPlaylist`

Add Items to Playlist [DEPRECATED] — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.addTracksToPlaylist(input: {
  /** A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._  */
  uris?: (string)[];
  /** The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`  */
  position?: number;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
  [key: string]: unknown;
}, options?: { query?: { position?: number; uris?: string } }): Promise<{ snapshot_id?: string }>
```

<sub>`POST /playlists/{playlist_id}/tracks` · `add-tracks-to-playlist`</sub>

## `spotify.reorderOrReplacePlaylistsTracks`

Update Playlist Items [DEPRECATED] — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.reorderOrReplacePlaylistsTracks(input: {
  uris?: (string)[];
  /** The position of the first item to be reordered.  */
  range_start?: number;
  /** The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.  */
  insert_before?: number;
  /** The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.  */
  range_length?: number;
  /** The playlist's snapshot ID against which you want to make the changes.  */
  snapshot_id?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
  [key: string]: unknown;
}, options?: { query?: { uris?: string } }): Promise<{ snapshot_id?: string }>
```

<sub>`PUT /playlists/{playlist_id}/tracks` · `reorder-or-replace-playlists-tracks`</sub>

## `spotify.getListUsersPlaylists`

Get User's Playlists — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getListUsersPlaylists(input: {
  /** The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).  */
  user_id: string;
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000\. Use with `limit` to get the next set of playlists.  */
  offset?: number;
}): Promise<PagingPlaylistObject>
```

<sub>`GET /users/{user_id}/playlists` · `get-list-users-playlists`</sub>

## `spotify.createPlaylistForUser`

Create Playlist for user — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.createPlaylistForUser(input: {
  /** The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.  */
  name: string;
  /** Defaults to `true`. The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes). For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)  */
  public?: boolean;
  /** Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._  */
  collaborative?: boolean;
  /** value for playlist description as displayed in Spotify Clients and in the Web API.  */
  description?: string;
  /** The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).  */
  user_id: string;
  [key: string]: unknown;
}): Promise<PlaylistObject>
```

<sub>`POST /users/{user_id}/playlists` · `create-playlist-for-user`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
