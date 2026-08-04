# GetChat

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postGetchat`

Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a [Chat](https://core.telegram.org/bots/api/#chat) object on success. — [API reference](https://core.telegram.org/bots/api/#getchat)

```ts
telegram.postGetchat(): Promise<{ ok: boolean; result: { bio?: string; can_set_sticker_set?: boolean; description?: string; first_name?: string; id: number; invite_link?: string; last_name?: string; linked_chat_id?: number; location?: { address: string; location: { heading?: number; horizontal_accuracy?: number; latitude: number; live_period?: number; longitude: number; proximity_alert_radius?: number } }; permissions?: { can_a...>
```

<sub>`POST /getChat` · `post_getchat`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
