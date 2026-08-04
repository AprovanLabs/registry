# Chapters

2 operations · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.getSeveralChapters`

Get Several Chapters — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getSeveralChapters(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU`. Maximum: 50 IDs.  */
  ids: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
}): Promise<{ chapters: (ChapterObject)[] }>
```

<sub>`GET /chapters` · `get-several-chapters`</sub>

## `spotify.getAChapter`

Get a Chapter — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAChapter(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.  */
  id: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
}): Promise<ChapterObject>
```

<sub>`GET /chapters/{id}` · `get-a-chapter`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
