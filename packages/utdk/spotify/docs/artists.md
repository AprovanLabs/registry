# Artists

5 operations · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.getMultipleArtists`

Get Several Artists — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getMultipleArtists(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the artists. Maximum: 50 IDs.  */
  ids: string;
}): Promise<{ artists: (ArtistObject)[] }>
```

<sub>`GET /artists` · `get-multiple-artists`</sub>

## `spotify.getAnArtist`

Get Artist — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAnArtist(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.  */
  id: string;
}): Promise<ArtistObject>
```

<sub>`GET /artists/{id}` · `get-an-artist`</sub>

## `spotify.getAnArtistsAlbums`

Get Artist's Albums — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAnArtistsAlbums(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.  */
  id: string;
  /** A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. <br/> Valid values are:<br/>- `album`<br/>- `single`<br/>- `appears_on`<br/>- `compilation`<br/>For example: `include_groups=album,single`.  */
  include_groups?: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** The maximum number of items to return. Default: 5. Minimum: 1. Maximum: 10.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
}): Promise<PagingArtistDiscographyAlbumObject>
```

<sub>`GET /artists/{id}/albums` · `get-an-artists-albums`</sub>

## `spotify.getAnArtistsRelatedArtists`

Get Artist's Related Artists — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAnArtistsRelatedArtists(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.  */
  id: string;
}): Promise<{ artists: (ArtistObject)[] }>
```

<sub>`GET /artists/{id}/related-artists` · `get-an-artists-related-artists`</sub>

## `spotify.getAnArtistsTopTracks`

Get Artist's Top Tracks — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAnArtistsTopTracks(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.  */
  id: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
}): Promise<{ tracks: (TrackObject)[] }>
```

<sub>`GET /artists/{id}/top-tracks` · `get-an-artists-top-tracks`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
