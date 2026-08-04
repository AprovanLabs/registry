# Segmenting Contacts

6 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getMarketingSegments`

Get List of Segments — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMarketingSegments(input: {
  /** A comma separated list of list ids to be used when searching for segments with the specified parent_list_id, no more than 50 is allowed */
  parent_list_ids?: string;
  /** If set to `true` segments with an empty value of `parent_list_id` will be returned in the filter.  If the value is not present it defaults to 'false'. */
  no_parent_list_id?: boolean;
}): Promise<{ results: (SegmentSummary)[] }>
```

<sub>`GET /marketing/segments` · `GET_marketing-segments`</sub>

## `sendgrid.postMarketingSegments`

Create Segment — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMarketingSegments(input: {
  /** Name of the segment. */
  name: string;
  /** The array of list ids to filter contacts on when building this segment. It allows only one such list id for now. We will support more in future */
  parent_list_ids?: (string)[];
  /** SQL query which will filter contacts based on the conditions provided */
  query_dsl: string;
  /** The id of the list if this segment is a child of a list.  This implies the query is rewritten as `(${query_dsl}) AND CONTAINS(list_ids, ${parent_list_id})` */
  parent_list_id?: string;
}): Promise<FullSegment>
```

<sub>`POST /marketing/segments` · `POST_marketing-segments`</sub>

## `sendgrid.deleteMarketingSegmentsSegmentId`

Delete Segment — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteMarketingSegmentsSegmentId(input: {
  segment_id: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /marketing/segments/{segment_id}` · `DELETE_marketing-segments-segment_id`</sub>

## `sendgrid.getMarketingSegmentsSegmentId`

Get Segment by ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMarketingSegmentsSegmentId(input: {
  segment_id: string;
  /** Defaults to `false`.  Set to `true` to return the parsed SQL AST as a JSON object in the field `query_json` */
  query_json?: boolean;
}): Promise<FullSegment>
```

<sub>`GET /marketing/segments/{segment_id}` · `GET_marketing-segments-segment_id`</sub>

## `sendgrid.patchMarketingSegmentsSegmentId`

Update Segment — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchMarketingSegmentsSegmentId(input: {
  /** Name of the segment. */
  name: string;
  /** The array of list ids to filter contacts on when building this segment. It allows only one such list id for now. We will support more in future */
  parent_list_ids?: (string)[];
  /** SQL query which will filter contacts based on the conditions provided */
  query_dsl: string;
  segment_id: string;
}): Promise<FullSegment>
```

<sub>`PATCH /marketing/segments/{segment_id}` · `PATCH_marketing-segments-segment_id`</sub>

## `sendgrid.postMarketingSegmentsDelete`

Bulk Delete Segments — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMarketingSegmentsDelete(input: {
  ids?: (string)[];
}): Promise<{ errors?: ({ error?: string; id?: string; resources?: { ids?: (string)[]; type?: string } })[] }>
```

<sub>`POST /marketing/segments/delete` · `POST_marketing-segments-delete`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
