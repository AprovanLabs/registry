# Contact Handles

2 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.deleteContactHandle`

Delete contact handle — [Provider docs](https://community.front.com)

```ts
front.deleteContactHandle(input: {
  /** Handle used to reach the contact. */
  handle: string;
  /** Source of the handle. Can be `email`, `phone`, `twitter`, `facebook`, `intercom`, `front_chat`, or `custom`. */
  source: "twitter" | "email" | "phone" | "facebook" | "intercom" | "front_chat" | "custom";
  /** Force the deletetion of the contact if the handle is the last one */
  force?: boolean;
  /** The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_id: string;
}): Promise<undefined>
```

<sub>`DELETE /contacts/{contact_id}/handles` · `delete-contact-handle`</sub>

## `front.addContactHandle`

Add contact handle — [Provider docs](https://community.front.com)

```ts
front.addContactHandle(input: {
  /** Handle used to reach the contact. */
  handle: string;
  /** Source of the handle. Can be `email`, `phone`, `twitter`, `facebook`, `intercom`, `front_chat`, or `custom`. */
  source: "twitter" | "email" | "phone" | "facebook" | "intercom" | "front_chat" | "custom";
  /** The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  contact_id: string;
}): Promise<undefined>
```

<sub>`POST /contacts/{contact_id}/handles` · `add-contact-handle`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
