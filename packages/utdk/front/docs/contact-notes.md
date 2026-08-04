# Contact Notes

2 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listNotes`

List notes — [Provider docs](https://community.front.com)

```ts
front.listNotes(input: {
  /** The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (ContactNoteResponses)[] }>
```

<sub>`GET /contacts/{contact_id}/notes` · `list-notes`</sub>

## `front.addNote`

Add note — [Provider docs](https://community.front.com)

```ts
front.addNote(input: {
  /** ID of teammate creating the note */
  author_id: string;
  /** Content of the note */
  body: string;
  /** The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_id: string;
}): Promise<ContactNoteResponses>
```

<sub>`POST /contacts/{contact_id}/notes` · `add-note`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
