# News

8 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listNewsItems`

List all news items — [Provider docs](https://developers.intercom.com)

```ts
intercom.listNewsItems(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<PaginatedResponse>
```

<sub>`GET /news/news_items` · `listNewsItems`</sub>

## `intercom.createNewsItem`

Create a news item — [Provider docs](https://developers.intercom.com)

```ts
intercom.createNewsItem(input: {
  /** The title of the news item. */
  title: string;
  /** The news item body, which may contain HTML. */
  body?: string;
  /** The id of the sender of the news item. Must be a teammate on the workspace. */
  sender_id: number;
  /** News items will not be visible to your users in the assigned newsfeeds until they are set live. */
  state?: "draft" | "live";
  /** When set to `true`, the news item will appear in the messenger newsfeed without showing a notification badge. */
  deliver_silently?: boolean;
  /** Label names displayed to users to categorize the news item. */
  labels?: (string)[];
  /** Ordered list of emoji reactions to the news item. When empty, reactions are disabled. */
  reactions?: (string | null)[];
  /** A list of newsfeed_assignments to assign to the specified newsfeed. */
  newsfeed_assignments?: (NewsfeedAssignment)[];
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<NewsItem>
```

<sub>`POST /news/news_items` · `createNewsItem`</sub>

## `intercom.deleteNewsItem`

Delete a news item — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteNewsItem(input: {
  /** The unique identifier for the news item which is given by Intercom. */
  news_item_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DeletedObject>
```

<sub>`DELETE /news/news_items/{news_item_id}` · `deleteNewsItem`</sub>

## `intercom.retrieveNewsItem`

Retrieve a news item — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveNewsItem(input: {
  /** The unique identifier for the news item which is given by Intercom. */
  news_item_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<NewsItem>
```

<sub>`GET /news/news_items/{news_item_id}` · `retrieveNewsItem`</sub>

## `intercom.updateNewsItem`

Update a news item — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateNewsItem(input: {
  /** The title of the news item. */
  title: string;
  /** The news item body, which may contain HTML. */
  body?: string;
  /** The id of the sender of the news item. Must be a teammate on the workspace. */
  sender_id: number;
  /** News items will not be visible to your users in the assigned newsfeeds until they are set live. */
  state?: "draft" | "live";
  /** When set to `true`, the news item will appear in the messenger newsfeed without showing a notification badge. */
  deliver_silently?: boolean;
  /** Label names displayed to users to categorize the news item. */
  labels?: (string)[];
  /** Ordered list of emoji reactions to the news item. When empty, reactions are disabled. */
  reactions?: (string | null)[];
  /** A list of newsfeed_assignments to assign to the specified newsfeed. */
  newsfeed_assignments?: (NewsfeedAssignment)[];
  /** The unique identifier for the news item which is given by Intercom. */
  news_item_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<NewsItem>
```

<sub>`PUT /news/news_items/{news_item_id}` · `updateNewsItem`</sub>

## `intercom.listNewsfeeds`

List all newsfeeds — [Provider docs](https://developers.intercom.com)

```ts
intercom.listNewsfeeds(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<PaginatedResponse>
```

<sub>`GET /news/newsfeeds` · `listNewsfeeds`</sub>

## `intercom.retrieveNewsfeed`

Retrieve a newsfeed — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveNewsfeed(input: {
  /** The unique identifier for the news feed item which is given by Intercom. */
  newsfeed_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Newsfeed>
```

<sub>`GET /news/newsfeeds/{newsfeed_id}` · `retrieveNewsfeed`</sub>

## `intercom.listLiveNewsfeedItems`

List all live newsfeed items — [Provider docs](https://developers.intercom.com)

```ts
intercom.listLiveNewsfeedItems(input: {
  /** The unique identifier for the news feed item which is given by Intercom. */
  newsfeed_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<PaginatedResponse>
```

<sub>`GET /news/newsfeeds/{newsfeed_id}/items` · `listLiveNewsfeedItems`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
