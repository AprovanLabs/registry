# Rum Replay Playlists

9 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listRumReplayPlaylists`

List RUM replay playlists — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRumReplayPlaylists(input: {
  /** Filter playlists by the UUID of the user who created them. */
  "filter[created_by_uuid]"?: string;
  /** Search query to filter playlists by name. */
  "filter[query]"?: string;
  /** Page number for pagination (0-indexed). */
  "page[number]"?: number;
  /** Number of items per page. */
  "page[size]"?: number;
}): Promise<PlaylistArray>
```

<sub>`GET /api/v2/rum/replay/playlists` · `ListRumReplayPlaylists`</sub>

## `datadog.createRumReplayPlaylist`

Create RUM replay playlist — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createRumReplayPlaylist(input: {
  data: PlaylistData;
}): Promise<Playlist>
```

<sub>`POST /api/v2/rum/replay/playlists` · `CreateRumReplayPlaylist`</sub>

## `datadog.deleteRumReplayPlaylist`

Delete RUM replay playlist — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRumReplayPlaylist(input: {
  /** Unique identifier of the playlist. */
  playlist_id: number;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/rum/replay/playlists/{playlist_id}` · `DeleteRumReplayPlaylist`</sub>

## `datadog.getRumReplayPlaylist`

Get RUM replay playlist — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRumReplayPlaylist(input: {
  /** Unique identifier of the playlist. */
  playlist_id: number;
}): Promise<Playlist>
```

<sub>`GET /api/v2/rum/replay/playlists/{playlist_id}` · `GetRumReplayPlaylist`</sub>

## `datadog.updateRumReplayPlaylist`

Update RUM replay playlist — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRumReplayPlaylist(input: {
  data: PlaylistData;
  /** Unique identifier of the playlist. */
  playlist_id: number;
}): Promise<Playlist>
```

<sub>`PUT /api/v2/rum/replay/playlists/{playlist_id}` · `UpdateRumReplayPlaylist`</sub>

## `datadog.bulkRemoveRumReplayPlaylistSessions`

Bulk remove RUM replay playlist sessions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkRemoveRumReplayPlaylistSessions(input: {
  /** Array of session identifier data objects. */
  data: (SessionIdData)[];
  /** Unique identifier of the playlist. */
  playlist_id: number;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/rum/replay/playlists/{playlist_id}/sessions` · `BulkRemoveRumReplayPlaylistSessions`</sub>

## `datadog.listRumReplayPlaylistSessions`

List RUM replay playlist sessions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRumReplayPlaylistSessions(input: {
  /** Unique identifier of the playlist. */
  playlist_id: number;
  /** Page number for pagination (0-indexed). */
  "page[number]"?: number;
  /** Number of items per page. */
  "page[size]"?: number;
}): Promise<PlaylistsSessionArray>
```

<sub>`GET /api/v2/rum/replay/playlists/{playlist_id}/sessions` · `ListRumReplayPlaylistSessions`</sub>

## `datadog.removeRumReplaySessionFromPlaylist`

Remove RUM replay session from playlist — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.removeRumReplaySessionFromPlaylist(input: {
  /** Unique identifier of the playlist. */
  playlist_id: number;
  /** Unique identifier of the session. */
  session_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/rum/replay/playlists/{playlist_id}/sessions/{session_id}` · `RemoveRumReplaySessionFromPlaylist`</sub>

## `datadog.addRumReplaySessionToPlaylist`

Add RUM replay session to playlist — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.addRumReplaySessionToPlaylist(input: {
  /** Unique identifier of the playlist. */
  playlist_id: number;
  /** Unique identifier of the session. */
  session_id: string;
  /** Data source type. Valid values: 'rum' or 'product_analytics'. Defaults to 'rum'. */
  data_source?: string;
  /** Server-side timestamp in milliseconds. */
  ts: number;
}): Promise<PlaylistsSession>
```

<sub>`PUT /api/v2/rum/replay/playlists/{playlist_id}/sessions/{session_id}` · `AddRumReplaySessionToPlaylist`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
