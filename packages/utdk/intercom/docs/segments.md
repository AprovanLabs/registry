# Segments

2 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listSegments`

List all segments — [Provider docs](https://developers.intercom.com)

```ts
intercom.listSegments(input: {
  /** It includes the count of contacts that belong to each segment. */
  include_count?: boolean;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<SegmentList>
```

<sub>`GET /segments` · `listSegments`</sub>

## `intercom.retrieveSegment`

Retrieve a segment — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveSegment(input: {
  /** The unique identified of a given segment. */
  segment_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Segment>
```

<sub>`GET /segments/{segment_id}` · `retrieveSegment`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
