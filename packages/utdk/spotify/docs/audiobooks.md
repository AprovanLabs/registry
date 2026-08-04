# Audiobooks

7 operations · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.getMultipleAudiobooks`

Get Several Audiobooks — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getMultipleAudiobooks(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.  */
  ids: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
}): Promise<{ audiobooks: (AudiobookObject)[] }>
```

<sub>`GET /audiobooks` · `get-multiple-audiobooks`</sub>

## `spotify.getAnAudiobook`

Get an Audiobook — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAnAudiobook(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.  */
  id: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
}): Promise<AudiobookObject>
```

<sub>`GET /audiobooks/{id}` · `get-an-audiobook`</sub>

## `spotify.getAudiobookChapters`

Get Audiobook Chapters — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAudiobookChapters(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.  */
  id: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
}): Promise<PagingSimplifiedChapterObject>
```

<sub>`GET /audiobooks/{id}/chapters` · `get-audiobook-chapters`</sub>

## `spotify.removeAudiobooksUser`

Remove User's Saved Audiobooks — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.removeAudiobooksUser(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.  */
  ids: string;
}): Promise<undefined>
```

<sub>`DELETE /me/audiobooks` · `remove-audiobooks-user`</sub>

## `spotify.getUsersSavedAudiobooks`

Get User's Saved Audiobooks — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getUsersSavedAudiobooks(input: {
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
}): Promise<PagingSimplifiedAudiobookObject>
```

<sub>`GET /me/audiobooks` · `get-users-saved-audiobooks`</sub>

## `spotify.saveAudiobooksUser`

Save Audiobooks for Current User — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.saveAudiobooksUser(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.  */
  ids: string;
}): Promise<undefined>
```

<sub>`PUT /me/audiobooks` · `save-audiobooks-user`</sub>

## `spotify.checkUsersSavedAudiobooks`

Check User's Saved Audiobooks — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.checkUsersSavedAudiobooks(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.  */
  ids: string;
}): Promise<(boolean)[]>
```

<sub>`GET /me/audiobooks/contains` · `check-users-saved-audiobooks`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
