# App Builder

21 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.deleteApps`

Delete Multiple Apps — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteApps(input: {
  /** An array of objects containing the IDs of the apps to delete. */
  data?: (DeleteAppsRequestDataItems)[];
}): Promise<DeleteAppsResponse>
```

<sub>`DELETE /api/v2/app-builder/apps` · `DeleteApps`</sub>

## `datadog.listApps`

List Apps — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listApps(input: {
  /** The number of apps to return per page. */
  limit?: number;
  /** The page number to return. */
  page?: number;
  /** Filter apps by the app creator. Usually the user's email. */
  "filter[user_name]"?: string;
  /** Filter apps by the app creator's UUID. */
  "filter[user_uuid]"?: string;
  /** Filter by app name. */
  "filter[name]"?: string;
  /** Filter apps by the app name or the app creator. */
  "filter[query]"?: string;
  /** Filter apps by whether they are published. */
  "filter[deployed]"?: boolean;
  /** Filter apps by tags. */
  "filter[tags]"?: string;
  /** Filter apps by whether you have added them to your favorites. */
  "filter[favorite]"?: boolean;
  /** Filter apps by whether they are enabled for self-service. */
  "filter[self_service]"?: boolean;
  /** The fields and direction to sort apps by. */
  sort?: (AppsSortField)[];
}): Promise<ListAppsResponse>
```

<sub>`GET /api/v2/app-builder/apps` · `ListApps`</sub>

## `datadog.createApp`

Create App — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createApp(input: {
  data?: CreateAppRequestData;
}): Promise<CreateAppResponse>
```

<sub>`POST /api/v2/app-builder/apps` · `CreateApp`</sub>

## `datadog.deleteApp`

Delete App — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteApp(input: {
  /** The ID of the app to delete. */
  app_id: string;
}): Promise<DeleteAppResponse>
```

<sub>`DELETE /api/v2/app-builder/apps/{app_id}` · `DeleteApp`</sub>

## `datadog.getApp`

Get App — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getApp(input: {
  /** The ID of the app to retrieve. */
  app_id: string;
  /** The version number of the app to retrieve. If not specified, the latest version is returned. Version numbers start at 1 and increment with each update. The special values `latest` and `deployed` can be used to retrieve the latest version or the published version, respectively. */
  version?: string;
}): Promise<GetAppResponse>
```

<sub>`GET /api/v2/app-builder/apps/{app_id}` · `GetApp`</sub>

## `datadog.updateApp`

Update App — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateApp(input: {
  data?: UpdateAppRequestData;
  /** The ID of the app to update. */
  app_id: string;
}): Promise<UpdateAppResponse>
```

<sub>`PATCH /api/v2/app-builder/apps/{app_id}` · `UpdateApp`</sub>

## `datadog.unpublishApp`

Unpublish App — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unpublishApp(input: {
  /** The ID of the app to unpublish. */
  app_id: string;
}): Promise<UnpublishAppResponse>
```

<sub>`DELETE /api/v2/app-builder/apps/{app_id}/deployment` · `UnpublishApp`</sub>

## `datadog.publishApp`

Publish App — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.publishApp(input: {
  /** The ID of the app to publish. */
  app_id: string;
}): Promise<PublishAppResponse>
```

<sub>`POST /api/v2/app-builder/apps/{app_id}/deployment` · `PublishApp`</sub>

## `datadog.updateAppFavorite`

Update App Favorite Status — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAppFavorite(input: {
  data?: UpdateAppFavoriteRequestData;
  /** The ID of the app. */
  app_id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/app-builder/apps/{app_id}/favorite` · `UpdateAppFavorite`</sub>

## `datadog.updateProtectionLevel`

