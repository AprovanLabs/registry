# On Call Paging

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createOnCallPage`

Create On-Call Page — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOnCallPage(input: {
  data?: CreatePageRequestData;
}): Promise<CreatePageResponse>
```

<sub>`POST /api/v2/on-call/pages` · `CreateOnCallPage`</sub>

## `datadog.acknowledgeOnCallPage`

Acknowledge On-Call Page — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.acknowledgeOnCallPage(input: {
  /** The page ID. */
  page_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/on-call/pages/{page_id}/acknowledge` · `AcknowledgeOnCallPage`</sub>

## `datadog.escalateOnCallPage`

Escalate On-Call Page — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.escalateOnCallPage(input: {
  /** The page ID. */
  page_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/on-call/pages/{page_id}/escalate` · `EscalateOnCallPage`</sub>

## `datadog.resolveOnCallPage`

Resolve On-Call Page — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.resolveOnCallPage(input: {
  /** The page ID. */
  page_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/on-call/pages/{page_id}/resolve` · `ResolveOnCallPage`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
