# Player

15 operations · `@utdk/spotify`

```ts
import spotify from "@utdk/spotify";
```

## `spotify.getInformationAboutTheUsersCurrentPlayback`

Get Playback State — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getInformationAboutTheUsersCurrentPlayback(input: {
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.  */
  additional_types?: string;
}): Promise<CurrentlyPlayingContextObject>
```

<sub>`GET /me/player` · `get-information-about-the-users-current-playback`</sub>

## `spotify.transferAUsersPlayback`

Transfer Playback — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.transferAUsersPlayback(input: {
  /** A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_  */
  device_ids: (string)[];
  /** **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.  */
  play?: boolean;
  [key: string]: unknown;
}): Promise<undefined>
```

<sub>`PUT /me/player` · `transfer-a-users-playback`</sub>

## `spotify.getTheUsersCurrentlyPlayingTrack`

Get Currently Playing Track — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getTheUsersCurrentlyPlayingTrack(input: {
  /** An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).   If a country code is specified, only content that is available in that market will be returned.<br/>   If a valid user access token is specified in the request header, the country associated with   the user account will take priority over this parameter.<br/>   _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>   Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).  */
  market?: string;
  /** A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/> _**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/> In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.  */
  additional_types?: string;
}): Promise<CurrentlyPlayingContextObject>
```

<sub>`GET /me/player/currently-playing` · `get-the-users-currently-playing-track`</sub>

## `spotify.getAUsersAvailableDevices`

Get Available Devices — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getAUsersAvailableDevices(): Promise<{ devices: (DeviceObject)[] }>
```

<sub>`GET /me/player/devices` · `get-a-users-available-devices`</sub>

## `spotify.skipUsersPlaybackToNextTrack`

Skip To Next — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.skipUsersPlaybackToNextTrack(input: {
  /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target. */
  device_id?: string;
}): Promise<undefined>
```

<sub>`POST /me/player/next` · `skip-users-playback-to-next-track`</sub>

## `spotify.pauseAUsersPlayback`

Pause Playback — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.pauseAUsersPlayback(input: {
  /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
  device_id?: string;
}): Promise<undefined>
```

<sub>`PUT /me/player/pause` · `pause-a-users-playback`</sub>

## `spotify.startAUsersPlayback`

Start/Resume Playback — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.startAUsersPlayback(input: {
  /** Optional. Spotify URI of the context to play. Valid contexts are albums, artists & playlists. `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`  */
  context_uri?: string;
  /** Optional. A JSON array of the Spotify track URIs to play. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`  */
  uris?: (string)[];
  /** Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object "position" is zero based and can’t be negative. Example: `"offset": {"position": 5}` "uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`  */
  offset?: { [key: string]: unknown };
  /** integer */
  position_ms?: number;
  /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target. */
  device_id?: string;
  [key: string]: unknown;
}): Promise<undefined>
```

<sub>`PUT /me/player/play` · `start-a-users-playback`</sub>

## `spotify.skipUsersPlaybackToPreviousTrack`

Skip To Previous — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.skipUsersPlaybackToPreviousTrack(input: {
  /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
  device_id?: string;
}): Promise<undefined>
```

<sub>`POST /me/player/previous` · `skip-users-playback-to-previous-track`</sub>

## `spotify.getQueue`

Get the User's Queue — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getQueue(): Promise<QueueObject>
```

<sub>`GET /me/player/queue` · `get-queue`</sub>

## `spotify.addToQueue`

Add Item to Playback Queue — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.addToQueue(input: {
  /** The uri of the item to add to the queue. Must be a track or an episode uri.  */
  uri: string;
  /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
  device_id?: string;
}): Promise<undefined>
```

<sub>`POST /me/player/queue` · `add-to-queue`</sub>

## `spotify.getRecentlyPlayed`

Get Recently Played Tracks — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.getRecentlyPlayed(input: {
  /** The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.  */
  limit?: number;
  /** A Unix timestamp in milliseconds. Returns all items after (but not including) this cursor position. If `after` is specified, `before` must not be specified.  */
  after?: number;
  /** A Unix timestamp in milliseconds. Returns all items before (but not including) this cursor position. If `before` is specified, `after` must not be specified.  */
  before?: number;
}): Promise<CursorPagingPlayHistoryObject>
```

<sub>`GET /me/player/recently-played` · `get-recently-played`</sub>

## `spotify.setRepeatModeOnUsersPlayback`

Set Repeat Mode — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.setRepeatModeOnUsersPlayback(input: {
  /** **track**, **context** or **off**.<br/> **track** will repeat the current track.<br/> **context** will repeat the current context.<br/> **off** will turn repeat off.  */
  state: string;
  /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
  device_id?: string;
}): Promise<undefined>
```

<sub>`PUT /me/player/repeat` · `set-repeat-mode-on-users-playback`</sub>

## `spotify.seekToPositionInCurrentlyPlayingTrack`

Seek To Position — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.seekToPositionInCurrentlyPlayingTrack(input: {
  /** The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.  */
  position_ms: number;
  /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
  device_id?: string;
}): Promise<undefined>
```

<sub>`PUT /me/player/seek` · `seek-to-position-in-currently-playing-track`</sub>

## `spotify.toggleShuffleForUsersPlayback`

Toggle Playback Shuffle — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.toggleShuffleForUsersPlayback(input: {
  /** **true** : Shuffle user's playback.<br/> **false** : Do not shuffle user's playback.  */
  state: boolean;
  /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
  device_id?: string;
}): Promise<undefined>
```

<sub>`PUT /me/player/shuffle` · `toggle-shuffle-for-users-playback`</sub>

## `spotify.setVolumeForUsersPlayback`

Set Playback Volume — [Provider docs](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)

```ts
spotify.setVolumeForUsersPlayback(input: {
  /** The volume to set. Must be a value from 0 to 100 inclusive.  */
  volume_percent: number;
  /** The id of the device this command is targeting. If not supplied, the user's currently active device is the target.  */
  device_id?: string;
}): Promise<undefined>
```

<sub>`PUT /me/player/volume` · `set-volume-for-users-playback`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
