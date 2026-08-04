# Statements

1 operation · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.getStatementPdf`

Download account statement PDF

```ts
mercury.getStatementPdf(input: {
  /** ID for the account statement */
  statementId: string;
}): Promise<PdfDocument>
```

<sub>`GET /statements/{statementId}/pdf` · `getStatementPdf`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
