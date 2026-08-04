# Issue Attachments

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.removeAttachment`

Delete attachment — [Provider docs](http://www.atlassian.com)

```ts
jira.removeAttachment(input: {
  /** The ID of the attachment. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/attachment/{id}` · `removeAttachment`</sub>

## `jira.getAttachment`

Get attachment metadata — [Provider docs](http://www.atlassian.com)

```ts
jira.getAttachment(input: {
  /** The ID of the attachment. */
  id: string;
}): Promise<AttachmentMetadata>
```

<sub>`GET /rest/api/3/attachment/{id}` · `getAttachment`</sub>

## `jira.expandAttachmentForHumans`

Get all metadata for an expanded attachment — [Provider docs](http://www.atlassian.com)

```ts
jira.expandAttachmentForHumans(input: {
  /** The ID of the attachment. */
  id: string;
}): Promise<AttachmentArchiveMetadataReadable>
```

<sub>`GET /rest/api/3/attachment/{id}/expand/human` · `expandAttachmentForHumans`</sub>

## `jira.expandAttachmentForMachines`

Get contents metadata for an expanded attachment — [Provider docs](http://www.atlassian.com)

```ts
jira.expandAttachmentForMachines(input: {
  /** The ID of the attachment. */
  id: string;
}): Promise<AttachmentArchiveImpl>
```

<sub>`GET /rest/api/3/attachment/{id}/expand/raw` · `expandAttachmentForMachines`</sub>

## `jira.getAttachmentContent`

Get attachment content — [Provider docs](http://www.atlassian.com)

```ts
jira.getAttachmentContent(input: {
  /** The ID of the attachment. */
  id: string;
  /** Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment. */
  redirect?: boolean;
}): Promise<undefined>
```

<sub>`GET /rest/api/3/attachment/content/{id}` · `getAttachmentContent`</sub>

## `jira.getAttachmentMeta`

Get Jira attachment settings — [Provider docs](http://www.atlassian.com)

```ts
jira.getAttachmentMeta(): Promise<AttachmentSettings>
```

<sub>`GET /rest/api/3/attachment/meta` · `getAttachmentMeta`</sub>

## `jira.getAttachmentThumbnail`

Get attachment thumbnail — [Provider docs](http://www.atlassian.com)

```ts
jira.getAttachmentThumbnail(input: {
  /** The ID of the attachment. */
  id: string;
  /** Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment. */
  redirect?: boolean;
  /** Whether a default thumbnail is returned when the requested thumbnail is not found. */
  fallbackToDefault?: boolean;
  /** The maximum width to scale the thumbnail to. */
  width?: number;
  /** The maximum height to scale the thumbnail to. */
  height?: number;
}): Promise<undefined>
```

<sub>`GET /rest/api/3/attachment/thumbnail/{id}` · `getAttachmentThumbnail`</sub>

## `jira.addAttachment`

Add attachment — [Provider docs](http://www.atlassian.com)

```ts
jira.addAttachment(input: {
  body: (MultipartFile)[];
  /** The ID or key of the issue that attachments are added to. */
  issueIdOrKey: string;
}): Promise<(Attachment)[]>
```

<sub>`POST /rest/api/3/issue/{issueIdOrKey}/attachments` · `addAttachment`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
