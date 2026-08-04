# Attachments

4 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.downloadAttachmentForAComment`

Download attachment for a comment — [Provider docs](https://community.front.com)

```ts
front.downloadAttachmentForAComment(input: {
  /** The Comment ID */
  comment_id: string;
  /** The Attachment ID */
  attachment_link_id: string;
}): Promise<string>
```

<sub>`GET /comments/{comment_id}/download/{attachment_link_id}` · `download-attachment-for-a-comment`</sub>

## `front.downloadAttachment`

Download attachment — [Provider docs](https://community.front.com)

```ts
front.downloadAttachment(input: {
  /** The Attachment ID */
  attachment_link_id: string;
}): Promise<string>
```

<sub>`GET /download/{attachment_link_id}` · `download-attachment`</sub>

## `front.downloadAttachmentForAMessageTemplate`

Download attachment for a message template — [Provider docs](https://community.front.com)

```ts
front.downloadAttachmentForAMessageTemplate(input: {
  /** The Message Template ID */
  message_template_id: string;
  /** The Attachment ID */
  attachment_link_id: string;
}): Promise<string>
```

<sub>`GET /message_templates/{message_template_id}/download/{attachment_link_id}` · `download-attachment-for-a-message-template`</sub>

## `front.downloadAttachmentForAMessage`

Download attachment for a message — [Provider docs](https://community.front.com)

```ts
front.downloadAttachmentForAMessage(input: {
  /** The Message ID */
  message_id: string;
  /** The Attachment ID */
  attachment_link_id: string;
}): Promise<string>
```

<sub>`GET /messages/{message_id}/download/{attachment_link_id}` · `download-attachment-for-a-message`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
