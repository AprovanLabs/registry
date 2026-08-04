# UserSettings

1 operation · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getUserSettings`

List settings of an authorized user

```ts
pipedrive.getUserSettings(): Promise<{ success?: boolean } & { data?: { marketplace_team?: boolean; list_limit?: number; beta_app?: boolean; prevent_salesphone_callto_override?: boolean; file_upload_destination?: string; callto_link_syntax?: string; autofill_deal_expected_close_date?: boolean; person_duplicate_condition?: string } }>
```

<sub>`GET /userSettings` · `getUserSettings`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
