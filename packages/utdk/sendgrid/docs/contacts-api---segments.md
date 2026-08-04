# Contacts API   Segments

6 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getContactdbSegments`

Retrieve all segments — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbSegments(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ segments: (ContactdbSegments)[] }>
```

<sub>`GET /contactdb/segments` · `GET_contactdb-segments`</sub>

## `sendgrid.postContactdbSegments`

Create a Segment — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postContactdbSegments(input: {
  /** The conditions for a recipient to be included in this segment. */
  conditions: (ContactdbSegmentsConditions)[];
  /** The list id from which to make this segment. Not including this ID will mean your segment is created from the main contactdb rather than a list. */
  list_id?: number;
  /** The name of this segment. */
  name: string;
  /** The count of recipients in this list. This is not included on creation of segments. */
  recipient_count?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbSegmentsWithId>
```

<sub>`POST /contactdb/segments` · `POST_contactdb-segments`</sub>

## `sendgrid.deleteContactdbSegmentsSegmentId`

Delete a segment — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteContactdbSegmentsSegmentId(input: {
  body?: unknown;
  segment_id: string;
  /** True to delete all contacts matching the segment in addition to deleting the segment */
  delete_contacts?: boolean;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<unknown>
```

<sub>`DELETE /contactdb/segments/{segment_id}` · `DELETE_contactdb-segments-segment_id`</sub>

## `sendgrid.getContactdbSegmentsSegmentId`

Retrieve a segment — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbSegmentsSegmentId(input: {
  /** The ID of the segment you want to request. */
  segment_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbSegments>
```

<sub>`GET /contactdb/segments/{segment_id}` · `GET_contactdb-segments-segment_id`</sub>

## `sendgrid.patchContactdbSegmentsSegmentId`

Update a segment — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchContactdbSegmentsSegmentId(input: {
  /** The conditions by which this segment should be created. */
  conditions?: (ContactdbSegmentsConditions)[];
  /** The list ID you would like this segment to be built from. */
  list_id?: number;
  name: string;
  /** The ID of the segment you are updating. */
  segment_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ContactdbSegments>
```

<sub>`PATCH /contactdb/segments/{segment_id}` · `PATCH_contactdb-segments-segment_id`</sub>

## `sendgrid.getContactdbSegmentsSegmentIdRecipients`

Retrieve recipients on a segment — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getContactdbSegmentsSegmentIdRecipients(input: {
  /** The ID of the segment from which you want to retrieve recipients. */
  segment_id: number;
  page?: number;
  page_size?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ recipients: (ContactdbRecipient)[] }>
```

<sub>`GET /contactdb/segments/{segment_id}/recipients` · `GET_contactdb-segments-segment_id-recipients`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
