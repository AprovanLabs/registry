# SAFEs

3 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.getSafeRequests`

Get all SAFEs

```ts
mercury.getSafeRequests(): Promise<(ApiSafeRequest)[]>
```

<sub>`GET /safes` · `getSafeRequests`</sub>

## `mercury.getSafeRequest`

Get SAFE by ID

```ts
mercury.getSafeRequest(input: {
  /** ID for the SAFE request */
  safeRequestId: string;
}): Promise<ApiSafeRequest>
```

<sub>`GET /safes/{safeRequestId}` · `getSafeRequest`</sub>

## `mercury.getSafeRequestDocument`

Download SAFE document

```ts
mercury.getSafeRequestDocument(input: {
  /** ID for the SAFE request */
  safeRequestId: string;
}): Promise<PdfDocument>
```

<sub>`GET /safes/{safeRequestId}/document` · `getSafeRequestDocument`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
