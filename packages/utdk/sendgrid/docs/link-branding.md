# Link Branding

10 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getWhitelabelLinks`

Retrieve all branded links — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getWhitelabelLinks(input: {
  /** Limits the number of results returned per page. */
  limit?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<(LinkBranding200Response)[]>
```

<sub>`GET /whitelabel/links` · `GET_whitelabel-links`</sub>

## `sendgrid.postWhitelabelLinks`

Create a branded link — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postWhitelabelLinks(input: {
  /** Indicates if you want to use this link branding as the default or fallback. When setting a new default, the existing default link branding will have its default status removed automatically. */
  default?: true | false;
  /** The root domain for the subdomain that you are creating the link branding for. This should match your FROM email address. */
  domain: string;
  /** The subdomain to create the link branding for. Must be different from the subdomain you used for authenticating your domain. */
  subdomain?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<LinkBranding200Response>
```

<sub>`POST /whitelabel/links` · `POST_whitelabel-links`</sub>

## `sendgrid.deleteWhitelabelLinksId`

Delete a branded link — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteWhitelabelLinksId(input: {
  /** The ID of the branded link you want to retrieve. */
  id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /whitelabel/links/{id}` · `DELETE_whitelabel-links-id`</sub>

## `sendgrid.getWhitelabelLinksId`

Retrieve a branded link — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getWhitelabelLinksId(input: {
  /** The ID of the branded link you want to retrieve. */
  id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<LinkBranding200Response>
```

<sub>`GET /whitelabel/links/{id}` · `GET_whitelabel-links-id`</sub>

## `sendgrid.patchWhitelabelLinksId`

Update a branded link — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchWhitelabelLinksId(input: {
  /** Indicates if the branded link is set as the default. When setting a new default, the existing default link branding will have its default status removed automatically. */
  default?: true | false;
  /** The ID of the branded link you want to retrieve. */
  id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<LinkBranding200Response>
```

<sub>`PATCH /whitelabel/links/{id}` · `PATCH_whitelabel-links-id`</sub>

## `sendgrid.postWhitelabelLinksIdValidate`

Validate a branded link — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postWhitelabelLinksIdValidate(input: {
  /** The ID of the branded link that you want to validate. */
  id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ id: number; valid: true | false; validation_results: { domain_cname: { reason: string | null; valid: true | false }; owner_cname?: { reason: string | null; valid: true | false } } }>
```

<sub>`POST /whitelabel/links/{id}/validate` · `POST_whitelabel-links-id-validate`</sub>

## `sendgrid.postWhitelabelLinksLinkIdSubuser`

Associate a branded link with a subuser — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postWhitelabelLinksLinkIdSubuser(input: {
  /** The username of the subuser account that you want to associate the branded link with. */
  username?: string;
  /** The ID of the branded link you want to associate. */
  link_id: number;
}): Promise<LinkBranding200Response>
```

<sub>`POST /whitelabel/links/{link_id}/subuser` · `POST_whitelabel-links-link_id-subuser`</sub>

## `sendgrid.getWhitelabelLinksDefault`

Retrieve the default branded link — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getWhitelabelLinksDefault(input: {
  /** The domain to match against when finding the default branded link. */
  domain?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<LinkBranding200Response>
```

<sub>`GET /whitelabel/links/default` · `GET_whitelabel-links-default`</sub>

## `sendgrid.deleteWhitelabelLinksSubuser`

Disassociate a branded link from a subuser — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteWhitelabelLinksSubuser(input: {
  /** The username of the subuser account that you want to disassociate a branded link from. */
  username: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /whitelabel/links/subuser` · `DELETE_whitelabel-links-subuser`</sub>

## `sendgrid.getWhitelabelLinksSubuser`

Retrieve a subuser's branded link — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getWhitelabelLinksSubuser(input: {
  /** The username of the subuser to retrieve associated branded links for. */
  username: string;
}): Promise<LinkBranding200Response>
```

<sub>`GET /whitelabel/links/subuser` · `GET_whitelabel-links-subuser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
