# ActivityFields

1 operation · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getActivityFields`

Get all activity fields

```ts
pipedrive.getActivityFields(): Promise<{ success?: boolean } & unknown & { data?: ({ id?: number | null; key?: string; name?: string; order_nr?: number; field_type?: "address" | "date" | "daterange" | "double" | "enum" | "monetary" | "org" | "people" | "phone" | "set" | "text" | "time" | "timerange" | "user" | "varchar" | "varchar_auto" | "visible_to"; add_time?: string; update_time?: string | null; last_updated_by_user_id?: number | ...>
```

<sub>`GET /activityFields` · `getActivityFields`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
