# Certificates

10 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listOrganizationCertificates`

List uploaded certificates for this organization. — [Provider docs](https://help.openai.com/)

```ts
openai.listOrganizationCertificates(input: {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
  order?: "asc" | "desc";
}): Promise<ListCertificatesResponse>
```

<sub>`GET /organization/certificates` · `listOrganizationCertificates`</sub>

## `openai.uploadCertificate`

Upload a certificate to the organization. This does **not** automatically activate the certificate. Organizations can upload up to 50 certificates. — [Provider docs](https://help.openai.com/)

```ts
openai.uploadCertificate(input: {
  /** An optional name for the certificate */
  name?: string;
  /** The certificate content in PEM format */
  content: string;
}): Promise<Certificate>
```

<sub>`POST /organization/certificates` · `uploadCertificate`</sub>

## `openai.deleteCertificate`

Delete a certificate from the organization. The certificate must be inactive for the organization and all projects. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteCertificate(): Promise<DeleteCertificateResponse>
```

<sub>`DELETE /organization/certificates/{certificate_id}` · `deleteCertificate`</sub>

## `openai.getCertificate`

Get a certificate that has been uploaded to the organization. You can get a certificate regardless of whether it is active or not. — [Provider docs](https://help.openai.com/)

```ts
openai.getCertificate(input: {
  /** Unique ID of the certificate to retrieve. */
  cert_id: string;
  /** A list of additional fields to include in the response. Currently the only supported value is `content` to fetch the PEM content of the certificate. */
  include?: ("content")[];
}): Promise<Certificate>
```

<sub>`GET /organization/certificates/{certificate_id}` · `getCertificate`</sub>

## `openai.modifyCertificate`

Modify a certificate. Note that only the name can be modified. — [Provider docs](https://help.openai.com/)

```ts
openai.modifyCertificate(input: {
  /** The updated name for the certificate */
  name: string;
}): Promise<Certificate>
```

<sub>`POST /organization/certificates/{certificate_id}` · `modifyCertificate`</sub>

## `openai.activateOrganizationCertificates`

Activate certificates at the organization level. You can atomically and idempotently activate up to 10 certificates at a time. — [Provider docs](https://help.openai.com/)

```ts
openai.activateOrganizationCertificates(input: {
  certificate_ids: (string)[];
}): Promise<ListCertificatesResponse>
```

<sub>`POST /organization/certificates/activate` · `activateOrganizationCertificates`</sub>

## `openai.deactivateOrganizationCertificates`

Deactivate certificates at the organization level. You can atomically and idempotently deactivate up to 10 certificates at a time. — [Provider docs](https://help.openai.com/)

```ts
openai.deactivateOrganizationCertificates(input: {
  certificate_ids: (string)[];
}): Promise<ListCertificatesResponse>
```

<sub>`POST /organization/certificates/deactivate` · `deactivateOrganizationCertificates`</sub>

## `openai.listProjectCertificates`

List certificates for this project. — [Provider docs](https://help.openai.com/)

```ts
openai.listProjectCertificates(input: {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
  order?: "asc" | "desc";
}): Promise<ListCertificatesResponse>
```

<sub>`GET /organization/projects/{project_id}/certificates` · `listProjectCertificates`</sub>

## `openai.activateProjectCertificates`

Activate certificates at the project level. You can atomically and idempotently activate up to 10 certificates at a time. — [Provider docs](https://help.openai.com/)

```ts
openai.activateProjectCertificates(input: {
  certificate_ids: (string)[];
}): Promise<ListCertificatesResponse>
```

<sub>`POST /organization/projects/{project_id}/certificates/activate` · `activateProjectCertificates`</sub>

## `openai.deactivateProjectCertificates`

Deactivate certificates at the project level. You can atomically and idempotently deactivate up to 10 certificates at a time. — [Provider docs](https://help.openai.com/)

```ts
openai.deactivateProjectCertificates(input: {
  certificate_ids: (string)[];
}): Promise<ListCertificatesResponse>
```

<sub>`POST /organization/projects/{project_id}/certificates/deactivate` · `deactivateProjectCertificates`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
