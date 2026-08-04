# Designs API

9 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.listDesigns`

List Designs — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.listDesigns(input: {
  /** number of results to return */
  page_size?: number;
  /** token corresponding to a specific page of results, as provided by metadata */
  page_token?: string;
  /** set to false to return all fields */
  summary?: boolean;
}): Promise<{ _metadata?: Metadata; result?: (DesignOutputSummary)[] }>
```

<sub>`GET /designs` · `LIST-designs`</sub>

## `sendgrid.postDesigns`

Create Design — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postDesigns(input: {
  /** The editor used in the UI. */
  editor?: "code" | "design";
  /** The name of the new design. */
  name?: string;
  /** The list of categories applied to the design */
  categories?: (string)[];
  /** If true, plain_content is always generated from html_content. If false, plain_content is not altered. */
  generate_plain_content?: boolean;
  /** Subject of the Design. */
  subject?: string;
  /** The HTML content of the Design. */
  html_content: string;
  /** Plain text content of the Design. */
  plain_content?: string;
}): Promise<DesignOutput>
```

<sub>`POST /designs` · `post_designs`</sub>

## `sendgrid.deleteDesign`

Delete Design — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteDesign(input: {
  /** The ID of the Design you want to duplicate. */
  id: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /designs/{id}` · `DELETE-design`</sub>

## `sendgrid.getDesign`

Get Design — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getDesign(input: {
  /** The ID of the Design you want to duplicate. */
  id: string;
}): Promise<DesignOutput>
```

<sub>`GET /designs/{id}` · `GET-design`</sub>

## `sendgrid.putDesign`

Update Design — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.putDesign(input: {
  /** The list of categories applied to the design */
  categories?: (string)[];
  /** If true, plain_content is always generated from html_content. If false, plain_content is not altered. */
  generate_plain_content?: boolean;
  /** The HTML content of the Design. */
  html_content?: string;
  /** Name of the Design. */
  name?: string;
  /** Plain text content of the Design. */
  plain_content?: string;
  /** Subject of the Design. */
  subject?: string;
  /** The ID of the Design you want to duplicate. */
  id: string;
}): Promise<DesignOutput>
```

<sub>`PATCH /designs/{id}` · `PUT-design`</sub>

## `sendgrid.postDesign`

Duplicate Design — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postDesign(input: {
  /** The editor used in the UI. */
  editor?: "code" | "design";
  /** The name of the new design. */
  name?: string;
  /** The ID of the Design you want to duplicate. */
  id: string;
}): Promise<DesignOutput>
```

<sub>`POST /designs/{id}` · `POST-design`</sub>

## `sendgrid.listSendgridPreBuiltDesigns`

List SendGrid Pre-built Designs — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.listSendgridPreBuiltDesigns(input: {
  /** number of results to return */
  page_size?: number;
  /** token corresponding to a specific page of results, as provided by metadata */
  page_token?: string;
  /** set to false to return all fields */
  summary?: boolean;
}): Promise<{ _metadata?: Metadata; result?: (DesignOutputSummary)[] }>
```

<sub>`GET /designs/pre-builts` · `LIST-Sendgrid-Pre-built-designs`</sub>

## `sendgrid.getSendgridPreBuiltDesign`

Get SendGrid Pre-built Design — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSendgridPreBuiltDesign(input: {
  /** The ID of the pre-built Design you want to duplicate. */
  id: string;
}): Promise<DesignOutput>
```

<sub>`GET /designs/pre-builts/{id}` · `GET-sendgrid-pre-built-design`</sub>

## `sendgrid.postSendgridPreBuiltDesign`

Duplicate SendGrid Pre-built Design — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postSendgridPreBuiltDesign(input: {
  /** The editor used in the UI. */
  editor?: "code" | "design";
  /** The name of the new design. */
  name?: string;
  /** The ID of the pre-built Design you want to duplicate. */
  id: string;
}): Promise<DesignOutput>
```

<sub>`POST /designs/pre-builts/{id}` · `POST-sendgrid-pre-built-design`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
