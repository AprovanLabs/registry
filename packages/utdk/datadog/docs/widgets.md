# Widgets

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.searchWidgets`

Search widgets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchWidgets(input: {
  experience_type: WidgetExperienceType;
  "filter[widgetType]"?: WidgetType;
  /** Filter widgets by the email handle of the creator. */
  "filter[creatorHandle]"?: string;
  /** Filter to only widgets favorited by the current user. */
  "filter[isFavorited]"?: boolean;
  /** Filter widgets by title (substring match). */
  "filter[title]"?: string;
  /** Filter widgets by tags. Format as bracket-delimited CSV, e.g. `[tag1,tag2]`. */
  "filter[tags]"?: string;
  /** Sort field for the results.  **`title`, `created_at`, `modified_at`** — both ascending and descending are supported. Use the bare field name for ascending (e.g. `sort=title`) or prefix with `-` for descending (e.g. `sort=-modified_at`).  **`is_favorited`** — returns favorites-first ordering (favorited widgets first, then the rest). Direction is fixed; the `-` prefix is ignored for this field. */
  sort?: string;
  /** Page number for pagination (0-indexed). */
  "page[number]"?: number;
  /** Number of widgets per page. */
  "page[size]"?: number;
}): Promise<WidgetListResponse>
```

<sub>`GET /api/v2/widgets/{experience_type}` · `SearchWidgets`</sub>

## `datadog.createWidget`

Create a widget — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createWidget(input: {
  data: CreateOrUpdateWidgetRequestData;
  experience_type: WidgetExperienceType;
}): Promise<WidgetResponse>
```

<sub>`POST /api/v2/widgets/{experience_type}` · `CreateWidget`</sub>

## `datadog.deleteWidget`

Delete a widget — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteWidget(input: {
  experience_type: WidgetExperienceType;
  /** The UUID of the widget. */
  uuid: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/widgets/{experience_type}/{uuid}` · `DeleteWidget`</sub>

## `datadog.getWidget`

Get a widget — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getWidget(input: {
  experience_type: WidgetExperienceType;
  /** The UUID of the widget. */
  uuid: string;
}): Promise<WidgetResponse>
```

<sub>`GET /api/v2/widgets/{experience_type}/{uuid}` · `GetWidget`</sub>

## `datadog.updateWidget`

Update a widget — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateWidget(input: {
  data: CreateOrUpdateWidgetRequestData;
  experience_type: WidgetExperienceType;
  /** The UUID of the widget. */
  uuid: string;
}): Promise<WidgetResponse>
```

<sub>`PUT /api/v2/widgets/{experience_type}/{uuid}` · `UpdateWidget`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
