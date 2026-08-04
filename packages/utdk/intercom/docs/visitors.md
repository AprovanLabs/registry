# Visitors

3 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.retrieveVisitorWithUserId`

Retrieve a visitor with User ID — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveVisitorWithUserId(input: {
  /** The user_id of the Visitor you want to retrieve. */
  user_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Visitor>
```

<sub>`GET /visitors` · `retrieveVisitorWithUserId`</sub>

## `intercom.updateVisitor`

Update a visitor — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateVisitor(input: {
  body?: UpdateVisitorRequest;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Visitor>
```

<sub>`PUT /visitors` · `updateVisitor`</sub>

## `intercom.convertVisitor`

Convert a visitor — [Provider docs](https://developers.intercom.com)

```ts
intercom.convertVisitor(input: {
  /** Represents the role of the Contact model. Accepts `lead` or `user`. */
  type: string;
  /** The unique identifiers retained after converting or merging. */
  user: unknown | unknown;
  /** The unique identifiers to convert a single Visitor. */
  visitor: unknown | unknown | unknown;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Contact>
```

<sub>`POST /visitors/convert` · `convertVisitor`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
