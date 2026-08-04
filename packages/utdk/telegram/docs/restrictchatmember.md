# RestrictChatMember

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postRestrictchatmember`

Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass *True* for all permissions to lift restrictions from a user. Returns *True* on success. — [API reference](https://core.telegram.org/bots/api/#restrictchatmember)

```ts
telegram.postRestrictchatmember(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /restrictChatMember` · `post_restrictchatmember`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
