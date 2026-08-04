# Pins

3 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.pinsAdd`

Pins an item to a channel. — [API reference](https://api.slack.com/methods/pins.add)

```ts
slack.pinsAdd(input: {
  /** Channel to pin the item in. */
  channel: string;
  /** Timestamp of the message to pin. */
  timestamp?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /pins.add` · `pins_add`</sub>

## `slack.pinsList`

Lists items pinned to a channel. — [API reference](https://api.slack.com/methods/pins.list)

```ts
slack.pinsList(input: {
  /** Authentication token. Requires scope: `pins:read` */
  token: string;
  /** Channel to get pinned items for. */
  channel: string;
}): Promise<unknown>
```

<sub>`GET /pins.list` · `pins_list`</sub>

## `slack.pinsRemove`

Un-pins an item from a channel. — [API reference](https://api.slack.com/methods/pins.remove)

```ts
slack.pinsRemove(input: {
  /** Channel where the item is pinned to. */
  channel: string;
  /** Timestamp of the message to un-pin. */
  timestamp?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /pins.remove` · `pins_remove`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