Update App Protection Level — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateProtectionLevel(input: {
  data?: UpdateAppProtectionLevelRequestData;
  /** The ID of the app. */
  app_id: string;
}): Promise<UpdateAppResponse>
```

<sub>`PATCH /api/v2/app-builder/apps/{app_id}/protection-level` · `UpdateProtectionLevel`</sub>

## `datadog.createPublishRequest`

Create Publish Request — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createPublishRequest(input: {
  data?: CreatePublishRequestRequestData;
  /** The ID of the app. */
  app_id: string;
}): Promise<PublishAppResponse>
```

<sub>`POST /api/v2/app-builder/apps/{app_id}/publish-request` · `CreatePublishRequest`</sub>

## `datadog.revertApp`

Revert App — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.revertApp(input: {
  /** The ID of the app. */
  app_id: string;
  /** The version number of the app to revert to. Cannot be `latest`. The special value `deployed` can be used to revert to the currently published version. */
  version: string;
}): Promise<UpdateAppResponse>
```

<sub>`POST /api/v2/app-builder/apps/{app_id}/revert` · `RevertApp`</sub>

## `datadog.updateAppSelfService`

Update App Self-Service Status — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAppSelfService(input: {
  data?: UpdateAppSelfServiceRequestData;
  /** The ID of the app. */
  app_id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/app-builder/apps/{app_id}/self-service` · `UpdateAppSelfService`</sub>

## `datadog.updateAppTags`

Update App Tags — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAppTags(input: {
  data?: UpdateAppTagsRequestData;
  /** The ID of the app. */
  app_id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/app-builder/apps/{app_id}/tags` · `UpdateAppTags`</sub>

## `datadog.updateAppVersionName`

Name App Version — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAppVersionName(input: {
  data?: UpdateAppVersionNameRequestData;
  /** The ID of the app. */
  app_id: string;
  /** The version number of the app to name. The special values `latest` and `deployed` can also be used to target the latest or currently published version. */
  version: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/app-builder/apps/{app_id}/version-name` · `UpdateAppVersionName`</sub>

## `datadog.listAppVersions`

List App Versions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAppVersions(input: {
  /** The ID of the app. */
  app_id: string;
  /** The number of versions to return per page. */
  limit?: number;
  /** The page number to return. */
  page?: number;
}): Promise<ListAppVersionsResponse>
```

<sub>`GET /api/v2/app-builder/apps/{app_id}/versions` · `ListAppVersions`</sub>

## `datadog.getBlueprint`

Get Blueprint — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getBlueprint(input: {
  /** The ID of the blueprint to retrieve. */
  blueprint_id: string;
}): Promise<GetBlueprintResponse>
```

<sub>`GET /api/v2/app-builder/blueprint/{blueprint_id}` · `GetBlueprint`</sub>

## `datadog.listBlueprints`

List Blueprints — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listBlueprints(input: {
  /** The number of blueprints to return per page. Defaults to 10. Maximum is 100. */
  limit?: number;
  /** The page of results to return. Starts at 0. */
  page?: number;
}): Promise<ListBlueprintsResponse>
```

<sub>`GET /api/v2/app-builder/blueprints` · `ListBlueprints`</sub>

## `datadog.getBlueprintsByIntegrationId`

Get Blueprints by Integration ID — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getBlueprintsByIntegrationId(input: {
  /** The integration ID to filter blueprints by. */
  integration_id: string;
}): Promise<GetBlueprintsResponse>
```

<sub>`GET /api/v2/app-builder/blueprints/integration-id/{integration_id}` · `GetBlueprintsByIntegrationId`</sub>

## `datadog.getBlueprintsBySlugs`

Get Blueprints by Slugs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getBlueprintsBySlugs(input: {
  /** A comma-separated list of blueprint slugs. */
  slugs: string;
}): Promise<GetBlueprintsResponse>
```

<sub>`GET /api/v2/app-builder/blueprints/slugs/{slugs}` · `GetBlueprintsBySlugs`</sub>

## `datadog.listTags`

List Tags — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTags(): Promise<AppBuilderListTagsResponse>
```

<sub>`GET /api/v2/app-builder/tags` · `ListTags`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
