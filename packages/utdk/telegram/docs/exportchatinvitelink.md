# ExportChatInviteLink

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postExportchatinvitelink`

Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as *String* on success. — [API reference](https://core.telegram.org/bots/api/#exportchatinvitelink)

```ts
telegram.postExportchatinvitelink(): Promise<{ ok: boolean; result: string }>
```

<sub>`POST /exportChatInviteLink` · `post_exportchatinvitelink`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
