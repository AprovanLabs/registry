# Applications (Beta)

7 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getApplications`

Get applications — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getApplications(input: {
  /** Accepts filter by `key`, `name`, `kind`, and `autoAdded`. To learn more about the filter syntax, read [Filtering applications and application versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions). */
  filter?: string;
  /** The number of applications to return. Defaults to 10. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** Accepts sorting order and fields. Fields can be comma separated. Possible fields are `creationDate`, `name`. Examples: `sort=name` sort by names ascending, `sort=-name,creationDate` sort by names descending and creationDate ascending. */
  sort?: string;
  /** A comma-separated list of properties that can reveal additional information in the response. Options: `flags`. */
  expand?: string;
}): Promise<ApplicationCollectionRep>
```

<sub>`GET /api/v2/applications` · `getApplications`</sub>

## `launchdarkly.deleteApplication`

Delete application — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteApplication(input: {
  /** The application key */
  applicationKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/applications/{applicationKey}` · `deleteApplication`</sub>

## `launchdarkly.getApplication`

Get application by key — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getApplication(input: {
  /** The application key */
  applicationKey: string;
  /** A comma-separated list of properties that can reveal additional information in the response. Options: `flags`. */
  expand?: string;
}): Promise<ApplicationRep>
```

<sub>`GET /api/v2/applications/{applicationKey}` · `getApplication`</sub>

## `launchdarkly.patchApplication`

Update application — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchApplication(input: {
  body: JsonPatch;
  /** The application key */
  applicationKey: string;
}): Promise<ApplicationRep>
```

<sub>`PATCH /api/v2/applications/{applicationKey}` · `patchApplication`</sub>

## `launchdarkly.getApplicationVersions`

Get application versions by application key — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getApplicationVersions(input: {
  /** The application key */
  applicationKey: string;
  /** Accepts filter by `key`, `name`, `supported`, and `autoAdded`. To learn more about the filter syntax, read [Filtering applications and application versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions). */
  filter?: string;
  /** The number of versions to return. Defaults to 50. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** Accepts sorting order and fields. Fields can be comma separated. Possible fields are `creationDate`, `name`. Examples: `sort=name` sort by names ascending, `sort=-name,creationDate` sort by names descending and creationDate ascending. */
  sort?: string;
}): Promise<ApplicationVersionsCollectionRep>
```

<sub>`GET /api/v2/applications/{applicationKey}/versions` · `getApplicationVersions`</sub>

## `launchdarkly.deleteApplicationVersion`

Delete application version — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteApplicationVersion(input: {
  /** The application key */
  applicationKey: string;
  /** The application version key */
  versionKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/applications/{applicationKey}/versions/{versionKey}` · `deleteApplicationVersion`</sub>

## `launchdarkly.patchApplicationVersion`

Update application version — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchApplicationVersion(input: {
  body: JsonPatch;
  /** The application key */
  applicationKey: string;
  /** The application version key */
  versionKey: string;
}): Promise<ApplicationVersionRep>
```

<sub>`PATCH /api/v2/applications/{applicationKey}/versions/{versionKey}` · `patchApplicationVersion`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
