# Certificates

4 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.certificatesList`

List All Certificates

```ts
digitalocean.certificatesList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** Name of expected certificate */
  name?: string;
}): Promise<{ certificates?: (Certificate)[] } & Pagination & Meta>
```

<sub>`GET /v2/certificates` · `certificates_list`</sub>

## `digitalocean.certificatesCreate`

Create a New Certificate

```ts
digitalocean.certificatesCreate(input: {
  body: CertificateRequestLetsEncrypt | CertificateRequestCustom;
}): Promise<{ certificate?: Certificate }>
```

<sub>`POST /v2/certificates` · `certificates_create`</sub>

## `digitalocean.certificatesDelete`

Delete a Certificate

```ts
digitalocean.certificatesDelete(input: {
  /** A unique identifier for a certificate. */
  certificate_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/certificates/{certificate_id}` · `certificates_delete`</sub>

## `digitalocean.certificatesGet`

Retrieve an Existing Certificate

```ts
digitalocean.certificatesGet(input: {
  /** A unique identifier for a certificate. */
  certificate_id: string;
}): Promise<{ certificate?: Certificate }>
```

<sub>`GET /v2/certificates/{certificate_id}` · `certificates_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
