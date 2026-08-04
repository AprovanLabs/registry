# GetChatMember

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postGetchatmember`

Use this method to get information about a member of a chat. Returns a [ChatMember](https://core.telegram.org/bots/api/#chatmember) object on success. — [API reference](https://core.telegram.org/bots/api/#getchatmember)

```ts
telegram.postGetchatmember(): Promise<{ ok: boolean; result: { can_add_web_page_previews?: boolean; can_be_edited?: boolean; can_change_info?: boolean; can_delete_messages?: boolean; can_edit_messages?: boolean; can_invite_users?: boolean; can_pin_messages?: boolean; can_post_messages?: boolean; can_promote_members?: boolean; can_restrict_members?: boolean; can_send_media_messages?: boolean; can_send_messages?: boolean; can_send_othe...>
```

<sub>`POST /getChatMember` · `post_getchatmember`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
