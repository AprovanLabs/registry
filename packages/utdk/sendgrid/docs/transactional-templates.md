# Transactional Templates

6 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getTemplates`

Retrieve paged transactional templates. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getTemplates(input: {
  /** Comma-delimited list specifying which generations of templates to return. Options are `legacy`, `dynamic` or `legacy,dynamic`. */
  generations?: "legacy" | "dynamic" | "legacy,dynamic";
  /** The number of templates to be returned in each page of results */
  page_size: number;
  /** A token corresponding to a specific page of results, as provided by metadata */
  page_token?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ _metadata?: Metadata; result?: (TransactionalTemplatesTemplateLean)[] }>
```

<sub>`GET /templates` · `GET_templates`</sub>

## `sendgrid.postTemplates`

Create a transactional template. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postTemplates(input: {
  /** Defines whether the template supports dynamic replacement. */
  generation?: "legacy" | "dynamic";
  /** The name for the new transactional template. */
  name: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<TransactionalTemplate>
```

<sub>`POST /templates` · `POST_templates`</sub>

## `sendgrid.deleteTemplatesTemplateId`

Delete a template. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteTemplatesTemplateId(input: {
  template_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /templates/{template_id}` · `DELETE_templates-template_id`</sub>

## `sendgrid.getTemplatesTemplateId`

Retrieve a single transactional template. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getTemplatesTemplateId(input: {
  template_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<TransactionalTemplate>
```

<sub>`GET /templates/{template_id}` · `GET_templates-template_id`</sub>

## `sendgrid.patchTemplatesTemplateId`

Edit a transactional template. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchTemplatesTemplateId(input: {
  /** The name of the transactional template. */
  name?: string;
  template_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<TransactionalTemplate>
```

<sub>`PATCH /templates/{template_id}` · `PATCH_templates-template_id`</sub>

## `sendgrid.postTemplatesTemplateId`

Duplicate a transactional template. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postTemplatesTemplateId(input: {
  /** The name for the new transactional template. */
  name?: string;
  template_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<TransactionalTemplate>
```

<sub>`POST /templates/{template_id}` · `POST_templates-template_id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
