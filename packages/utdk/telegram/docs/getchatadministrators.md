# GetChatAdministrators

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postGetchatadministrators`

Use this method to get a list of administrators in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api/#chatmember) objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned. — [API reference](https://core.telegram.org/bots/api/#getchatadministrators)

```ts
telegram.postGetchatadministrators(): Promise<{ ok: boolean; result: ({ can_add_web_page_previews?: boolean; can_be_edited?: boolean; can_change_info?: boolean; can_delete_messages?: boolean; can_edit_messages?: boolean; can_invite_users?: boolean; can_pin_messages?: boolean; can_post_messages?: boolean; can_promote_members?: boolean; can_restrict_members?: boolean; can_send_media_messages?: boolean; can_send_messages?: boolean; can_send_oth...>
```

<sub>`POST /getChatAdministrators` · `post_getchatadministrators`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
