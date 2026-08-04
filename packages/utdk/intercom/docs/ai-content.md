# AI Content

10 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listContentImportSources`

List content import sources — [Provider docs](https://developers.intercom.com)

```ts
intercom.listContentImportSources(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContentImportSourcesList>
```

<sub>`GET /ai/content_import_sources` · `listContentImportSources`</sub>

## `intercom.createContentImportSource`

Create a content import source — [Provider docs](https://developers.intercom.com)

```ts
intercom.createContentImportSource(input: {
  /** If you intend to create or update External Pages via the API, this should be set to `api`. */
  sync_behavior: "api";
  /** The status of the content import source. */
  status?: "active" | "deactivated";
  /** The URL of the content import source. */
  url: string;
  /** The unique identifiers for the audiences to associate with this content import source. Can be a single integer or an array of integers. */
  audience_ids?: number | (number)[] | null;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContentImportSource>
```

<sub>`POST /ai/content_import_sources` · `createContentImportSource`</sub>

## `intercom.deleteContentImportSource`

Delete a content import source — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteContentImportSource(input: {
  /** The unique identifier for the content import source which is given by Intercom. */
  source_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<undefined>
```

<sub>`DELETE /ai/content_import_sources/{source_id}` · `deleteContentImportSource`</sub>

## `intercom.getContentImportSource`

Retrieve a content import source — [Provider docs](https://developers.intercom.com)

```ts
intercom.getContentImportSource(input: {
  /** The unique identifier for the content import source which is given by Intercom. */
  source_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContentImportSource>
```

<sub>`GET /ai/content_import_sources/{source_id}` · `getContentImportSource`</sub>

## `intercom.updateContentImportSource`

Update a content import source — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateContentImportSource(input: {
  /** If you intend to create or update External Pages via the API, this should be set to `api`. You can not change the value to or from api. */
  sync_behavior: "api" | "automated" | "manual";
  /** The status of the content import source. */
  status?: "active" | "deactivated";
  /** The URL of the content import source. This may only be different from the existing value if the sync behavior is API. */
  url: string;
  /** The unique identifiers for the audiences to associate with this content import source. Can be a single integer or an array of integers. Set to null or an empty array to remove all audiences. */
  audience_ids?: number | (number)[] | null;
  /** When true, the audience will be applied to all existing external pages belonging to this content import source. */
  apply_audience_to_existing_content?: boolean;
  /** The unique identifier for the content import source which is given by Intercom. */
  source_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ContentImportSource>
```

<sub>`PUT /ai/content_import_sources/{source_id}` · `updateContentImportSource`</sub>

## `intercom.listExternalPages`

List external pages — [Provider docs](https://developers.intercom.com)

```ts
intercom.listExternalPages(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ExternalPagesList>
```

<sub>`GET /ai/external_pages` · `listExternalPages`</sub>

## `intercom.createExternalPage`

Create an external page (or update an external page by external ID) — [Provider docs](https://developers.intercom.com)

```ts
intercom.createExternalPage(input: {
  /** The title of the external page. */
  title: string;
  /** The body of the external page in HTML. */
  html: string;
  /** The URL of the external page. This will be used by Fin to link end users to the page it based its answer on. When a URL is not present, Fin will not reference the source. */
  url?: string;
  /** Whether the external page should be used to answer questions by AI Agent. Will not default when updating an existing external page. */
  ai_agent_availability?: boolean;
  /** Whether the external page should be used to answer questions by AI Copilot. Will not default when updating an existing external page. */
  ai_copilot_availability?: boolean;
  /** Always en */
  locale: "en";
  /** The unique identifier for the source of the external page which was given by Intercom. Every external page must be associated with a Content Import Source which represents the place it comes from and from which it inherits a default audience (configured in the UI). For a new source, make a POST request to the Content Import Source endpoint and an ID for the source will be returned in the response. */
  source_id: number;
  /** The identifier for the external page which was given by the source. Must be unique for the source. */
  external_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ExternalPage>
```

<sub>`POST /ai/external_pages` · `createExternalPage`</sub>

## `intercom.deleteExternalPage`

Delete an external page — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteExternalPage(input: {
  /** The unique identifier for the external page which is given by Intercom. */
  page_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ExternalPage>
```

<sub>`DELETE /ai/external_pages/{page_id}` · `deleteExternalPage`</sub>

## `intercom.getExternalPage`

Retrieve an external page — [Provider docs](https://developers.intercom.com)

```ts
intercom.getExternalPage(input: {
  /** The unique identifier for the external page which is given by Intercom. */
  page_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ExternalPage>
```

<sub>`GET /ai/external_pages/{page_id}` · `getExternalPage`</sub>

## `intercom.updateExternalPage`

Update an external page — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateExternalPage(input: {
  /** The title of the external page. */
  title: string;
  /** The body of the external page in HTML. */
  html: string;
  /** The URL of the external page. This will be used by Fin to link end users to the page it based its answer on. */
  url: string;
  /** Whether the external page should be used to answer questions by Fin. */
  fin_availability?: boolean;
  /** Always en */
  locale: "en";
  /** The unique identifier for the source of the external page which was given by Intercom. Every external page must be associated with a Content Import Source which represents the place it comes from and from which it inherits a default audience (configured in the UI). For a new source, make a POST request to the Content Import Source endpoint and an ID for the source will be returned in the response. */
  source_id: number;
  /** The identifier for the external page which was given by the source. Must be unique for the source. */
  external_id?: string;
  /** The unique identifier for the external page which is given by Intercom. */
  page_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ExternalPage>
```

<sub>`PUT /ai/external_pages/{page_id}` · `updateExternalPage`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
