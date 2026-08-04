# Calls

4 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.callsAdd`

Registers a new Call. — [API reference](https://api.slack.com/methods/calls.add)

```ts
slack.callsAdd(input: {
  /** The valid Slack user ID of the user who created this Call. When this method is called with a user token, the `created_by` field is optional and defaults to the authed user of the token. Otherwise, the field is required. */
  created_by?: string;
  /** Call start time in UTC UNIX timestamp format */
  date_start?: number;
  /** When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL. */
  desktop_app_join_url?: string;
  /** An optional, human-readable ID supplied by the 3rd-party Call provider. If supplied, this ID will be displayed in the Call object. */
  external_display_id?: string;
  /** An ID supplied by the 3rd-party Call provider. It must be unique across all Calls from that service. */
  external_unique_id: string;
  /** The URL required for a client to join the Call. */
  join_url: string;
  /** The name of the Call. */
  title?: string;
  /** The list of users to register as participants in the Call. [Read more on how to specify users here](/apis/calls#users). */
  users?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /calls.add` · `calls_add`</sub>

## `slack.callsEnd`

Ends a Call. — [API reference](https://api.slack.com/methods/calls.end)

```ts
slack.callsEnd(input: {
  /** Call duration in seconds */
  duration?: number;
  /** `id` returned when registering the call using the [`calls.add`](/methods/calls.add) method. */
  id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /calls.end` · `calls_end`</sub>

## `slack.callsInfo`

Returns information about a Call. — [API reference](https://api.slack.com/methods/calls.info)

```ts
slack.callsInfo(input: {
  /** `id` of the Call returned by the [`calls.add`](/methods/calls.add) method. */
  id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /calls.info` · `calls_info`</sub>

## `slack.callsUpdate`

Updates information about a Call. — [API reference](https://api.slack.com/methods/calls.update)

```ts
slack.callsUpdate(input: {
  /** When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL. */
  desktop_app_join_url?: string;
  /** `id` returned by the [`calls.add`](/methods/calls.add) method. */
  id: string;
  /** The URL required for a client to join the Call. */
  join_url?: string;
  /** The name of the Call. */
  title?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /calls.update` · `calls_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
