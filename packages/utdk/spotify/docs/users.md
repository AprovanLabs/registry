# Users

10 operations · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.getCurrentUsersProfile`

Get Current User's Profile — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getCurrentUsersProfile(): Promise<PrivateUserObject>
```

<sub>`GET /me` · `get-current-users-profile`</sub>

## `spotify.unfollowArtistsUsers`

Unfollow Artists or Users — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.unfollowArtistsUsers(input: {
  /** A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
  ids?: (string)[];
  /** The ID type: either `artist` or `user`.  */
  type: "artist" | "user";
  [key: string]: unknown;
}, options: { query: { ids: string } }): Promise<undefined>
```

<sub>`DELETE /me/following` · `unfollow-artists-users`</sub>

## `spotify.getFollowed`

Get Followed Artists — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getFollowed(input: {
  /** The ID type: currently only `artist` is supported.  */
  type: "artist";
  /** The last artist ID retrieved from the previous request.  */
  after?: string;
  /** The maximum number of items to return. Default: 20\. Minimum: 1\. Maximum: 50\.  */
  limit?: number;
}): Promise<{ artists: CursorPagingSimplifiedArtistObject }>
```

<sub>`GET /me/following` · `get-followed`</sub>

## `spotify.followArtistsUsers`

Follow Artists or Users — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.followArtistsUsers(input: {
  /** A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
  ids: (string)[];
  /** The ID type.  */
  type: "artist" | "user";
  [key: string]: unknown;
}, options: { query: { ids: string } }): Promise<undefined>
```

<sub>`PUT /me/following` · `follow-artists-users`</sub>

## `spotify.checkCurrentUserFollows`

Check If User Follows Artists or Users — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.checkCurrentUserFollows(input: {
  /** The ID type: either `artist` or `user`.  */
  type: "artist" | "user";
  /** A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) to check. For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.  */
  ids: string;
}): Promise<(boolean)[]>
```

<sub>`GET /me/following/contains` · `check-current-user-follows`</sub>

## `spotify.getUsersTopArtistsAndTracks`

Get User's Top Items — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getUsersTopArtistsAndTracks(input: {
  /** The type of entity to return. Valid values: `artists` or `tracks`  */
  type: "artists" | "tracks";
  /** Over what time frame the affinities are computed. Valid values: `long_term` (calculated from ~1 year of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), `short_term` (approximately last 4 weeks). Default: `medium_term`  */
  time_range?: string;
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
}): Promise<PagingObject & { items?: (ArtistObject | TrackObject)[] }>
```

<sub>`GET /me/top/{type}` · `get-users-top-artists-and-tracks`</sub>

## `spotify.unfollowPlaylist`

Unfollow Playlist — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.unfollowPlaylist(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
}): Promise<undefined>
```

<sub>`DELETE /playlists/{playlist_id}/followers` · `unfollow-playlist`</sub>

## `spotify.followPlaylist`

Follow Playlist — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.followPlaylist(input: {
  /** Defaults to `true`. If `true` the playlist will be included in user's public playlists (added to profile), if `false` it will remain private. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)  */
  public?: boolean;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
  [key: string]: unknown;
}): Promise<undefined>
```

<sub>`PUT /playlists/{playlist_id}/followers` · `follow-playlist`</sub>

## `spotify.checkIfUserFollowsPlaylist`

Check if Current User Follows Playlist — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.checkIfUserFollowsPlaylist(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.  */
  playlist_id: string;
  /** **Deprecated** A single item list containing current user's [Spotify Username](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 1 id.  */
  ids?: string;
}): Promise<(boolean)[]>
```

<sub>`GET /playlists/{playlist_id}/followers/contains` · `check-if-user-follows-playlist`</sub>

## `spotify.getUsersProfile`

Get User's Profile — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getUsersProfile(input: {
  /** The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).  */
  user_id: string;
}): Promise<PublicUserObject>
```

<sub>`GET /users/{user_id}` · `get-users-profile`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
