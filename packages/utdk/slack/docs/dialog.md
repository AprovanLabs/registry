# Dialog

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.dialogOpen`

Open a dialog with a user — [API reference](https://api.slack.com/methods/dialog.open)

```ts
slack.dialogOpen(input: {
  /** The dialog definition. This must be a JSON-encoded string. */
  dialog: string;
  /** Exchange a trigger to post to the user. */
  trigger_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`GET /dialog.open` · `dialog_open`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
