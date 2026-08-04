# Albums

8 operations · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.getMultipleAlbums`

Get Several Albums — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getMultipleAlbums(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.  */
  ids: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
}): Promise<{ albums: (AlbumObject)[] }>
```

<sub>`GET /albums` · `get-multiple-albums`</sub>

## `spotify.getAnAlbum`

Get Album — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAnAlbum(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.  */
  id: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
}): Promise<AlbumObject>
```

<sub>`GET /albums/{id}` · `get-an-album`</sub>

## `spotify.getAnAlbumsTracks`

Get Album Tracks — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAnAlbumsTracks(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.  */
  id: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
}): Promise<PagingSimplifiedTrackObject>
```

<sub>`GET /albums/{id}/tracks` · `get-an-albums-tracks`</sub>

## `spotify.getNewReleases`

Get New Releases — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getNewReleases(input: {
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
}): Promise<{ albums: PagingSimplifiedAlbumObject }>
```

<sub>`GET /browse/new-releases` · `get-new-releases`</sub>

## `spotify.removeAlbumsUser`

Remove Users' Saved Albums — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.removeAlbumsUser(input: {
  /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
  ids?: (string)[];
  [key: string]: unknown;
}, options: { query: { ids: string } }): Promise<undefined>
```

<sub>`DELETE /me/albums` · `remove-albums-user`</sub>

## `spotify.getUsersSavedAlbums`

Get User's Saved Albums — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getUsersSavedAlbums(input: {
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
}): Promise<PagingSavedAlbumObject>
```

<sub>`GET /me/albums` · `get-users-saved-albums`</sub>

## `spotify.saveAlbumsUser`

Save Albums for Current User — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.saveAlbumsUser(input: {
  /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
  ids?: (string)[];
  [key: string]: unknown;
}, options: { query: { ids: string } }): Promise<undefined>
```

<sub>`PUT /me/albums` · `save-albums-user`</sub>

## `spotify.checkUsersSavedAlbums`

Check User's Saved Albums — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.checkUsersSavedAlbums(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.  */
  ids: string;
}): Promise<(boolean)[]>
```

<sub>`GET /me/albums/contains` · `check-users-saved-albums`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
