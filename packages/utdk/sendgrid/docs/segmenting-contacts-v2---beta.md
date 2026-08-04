# Segmenting Contacts V2   Beta

5 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getSegments`

Get List of Segments — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSegments(input: {
  /** A comma separated list up to 50 in size, to filter segments on.  Only segments that have any of these list ids as the parent list will be retrieved. This is different from the parameter of the same name used when creating a segment. */
  parent_list_ids?: string;
  /** If set to `true` segments with an empty value of `parent_list_id` will be returned in the filter.  If the value is not present it defaults to 'false'. */
  no_parent_list_id?: boolean;
}): Promise<AllSegmentsResponse>
```

<sub>`GET /marketing/segments/2.0` · `GET_segments`</sub>

## `sendgrid.postSegments`

Create Segment — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postSegments(input: {
  /** Name of the segment. */
  name: string;
  /** The array of list ids to filter contacts on when building this segment. It allows only one such list id for now. We will support more in future */
  parent_list_ids?: (string)[];
  /** SQL query which will filter contacts based on the conditions provided */
  query_dsl: string;
}): Promise<SegmentResponse>
```

<sub>`POST /marketing/segments/2.0` · `POST_segments`</sub>

## `sendgrid.deleteSegmentsSegmentId`

Delete segment — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSegmentsSegmentId(input: {
  segment_id: string;
}): Promise<undefined>
```

<sub>`DELETE /marketing/segments/2.0/{segment_id}` · `DELETE_segments-segment_id`</sub>

## `sendgrid.getSegmentsSegmentId`

Get Segment by ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSegmentsSegmentId(input: {
  segment_id: string;
  /** Defaults to `true`. Set to `false` to exclude the contacts_sample in the response. */
  contacts_sample?: boolean;
}): Promise<SegmentResponse>
```

<sub>`GET /marketing/segments/2.0/{segment_id}` · `GET_segments-segment_id`</sub>

## `sendgrid.patchSegmentsSegmentId`

Update Segment — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchSegmentsSegmentId(input: {
  /** Name of the segment. */
  name?: string;
  /** SQL query which will filter contacts based on the conditions provided */
  query_dsl?: string;
  segment_id: string;
}): Promise<SegmentResponse>
```

<sub>`PATCH /marketing/segments/2.0/{segment_id}` · `PATCH_segments-segment_id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
