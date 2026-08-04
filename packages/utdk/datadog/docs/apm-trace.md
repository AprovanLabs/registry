# APM Trace

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getPrunedTraceById`

Get a pruned trace by ID — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getPrunedTraceById(input: {
  /** The trace ID. Accepts either a 32-character hexadecimal string (128-bit trace ID) or a decimal string of up to 39 digits. */
  trace_id: string;
  /** Span ID to expand and preserve in the pruned tree even when its branch would normally be summarized. */
  expand_span_id?: number;
  /** Optional Unix time hint, in seconds, used to optimize the lookup of the trace in long-term storage. */
  time_hint?: number;
  /** Force the trace to be loaded from a specific source. When unset, the API picks the source automatically. */
  force_source?: string;
  /** Restrict the pruned tree to spans matching the given `key:value` pairs. Values may be passed as repeated query parameters. */
  include_path?: (string)[];
  /** Regex patterns of tag keys whose values must be included in the pruned spans. Values may be passed as repeated query parameters. */
  tag_include?: (string)[];
  /** Regex patterns of tag keys whose values must be excluded from the pruned spans. Values may be passed as repeated query parameters. */
  tag_exclude?: (string)[];
  /** When set to `true`, only service entry spans are included in the pruned tree. */
  only_service_entry_spans?: boolean;
}): Promise<PrunedTraceResponse>
```

<sub>`GET /api/v2/pruned_trace/{trace_id}` · `GetPrunedTraceByID`</sub>

## `datadog.getTraceById`

Get a trace by ID — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTraceById(input: {
  /** The trace ID. Accepts either a 32-character hexadecimal string (128-bit trace ID) or a decimal string of up to 39 digits. */
  trace_id: string;
  /** List of span fields to include in the response. When omitted, every available field is returned. Values may be passed as repeated query parameters or as a single comma-separated value. */
  include_fields?: (string)[];
}): Promise<TraceResponse>
```

<sub>`GET /api/v2/trace/{trace_id}` · `GetTraceByID`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
