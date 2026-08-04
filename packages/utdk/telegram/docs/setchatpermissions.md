# SetChatPermissions

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postSetchatpermissions`

Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the *can\_restrict\_members* admin rights. Returns *True* on success. — [API reference](https://core.telegram.org/bots/api/#setchatpermissions)

```ts
telegram.postSetchatpermissions(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /setChatPermissions` · `post_setchatpermissions`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
