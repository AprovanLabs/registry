# Transactional Templates Versions

5 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postTemplatesTemplateIdVersions`

Create a new transactional template version. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postTemplatesTemplateIdVersions(input: {
  /** Set the version as the active version associated with the template (0 is inactive, 1 is active). Only one version of a template can be active. The first version created for a template will automatically be set to Active. */
  active?: 0 | 1;
  /** The editor used in the UI. */
  editor?: "code" | "design";
  /** If true, plain_content is always generated from html_content. If false, plain_content is not altered. */
  generate_plain_content?: boolean;
  /** The HTML content of the version. Maximum of 1048576 bytes allowed. */
  html_content?: string;
  /** Name of the transactional template version. */
  name: string;
  /** Text/plain content of the transactional template version. Maximum of 1048576 bytes allowed. */
  plain_content?: string;
  /** Subject of the new transactional template version. */
  subject: string;
  /** For dynamic templates only, the mock json data that will be used for template preview and test sends. */
  test_data?: string;
  template_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<TransactionalTemplateVersionOutput>
```

<sub>`POST /templates/{template_id}/versions` · `POST_templates-template_id-versions`</sub>

## `sendgrid.deleteTemplatesTemplateIdVersionsVersionId`

Delete a transactional template version. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteTemplatesTemplateIdVersionsVersionId(input: {
  /**  The ID of the original template */
  template_id: string;
  /** The ID of the template version */
  version_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<undefined>
```

<sub>`DELETE /templates/{template_id}/versions/{version_id}` · `DELETE_templates-template_id-versions-version_id`</sub>

## `sendgrid.getTemplatesTemplateIdVersionsVersionId`

Retrieve a specific transactional template version. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getTemplatesTemplateIdVersionsVersionId(input: {
  /**  The ID of the original template */
  template_id: string;
  /** The ID of the template version */
  version_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<TransactionalTemplateVersionOutput>
```

<sub>`GET /templates/{template_id}/versions/{version_id}` · `GET_templates-template_id-versions-version_id`</sub>

## `sendgrid.patchTemplatesTemplateIdVersionsVersionId`

Edit a transactional template version. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchTemplatesTemplateIdVersionsVersionId(input: {
  /** Set the version as the active version associated with the template (0 is inactive, 1 is active). Only one version of a template can be active. The first version created for a template will automatically be set to Active. */
  active?: 0 | 1;
  /** The editor used in the UI. */
  editor?: "code" | "design";
  /** If true, plain_content is always generated from html_content. If false, plain_content is not altered. */
  generate_plain_content?: boolean;
  /** The HTML content of the version. Maximum of 1048576 bytes allowed. */
  html_content?: string;
  /** Name of the transactional template version. */
  name: string;
  /** Text/plain content of the transactional template version. Maximum of 1048576 bytes allowed. */
  plain_content?: string;
  /** Subject of the new transactional template version. */
  subject: string;
  /** For dynamic templates only, the mock json data that will be used for template preview and test sends. */
  test_data?: string;
  /**  The ID of the original template */
  template_id: string;
  /** The ID of the template version */
  version_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<TransactionalTemplateVersionOutput>
```

<sub>`PATCH /templates/{template_id}/versions/{version_id}` · `PATCH_templates-template_id-versions-version_id`</sub>

## `sendgrid.postTemplatesTemplateIdVersionsVersionIdActivate`

Activate a transactional template version. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postTemplatesTemplateIdVersionsVersionIdActivate(input: {
  /** The ID of the original template */
  template_id: string;
  /** The ID of the template version */
  version_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<TransactionalTemplateVersionOutput>
```

<sub>`POST /templates/{template_id}/versions/{version_id}/activate` · `POST_templates-template_id-versions-version_id-activate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
