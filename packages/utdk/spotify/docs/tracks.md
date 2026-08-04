# Tracks

10 operations · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.getAudioAnalysis`

Get Track's Audio Analysis — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAudioAnalysis(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.  */
  id: string;
}): Promise<AudioAnalysisObject>
```

<sub>`GET /audio-analysis/{id}` · `get-audio-analysis`</sub>

## `spotify.getSeveralAudioFeatures`

Get Several Tracks' Audio Features — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getSeveralAudioFeatures(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the tracks. Maximum: 100 IDs.  */
  ids: string;
}): Promise<{ audio_features: (AudioFeaturesObject)[] }>
```

<sub>`GET /audio-features` · `get-several-audio-features`</sub>

## `spotify.getAudioFeatures`

Get Track's Audio Features — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAudioFeatures(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.  */
  id: string;
}): Promise<AudioFeaturesObject>
```

<sub>`GET /audio-features/{id}` · `get-audio-features`</sub>

## `spotify.removeTracksUser`

Remove User's Saved Tracks — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.removeTracksUser(input: {
  /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._  */
  ids?: (string)[];
  [key: string]: unknown;
}, options: { query: { ids: string } }): Promise<undefined>
```

<sub>`DELETE /me/tracks` · `remove-tracks-user`</sub>

## `spotify.getUsersSavedTracks`

Get User's Saved Tracks — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getUsersSavedTracks(input: {
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.  */
  offset?: number;
}): Promise<PagingSavedTrackObject>
```

<sub>`GET /me/tracks` · `get-users-saved-tracks`</sub>

## `spotify.saveTracksUser`

Save Tracks for Current User — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.saveTracksUser(input: {
  /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `timestamped_ids` is present in the body, any IDs listed in the query parameters (deprecated) or the `ids` field in the body will be ignored._  */
  ids?: (string)[];
  /** A JSON array of objects containing track IDs with their corresponding timestamps. Each object must include a track ID and an `added_at` timestamp. This allows you to specify when tracks were added to maintain a specific chronological order in the user's library.<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `timestamped_ids` is present in the body, any IDs listed in the query parameters (deprecated) or the `ids` field in the body will be ignored._  */
  timestamped_ids?: ({ id: string; added_at: string })[];
  [key: string]: unknown;
}): Promise<undefined>
```

<sub>`PUT /me/tracks` · `save-tracks-user`</sub>

## `spotify.checkUsersSavedTracks`

Check User's Saved Tracks — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.checkUsersSavedTracks(input: {
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.  */
  ids: string;
}): Promise<(boolean)[]>
```

<sub>`GET /me/tracks/contains` · `check-users-saved-tracks`</sub>

## `spotify.getRecommendations`

Get Recommendations — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getRecommendations(input: {
  /** The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20\. Minimum: 1\. Maximum: 100.  */
  limit?: number;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for seed artists.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_genres` and `seed_tracks` are not set_.  */
  seed_artists: string;
  /** A comma separated list of any genres in the set of [available genre seeds](/documentation/web-api/reference/get-recommendation-genres). Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_artists` and `seed_tracks` are not set_.  */
  seed_genres: string;
  /** A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for a seed track.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_artists` and `seed_genres` are not set_.  */
  seed_tracks: string;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_acousticness?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_acousticness?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_acousticness?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_danceability?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_danceability?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_danceability?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_duration_ms?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_duration_ms?: number;
  /** Target duration of the track (ms) */
  target_duration_ms?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_energy?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_energy?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_energy?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_instrumentalness?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_instrumentalness?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_instrumentalness?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_key?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_key?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_key?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_liveness?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_liveness?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_liveness?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_loudness?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_loudness?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_loudness?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_mode?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_mode?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_mode?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_popularity?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_popularity?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_popularity?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_speechiness?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_speechiness?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_speechiness?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_tempo?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_tempo?: number;
  /** Target tempo (BPM) */
  target_tempo?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_time_signature?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_time_signature?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_time_signature?: number;
  /** For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.  */
  min_valence?: number;
  /** For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.  */
  max_valence?: number;
  /** For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.  */
  target_valence?: number;
}): Promise<RecommendationsObject>
```

<sub>`GET /recommendations` · `get-recommendations`</sub>

## `spotify.getSeveralTracks`

Get Several Tracks — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getSeveralTracks(input: {
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.  */
  ids: string;
}): Promise<{ tracks: (TrackObject)[] }>
```

<sub>`GET /tracks` · `get-several-tracks`</sub>

## `spotify.getTrack`

Get Track — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getTrack(input: {
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.  */
  id: string;
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
}): Promise<TrackObject>
```

<sub>`GET /tracks/{id}` · `get-track`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
