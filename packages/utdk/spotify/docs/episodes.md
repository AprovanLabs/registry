# Episodes

6 operations · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.getMultipleEpisodes`

Get Several Episodes — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getMultipleEpisodes(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.  */
  ids: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
}): Promise<{ episodes: (EpisodeObject)[] }>
```

<sub>`GET /episodes` · `get-multiple-episodes`</sub>

## `spotify.getAnEpisode`

Get Episode — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAnEpisode(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode. */
  id: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
}): Promise<EpisodeObject>
```

<sub>`GET /episodes/{id}` · `get-an-episode`</sub>

## `spotify.removeEpisodesUser`

Remove User's Saved Episodes — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.removeEpisodesUser(input: {
  /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
  ids?: (string)[];
  [key: string]: unknown;
}, options: { query: { ids: string } }): Promise<undefined>
```

<sub>`DELETE /me/episodes` · `remove-episodes-user`</sub>

## `spotify.getUsersSavedEpisodes`

Get User's Saved Episodes — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getUsersSavedEpisodes(input: {
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
}): Promise<PagingSavedEpisodeObject>
```

<sub>`GET /me/episodes` · `get-users-saved-episodes`</sub>

## `spotify.saveEpisodesUser`

Save Episodes for Current User — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.saveEpisodesUser(input: {
  /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
  ids?: (string)[];
  [key: string]: unknown;
}, options: { query: { ids: string } }): Promise<undefined>
```

<sub>`PUT /me/episodes` · `save-episodes-user`</sub>

## `spotify.checkUsersSavedEpisodes`

Check User's Saved Episodes — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.checkUsersSavedEpisodes(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.  */
  ids: string;
}): Promise<(boolean)[]>
```

<sub>`GET /me/episodes/contains` · `check-users-saved-episodes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
