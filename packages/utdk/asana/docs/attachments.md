# Attachments

4 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getAttachmentsForObject`

Get attachments from an object — [Provider docs](https://asana.com/support)

```ts
asana.getAttachmentsForObject(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** Globally unique identifier for object to fetch statuses from. Must be a GID for a `project`, `project_brief`, or `task`. */
  parent: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("connected_to_app" | "created_at" | "download_url" | "host" | "name" | "offset" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "path" | "permanent_url" | "resource_subtype" | "size" | "uri" | "view_url")[];
}): Promise<{ data?: (AttachmentCompact)[]; next_page?: NextPage }>
```

<sub>`GET /attachments` · `getAttachmentsForObject`</sub>

## `asana.createAttachmentForObject`

Upload an attachment — [Provider docs](https://asana.com/support)

```ts
asana.createAttachmentForObject(input: {
  /** The type of the attachment. Must be one of the given values. If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided.  */
  resource_subtype?: "asana" | "external";
  /** Required for `asana` attachments.  */
  file?: string;
  /** Required identifier of the parent task, project, or project_brief, as a string.  */
  parent: string;
  /** The URL of the external resource being attached. Required for attachments of type `external`.  */
  url?: string;
  /** The name of the external resource being attached. Required for attachments of type `external`.  */
  name?: string;
  /** *Optional*. Only relevant for external attachments with a parent task. A boolean indicating whether the current app should be connected with the attachment for the purposes of showing an app components widget. Requires the app to have been added to a project the parent task is in. This property can only be set if an OAuth token is used to authenticate the request.  Criteria for displaying app widget: 1. An OAuth token must be used to authenticate the request 2. The app needs to have its `widget_metadata_url` configured in the developer console 3. The task the attachment is being attached to must be in a project with the app installed */
  connect_to_app?: boolean;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("connected_to_app" | "created_at" | "download_url" | "host" | "name" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "permanent_url" | "resource_subtype" | "size" | "view_url")[];
}): Promise<{ data?: AttachmentResponse }>
```

<sub>`POST /attachments` · `createAttachmentForObject`</sub>

## `asana.deleteAttachment`

Delete an attachment — [Provider docs](https://asana.com/support)

```ts
asana.deleteAttachment(input: {
  /** Globally unique identifier for the attachment. */
  attachment_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /attachments/{attachment_gid}` · `deleteAttachment`</sub>

## `asana.getAttachment`

Get an attachment — [Provider docs](https://asana.com/support)

```ts
asana.getAttachment(input: {
  /** Globally unique identifier for the attachment. */
  attachment_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("connected_to_app" | "created_at" | "download_url" | "host" | "name" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "permanent_url" | "resource_subtype" | "size" | "view_url")[];
}): Promise<{ data?: AttachmentResponse }>
```

<sub>`GET /attachments/{attachment_gid}` · `getAttachment`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
