# Rum Replay Heatmaps

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listReplayHeatmapSnapshots`

List replay heatmap snapshots — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listReplayHeatmapSnapshots(input: {
  /** Device type to filter snapshots. */
  "filter[device_type]"?: string;
  /** View name to filter snapshots. */
  "filter[view_name]": string;
  /** Maximum number of snapshots to return. */
  "page[limit]"?: number;
  /** Filter by application ID. */
  "filter[application_id]"?: string;
}): Promise<SnapshotArray>
```

<sub>`GET /api/v2/replay/heatmap/snapshots` · `ListReplayHeatmapSnapshots`</sub>

## `datadog.createReplayHeatmapSnapshot`

Create replay heatmap snapshot — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createReplayHeatmapSnapshot(input: {
  data: SnapshotCreateRequestData;
}): Promise<Snapshot>
```

<sub>`POST /api/v2/replay/heatmap/snapshots` · `CreateReplayHeatmapSnapshot`</sub>

## `datadog.deleteReplayHeatmapSnapshot`

Delete replay heatmap snapshot — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteReplayHeatmapSnapshot(input: {
  /** Unique identifier of the heatmap snapshot. */
  snapshot_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/replay/heatmap/snapshots/{snapshot_id}` · `DeleteReplayHeatmapSnapshot`</sub>

## `datadog.updateReplayHeatmapSnapshot`

Update replay heatmap snapshot — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateReplayHeatmapSnapshot(input: {
  data: SnapshotUpdateRequestData;
  /** Unique identifier of the heatmap snapshot. */
  snapshot_id: string;
}): Promise<Snapshot>
```

<sub>`PATCH /api/v2/replay/heatmap/snapshots/{snapshot_id}` · `UpdateReplayHeatmapSnapshot`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
