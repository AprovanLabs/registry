# NoteFields

1 operation · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getNoteFields`

Get all note fields

```ts
pipedrive.getNoteFields(): Promise<{ success?: boolean } & { data?: ({ id?: number; key?: string; name?: string; field_type?: "address" | "date" | "daterange" | "double" | "enum" | "monetary" | "org" | "people" | "phone" | "set" | "text" | "time" | "timerange" | "user" | "varchar" | "varchar_auto" | "visible_to"; active_flag?: boolean; edit_flag?: boolean; bulk_edit_allowed?: boolean; mandatory_flag?: boolean; options?: ({ id?: nu...>
```

<sub>`GET /noteFields` · `getNoteFields`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
