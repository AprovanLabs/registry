# Message Templates

11 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.getChildTemplates`

Get child templates — [Provider docs](https://community.front.com)

```ts
front.getChildTemplates(input: {
  /** The message template folder ID */
  message_template_folder_id: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (MessageTemplateFolderResponse)[] }>
```

<sub>`GET /message_template_folders/{message_template_folder_id}/message_templates` · `get-child-templates`</sub>

## `front.createChildTemplate`

Create child template — [Provider docs](https://community.front.com)

```ts
front.createChildTemplate(input: {
  /** Name of the message template */
  name: string;
  /** Subject of the message template. */
  subject?: string;
  /** Body of the message template. You can supply HTML with inline CSS to structure and style your template. */
  body: string;
  /** The specific inboxes this template is available in. If unspecified or null, then it will be available in all inboxes. Array should be non-empty. */
  inbox_ids?: (string)[];
  /** The parent message template folder ID */
  message_template_folder_id: string;
}): Promise<MessageTemplateResponse>
```

<sub>`POST /message_template_folders/{message_template_folder_id}/message_templates` · `create-child-template`</sub>

## `front.listMessageTemplates`

List message templates — [Provider docs](https://community.front.com)

```ts
front.listMessageTemplates(input: {
  /** Field used to sort the message templates. Either `created_at`, `updated_at`, or `sort_order`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (MessageTemplateResponse)[] }>
```

<sub>`GET /message_templates` · `list-message-templates`</sub>

## `front.createMessageTemplate`

Create message template — [Provider docs](https://community.front.com)

```ts
front.createMessageTemplate(input: {
  /** Name of the message template */
  name: string;
  /** Subject of the message template. */
  subject?: string;
  /** Body of the message template. You can supply HTML with inline CSS to structure and style your template. */
  body: string;
  /** ID of the message template folder to place this message template in */
  folder_id?: string;
  /** The specific inboxes this template is available in. If unspecified or null, then it will be available in all inboxes. Array should be non-empty. */
  inbox_ids?: (string)[];
  /** Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB. */
  attachments?: (string)[];
}): Promise<MessageTemplateResponse>
```

<sub>`POST /message_templates` · `create-message-template`</sub>

## `front.deleteMessageTemplate`

Delete message template — [Provider docs](https://community.front.com)

```ts
front.deleteMessageTemplate(input: {
  /** The message template ID */
  message_template_id: string;
}): Promise<undefined>
```

<sub>`DELETE /message_templates/{message_template_id}` · `delete-message-template`</sub>

## `front.getMessageTemplate`

Get message template — [Provider docs](https://community.front.com)

```ts
front.getMessageTemplate(input: {
  /** The message template ID */
  message_template_id: string;
}): Promise<MessageTemplateResponse>
```

<sub>`GET /message_templates/{message_template_id}` · `get-message-template`</sub>

## `front.updateMessageTemplate`

Update message template — [Provider docs](https://community.front.com)

```ts
front.updateMessageTemplate(input: {
  /** The message template ID */
  message_template_id: string;
}): Promise<MessageTemplateResponse>
```

<sub>`PATCH /message_templates/{message_template_id}` · `update-message-template`</sub>

## `front.listTeammateMessageTemplates`

List teammate message templates — [Provider docs](https://community.front.com)

```ts
front.listTeammateMessageTemplates(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
  /** Field used to sort the message templates. Either `created_at`, `updated_at`, or `sort_order`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (MessageTemplateResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/message_templates` · `list-teammate-message-templates`</sub>

## `front.createTeammateMessageTemplate`

Create teammate message template — [Provider docs](https://community.front.com)

```ts
front.createTeammateMessageTemplate(input: {
  /** Name of the message template */
  name: string;
  /** Subject of the message template. */
  subject?: string;
  /** Body of the message template. You can supply HTML with inline CSS to structure and style your template. */
  body: string;
  /** ID of the message template folder to place this message template in */
  folder_id?: string;
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<MessageTemplateResponse>
```

<sub>`POST /teammates/{teammate_id}/message_templates` · `create-teammate-message-template`</sub>

## `front.listTeamMessageTemplates`

List team message templates — [Provider docs](https://community.front.com)

```ts
front.listTeamMessageTemplates(input: {
  /** The team ID */
  team_id: string;
  /** Field used to sort the message templates. Either `created_at`, `updated_at`, or `sort_order`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (MessageTemplateResponse)[] }>
```

<sub>`GET /teams/{team_id}/message_templates` · `list-team-message-templates`</sub>

## `front.createTeamMessageTemplate`

Create team message template — [Provider docs](https://community.front.com)

```ts
front.createTeamMessageTemplate(input: {
  /** Name of the message template */
  name: string;
  /** Subject of the message template. */
  subject?: string;
  /** Body of the message template. You can supply HTML with inline CSS to structure and style your template. */
  body: string;
  /** ID of the message template folder to place this message template in */
  folder_id?: string;
  /** The specific inboxes this template is available in. If unspecified or null, then it will be available in all inboxes. Array should be non-empty. */
  inbox_ids?: (string)[];
  /** Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB. */
  attachments?: (string)[];
  /** The team ID */
  team_id: string;
}): Promise<MessageTemplateResponse>
```

<sub>`POST /teams/{team_id}/message_templates` · `create-team-message-template`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
