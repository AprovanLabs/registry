# Views

4 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.viewsOpen`

Open a view for a user. — [API reference](https://api.slack.com/methods/views.open)

```ts
slack.viewsOpen(input: {
  /** Exchange a trigger to post to the user. */
  trigger_id: string;
  /** A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. */
  view: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /views.open` · `views_open`</sub>

## `slack.viewsPublish`

Publish a static view for a User. — [API reference](https://api.slack.com/methods/views.publish)

```ts
slack.viewsPublish(input: {
  /** `id` of the user you want publish a view to. */
  user_id: string;
  /** A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. */
  view: string;
  /** A string that represents view state to protect against possible race conditions. */
  hash?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /views.publish` · `views_publish`</sub>

## `slack.viewsPush`

Push a view onto the stack of a root view. — [API reference](https://api.slack.com/methods/views.push)

```ts
slack.viewsPush(input: {
  /** Exchange a trigger to post to the user. */
  trigger_id: string;
  /** A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. */
  view: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /views.push` · `views_push`</sub>

## `slack.viewsUpdate`

Update an existing view. — [API reference](https://api.slack.com/methods/views.update)

```ts
slack.viewsUpdate(input: {
  /** A unique identifier of the view to be updated. Either `view_id` or `external_id` is required. */
  view_id?: string;
  /** A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either `view_id` or `external_id` is required. */
  external_id?: string;
  /** A [view object](/reference/surfaces/views). This must be a JSON-encoded string. */
  view?: string;
  /** A string that represents view state to protect against possible race conditions. */
  hash?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /views.update` · `views_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
