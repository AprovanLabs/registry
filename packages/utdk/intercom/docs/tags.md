# Tags

10 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.attachTagToContact`

Add tag to a contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.attachTagToContact(input: {
  /** The unique identifier for the tag which is given by Intercom */
  id: string;
  /** The unique identifier for the contact which is given by Intercom */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Tag>
```

<sub>`POST /contacts/{contact_id}/tags` · `attachTagToContact`</sub>

## `intercom.detachTagFromContact`

Remove tag from a contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.detachTagFromContact(input: {
  /** The unique identifier for the contact which is given by Intercom */
  contact_id: string;
  /** The unique identifier for the tag which is given by Intercom */
  tag_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Tag>
```

<sub>`DELETE /contacts/{contact_id}/tags/{tag_id}` · `detachTagFromContact`</sub>

## `intercom.attachTagToConversation`

Add tag to a conversation — [Provider docs](https://developers.intercom.com)

```ts
intercom.attachTagToConversation(input: {
  /** The unique identifier for the tag which is given by Intercom */
  id: string;
  /** The unique identifier for the admin which is given by Intercom. */
  admin_id: string;
  /** conversation_id */
  conversation_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Tag>
```

<sub>`POST /conversations/{conversation_id}/tags` · `attachTagToConversation`</sub>

## `intercom.detachTagFromConversation`

Remove tag from a conversation — [Provider docs](https://developers.intercom.com)

```ts
intercom.detachTagFromConversation(input: {
  /** The unique identifier for the admin which is given by Intercom. */
  admin_id: string;
  /** conversation_id */
  conversation_id: string;
  /** tag_id */
  tag_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Tag>
```

<sub>`DELETE /conversations/{conversation_id}/tags/{tag_id}` · `detachTagFromConversation`</sub>

## `intercom.listTags`

List all tags — [Provider docs](https://developers.intercom.com)

```ts
intercom.listTags(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TagList>
```

<sub>`GET /tags` · `listTags`</sub>

## `intercom.createTag`

Create or update a tag, Tag or untag companies, Tag contacts — [Provider docs](https://developers.intercom.com)

```ts
intercom.createTag(input: {
  body?: CreateOrUpdateTagRequest | TagCompanyRequest | UntagCompanyRequest | TagMultipleUsersRequest;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TagBasic>
```

<sub>`POST /tags` · `createTag`</sub>

## `intercom.deleteTag`

Delete tag — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteTag(input: {
  /** The unique identifier of a given tag */
  tag_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<undefined>
```

<sub>`DELETE /tags/{tag_id}` · `deleteTag`</sub>

## `intercom.findTag`

Find a specific tag — [Provider docs](https://developers.intercom.com)

```ts
intercom.findTag(input: {
  /** The unique identifier of a given tag */
  tag_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TagBasic>
```

<sub>`GET /tags/{tag_id}` · `findTag`</sub>

## `intercom.attachTagToTicket`

Add tag to a ticket — [Provider docs](https://developers.intercom.com)

```ts
intercom.attachTagToTicket(input: {
  /** The unique identifier for the tag which is given by Intercom */
  id: string;
  /** The unique identifier for the admin which is given by Intercom. */
  admin_id: string;
  /** ticket_id */
  ticket_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Tag>
```

<sub>`POST /tickets/{ticket_id}/tags` · `attachTagToTicket`</sub>

## `intercom.detachTagFromTicket`

Remove tag from a ticket — [Provider docs](https://developers.intercom.com)

```ts
intercom.detachTagFromTicket(input: {
  /** The unique identifier for the admin which is given by Intercom. */
  admin_id: string;
  /** ticket_id */
  ticket_id: string;
  /** The unique identifier for the tag which is given by Intercom */
  tag_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Tag>
```

<sub>`DELETE /tickets/{ticket_id}/tags/{tag_id}` · `detachTagFromTicket`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
