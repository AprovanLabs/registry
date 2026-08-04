# Dev Resources

4 operations · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.postDevResources`

Create dev resources — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.postDevResources(input: {
  /** An array of dev resources. */
  dev_resources: ({ name: string; url: string; file_key: string; node_id: string })[];
}): Promise<{ links_created: (DevResource)[]; errors?: ({ file_key?: string | null; node_id?: string | null; error: string })[] }>
```

<sub>`POST /v1/dev_resources` · `postDevResources`</sub>

## `figma.putDevResources`

Update dev resources — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.putDevResources(input: {
  /** An array of dev resources. */
  dev_resources: ({ id: string; name?: string; url?: string })[];
}): Promise<{ links_updated?: (DevResource)[]; errors?: ({ id?: string; error: string })[] }>
```

<sub>`PUT /v1/dev_resources` · `putDevResources`</sub>

## `figma.getDevResources`

Get dev resources — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getDevResources(input: {
  /** The file to get the dev resources from. This must be a main file key, not a branch key. */
  file_key: string;
  /** Comma separated list of nodes that you care about in the document. If specified, only dev resources attached to these nodes will be returned. If not specified, all dev resources in the file will be returned. */
  node_ids?: string;
}): Promise<{ dev_resources: (DevResource)[] }>
```

<sub>`GET /v1/files/{file_key}/dev_resources` · `getDevResources`</sub>

## `figma.deleteDevResource`

Delete dev resource — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.deleteDevResource(input: {
  /** The file to delete the dev resource from. This must be a main file key, not a branch key. */
  file_key: string;
  /** The id of the dev resource to delete. */
  dev_resource_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v1/files/{file_key}/dev_resources/{dev_resource_id}` · `deleteDevResource`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
