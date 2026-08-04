# Custom Fields

7 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listAccountCustomFields`

List Account's custom fields — [Provider docs](https://community.front.com)

```ts
front.listAccountCustomFields(): Promise<{ _links?: { self?: string }; _results?: (CustomFieldResponse)[] }>
```

<sub>`GET /accounts/custom_fields` · `list-account-custom-fields`</sub>

## `front.listContactCustomFields`

List Contact's custom fields — [Provider docs](https://community.front.com)

```ts
front.listContactCustomFields(): Promise<{ _links?: { self?: string }; _results?: (CustomFieldResponse)[] }>
```

<sub>`GET /contacts/custom_fields` · `list-contact-custom-fields`</sub>

## `front.listConversationCustomFields`

List Conversation's custom fields — [Provider docs](https://community.front.com)

```ts
front.listConversationCustomFields(): Promise<{ _links?: { self?: string }; _results?: (CustomFieldResponse)[] }>
```

<sub>`GET /conversations/custom_fields` · `list-conversation-custom-fields`</sub>

## `front.listCustomFields`

List Contact's custom fields — [Provider docs](https://community.front.com)

```ts
front.listCustomFields(): Promise<{ _links?: { self?: string }; _results?: (CustomFieldResponse)[] }>
```

<sub>`GET /custom_fields` · `list-custom-fields`</sub>

## `front.listInboxCustomFields`

List Inbox's custom fields — [Provider docs](https://community.front.com)

```ts
front.listInboxCustomFields(): Promise<{ _links?: { self?: string }; _results?: (CustomFieldResponse)[] }>
```

<sub>`GET /inboxes/custom_fields` · `list-inbox-custom-fields`</sub>

## `front.listLinkCustomFields`

List Link's custom fields — [Provider docs](https://community.front.com)

```ts
front.listLinkCustomFields(): Promise<{ _links?: { self?: string }; _results?: (CustomFieldResponse)[] }>
```

<sub>`GET /links/custom_fields` · `list-link-custom-fields`</sub>

## `front.listTeammateCustomFields`

List Teammate's custom fields — [Provider docs](https://community.front.com)

```ts
front.listTeammateCustomFields(): Promise<{ _links?: { self?: string }; _results?: (CustomFieldResponse)[] }>
```

<sub>`GET /teammates/custom_fields` · `list-teammate-custom-fields`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
