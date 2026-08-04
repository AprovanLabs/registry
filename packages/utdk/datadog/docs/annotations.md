# Annotations

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listAnnotations`

List annotations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAnnotations(input: {
  /** ID of the page to list annotations for, prefixed with the page type and joined by a colon (for example, `dashboard:abc-def-xyz` or `notebook:1234567890`). */
  page_id: string;
  /** Start of the time window in milliseconds since the Unix epoch. */
  start_time: number;
  /** End of the time window in milliseconds since the Unix epoch. */
  end_time: number;
  /** Optional widget ID to restrict results to annotations on a specific widget. */
  widget_id?: string;
}): Promise<AnnotationsResponse>
```

<sub>`GET /api/v2/annotation` · `ListAnnotations`</sub>

## `datadog.createAnnotation`

Create an annotation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAnnotation(input: {
  data: AnnotationRequestData;
}): Promise<AnnotationResponse>
```

<sub>`POST /api/v2/annotation` · `CreateAnnotation`</sub>

## `datadog.deleteAnnotation`

Delete an annotation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteAnnotation(input: {
  /** The ID of the annotation. */
  annotation_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/annotation/{annotation_id}` · `DeleteAnnotation`</sub>

## `datadog.updateAnnotation`

Update an annotation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAnnotation(input: {
  data: AnnotationRequestData;
  /** The ID of the annotation. */
  annotation_id: string;
}): Promise<AnnotationResponse>
```

<sub>`PUT /api/v2/annotation/{annotation_id}` · `UpdateAnnotation`</sub>

## `datadog.getPageAnnotations`

Get annotations for a page — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getPageAnnotations(input: {
  /** The ID of the page, prefixed with the page type and joined by a colon (for example, `dashboard:abc-def-xyz` or `notebook:1234567890`). */
  page_id: string;
  /** Start of the time window in milliseconds since the Unix epoch. */
  start_time: number;
  /** End of the time window in milliseconds since the Unix epoch. */
  end_time: number;
}): Promise<PageAnnotationsResponse>
```

<sub>`GET /api/v2/annotation/page/{page_id}` · `GetPageAnnotations`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
