# Notes

4 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listCompanyNotes`

List all company notes — [Provider docs](https://developers.intercom.com)

```ts
intercom.listCompanyNotes(input: {
  /** The unique identifier for the company which is given by Intercom */
  company_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<NoteList>
```

<sub>`GET /companies/{company_id}/notes` · `listCompanyNotes`</sub>

## `intercom.listNotes`

List all notes — [Provider docs](https://developers.intercom.com)

```ts
intercom.listNotes(input: {
  /** The unique identifier of a contact. */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<NoteList>
```

<sub>`GET /contacts/{contact_id}/notes` · `listNotes`</sub>

## `intercom.createNote`

Create a note — [Provider docs](https://developers.intercom.com)

```ts
intercom.createNote(input: {
  /** The text of the note. */
  body: string;
  /** The unique identifier of a given admin. */
  admin_id?: string;
  /** The unique identifier of a given contact. */
  contact_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Note>
```

<sub>`POST /contacts/{contact_id}/notes` · `createNote`</sub>

## `intercom.retrieveNote`

Retrieve a note — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveNote(input: {
  /** The unique identifier of a given note */
  note_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Note>
```

<sub>`GET /notes/{note_id}` · `retrieveNote`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
