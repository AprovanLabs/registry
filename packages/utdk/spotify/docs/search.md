# Search

1 operation · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.search`

Search for Item — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.search(input: {
  /** Your search query.  You can narrow down your search using field filters. The available filters are `album`, `artist`, `track`, `year`, `upc`, `tag:hipster`, `tag:new`, `isrc`, and `genre`. Each field filter only applies to certain result types.  The `artist` and `year` filters can be used while searching albums, artists and tracks. You can filter on a single `year` or a range (e.g. 1955-1960).<br /> The `album` filter can be used while searching albums and tracks.<br /> The `genre` filter can be used while searching artists and tracks.<br /> The `isrc` and `track` filters can be used while searching tracks.<br /> The `upc`, `tag:new` and `tag:hipster` filters can only be used while searching albums. The `tag:new` filter will return albums released in the past two weeks and `tag:hipster` can be used to return only albums with the lowest 10% popularity.<br />  */
  q: string;
  /** A comma-separated list of item types to search across. Search results include hits from all the specified item types. For example: `q=abacab&type=album,track` returns both albums and tracks matching "abacab".  */
  type: ("album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook")[];
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** The maximum number of results to return in each item type.  */
  limit?: number;
  /** The index of the first result to return. Use with limit to get the next page of search results.  */
  offset?: number;
  /** If `include_external=audio` is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  */
  include_external?: "audio";
}): Promise<{ tracks?: PagingTrackObject; artists?: PagingArtistObject; albums?: PagingSimplifiedAlbumObject; playlists?: PagingPlaylistObject; shows?: PagingSimplifiedShowObject; episodes?: PagingSimplifiedEpisodeObject; audiobooks?: PagingSimplifiedAudiobookObject }>
```

<sub>`GET /search` · `search`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
