# Announcements

4 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getAnnouncementsPublic`

Get announcements — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAnnouncementsPublic(input: {
  /** Filter announcements by status. */
  status?: "active" | "inactive" | "scheduled";
  /** The number of announcements to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<GetAnnouncementsPublic200Response>
```

<sub>`GET /api/v2/announcements` · `getAnnouncementsPublic`</sub>

## `launchdarkly.createAnnouncementPublic`

Create an announcement — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createAnnouncementPublic(input: {
  /** true if the announcement is dismissible */
  isDismissible: boolean;
  /** The title of the announcement */
  title: string;
  /** The message of the announcement */
  message: string;
  /** The start time of the announcement. This is a Unix timestamp in milliseconds. */
  startTime: number;
  /** The end time of the announcement. This is a Unix timestamp in milliseconds. */
  endTime?: number;
  /** The severity of the announcement */
  severity: "info" | "warning" | "critical";
}): Promise<AnnouncementResponse>
```

<sub>`POST /api/v2/announcements` · `createAnnouncementPublic`</sub>

## `launchdarkly.deleteAnnouncementPublic`

Delete an announcement — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteAnnouncementPublic(input: {
  announcementId: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/announcements/{announcementId}` · `deleteAnnouncementPublic`</sub>

## `launchdarkly.updateAnnouncementPublic`

Update an announcement — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.updateAnnouncementPublic(input: {
  body: AnnouncementJsonPatch;
  announcementId: string;
}): Promise<AnnouncementResponse>
```

<sub>`PATCH /api/v2/announcements/{announcementId}` · `updateAnnouncementPublic`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
