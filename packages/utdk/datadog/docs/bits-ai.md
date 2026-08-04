# Bits AI

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listInvestigations`

List Bits AI investigations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listInvestigations(input: {
  /** Offset for pagination. */
  "page[offset]"?: number;
  /** Maximum number of investigations to return. */
  "page[limit]"?: number;
  /** Filter investigations by monitor ID. */
  "filter[monitor_id]"?: number;
}): Promise<ListInvestigationsResponse>
```

<sub>`GET /api/v2/bits-ai/investigations` · `ListInvestigations`</sub>

## `datadog.triggerInvestigation`

Trigger a Bits AI investigation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.triggerInvestigation(input: {
  data: TriggerInvestigationRequestData;
}): Promise<TriggerInvestigationResponse>
```

<sub>`POST /api/v2/bits-ai/investigations` · `TriggerInvestigation`</sub>

## `datadog.getInvestigation`

Get a Bits AI investigation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getInvestigation(input: {
  /** The ID of the investigation. */
  id: string;
}): Promise<GetInvestigationResponse>
```

<sub>`GET /api/v2/bits-ai/investigations/{id}` · `GetInvestigation`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
