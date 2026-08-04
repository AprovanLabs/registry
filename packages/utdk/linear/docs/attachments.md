# Attachments

1 operation · `@utdk/linear`

```ts
import linear from "@utdk/linear";
```

## `linear.createAttachment`

Create an attachment on an issue — [Provider docs](https://developers.linear.app)

```ts
linear.createAttachment(input: {
  /** ID of the issue to attach to */
  issueId: string;
  /** URL of the external resource */
  url: string;
  /** Display title for the attachment */
  title: string;
  /** Optional subtitle shown below the title */
  subtitle?: string;
  /** URL of the attachment icon */
  iconUrl?: string;
  /** Additional metadata for the attachment */
  metadata?: { [key: string]: unknown };
}): Promise<AttachmentPayload>
```

<sub>`POST /attachment` · `createAttachment`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
