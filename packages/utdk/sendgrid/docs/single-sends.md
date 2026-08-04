# Single Sends

11 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.deleteMarketingSinglesends`

Bulk Delete Single Sends — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteMarketingSinglesends(input: {
  /** Single Send IDs to delete */
  ids?: (string)[];
}): Promise<undefined>
```

<sub>`DELETE /marketing/singlesends` · `DELETE_marketing-singlesends`</sub>

## `sendgrid.getMarketingSinglesends`

Get All Single Sends — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMarketingSinglesends(input: {
  page_size?: number;
  page_token?: string;
}): Promise<{ _metadata?: Metadata; result?: (SinglesendResponseShort)[] }>
```

<sub>`GET /marketing/singlesends` · `GET_marketing-singlesends`</sub>

## `sendgrid.postMarketingSinglesends`

Create Single Send — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMarketingSinglesends(input: {
  /** The categories to associate with this Single Send. */
  categories?: (string)[];
  email_config?: { custom_unsubscribe_url?: string | null; design_id?: string; editor?: "code" | "design"; generate_plain_content?: boolean; html_content?: string; ip_pool?: string | null; plain_content?: string; sender_id?: number | null; subject?: string; suppression_group_id?: number | null };
  /** The name of the Single Send. */
  name: string;
  /** The ISO 8601 time at which to send the Single Send — this must be set for a future time. */
  send_at?: string;
  send_to?: { all?: boolean; list_ids?: (string)[]; segment_ids?: (string)[] };
}): Promise<SinglesendResponse>
```

<sub>`POST /marketing/singlesends` · `POST_marketing-singlesends`</sub>

## `sendgrid.deleteMarketingSinglesendsId`

Delete Single Send by ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteMarketingSinglesendsId(input: {
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /marketing/singlesends/{id}` · `DELETE_marketing-singlesends-id`</sub>

## `sendgrid.getMarketingSinglesendsId`

Get Single Send by ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMarketingSinglesendsId(input: {
  id: string;
}): Promise<SinglesendResponse>
```

<sub>`GET /marketing/singlesends/{id}` · `GET_marketing-singlesends-id`</sub>

## `sendgrid.patchMarketingSinglesendsId`

Update Single Send — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchMarketingSinglesendsId(input: {
  /** The categories to associate with this Single Send. */
  categories?: (string)[];
  email_config?: { custom_unsubscribe_url?: string | null; design_id?: string; editor?: "code" | "design"; generate_plain_content?: boolean; html_content?: string; ip_pool?: string | null; plain_content?: string; sender_id?: number | null; subject?: string; suppression_group_id?: number | null };
  /** The name of the Single Send. */
  name: string;
  /** The ISO 8601 time at which to send the Single Send — this must be set for a future time. */
  send_at?: string;
  send_to?: { all?: boolean; list_ids?: (string)[]; segment_ids?: (string)[] };
  id: string;
}): Promise<SinglesendResponse>
```

<sub>`PATCH /marketing/singlesends/{id}` · `PATCH_marketing-singlesends-id`</sub>

## `sendgrid.postMarketingSinglesendsId`

Duplicate Single Send — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMarketingSinglesendsId(input: {
  /** The name of the duplicate Single Send. If you choose to leave the name field blank, your duplicate will be assigned the name of the Single Send it was copied from with the text 'Copy of ' prepended to it. The end of the new Single Send name, including 'Copy of ', will be trimmed if the name exceeds the character limit. */
  name?: string;
  id: string;
}): Promise<SinglesendResponse>
```

<sub>`POST /marketing/singlesends/{id}` · `POST_marketing-singlesends-id`</sub>

## `sendgrid.deleteMarketingSinglesendsIdSchedule`

Delete Single Send Schedule — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteMarketingSinglesendsIdSchedule(input: {
  id: string;
}): Promise<SinglesendSchedule>
```

<sub>`DELETE /marketing/singlesends/{id}/schedule` · `DELETE_marketing-singlesends-id-schedule`</sub>

## `sendgrid.putMarketingSinglesendsIdSchedule`

Schedule Single Send — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.putMarketingSinglesendsIdSchedule(input: {
  /** This is the ISO 8601 time at which to send the Single Send; must be in future, or the string "now" */
  send_at: "now";
  id: string;
}): Promise<{ send_at?: string; status?: "scheduled" }>
```

<sub>`PUT /marketing/singlesends/{id}/schedule` · `PUT_marketing-singlesends-id-schedule`</sub>

## `sendgrid.getMarketingSinglesendsCategories`

Get All Categories — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMarketingSinglesendsCategories(): Promise<{ categories?: (string)[] }>
```

<sub>`GET /marketing/singlesends/categories` · `GET_marketing-singlesends-categories`</sub>

## `sendgrid.postMarketingSinglesendsSearch`

Get Single Sends Search — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMarketingSinglesendsSearch(input: {
  /** categories to associate with this Single Send, match any single send that has at least one of the categories */
  categories?: (string)[];
  /** leading and trailing wildcard search on name of the Single Send */
  name?: string;
  /** current status of the Single Send */
  status?: ("draft" | "scheduled" | "triggered")[];
  page_size?: number;
  page_token?: string;
}): Promise<{ _metadata?: Metadata; result?: (SinglesendResponseShort)[] }>
```

<sub>`POST /marketing/singlesends/search` · `POST_marketing-singlesends-search`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
