# Dynamic Modules

3 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.dynamicModulesResourceRemoveModulesDelete`

Remove modules — [Provider docs](http://www.atlassian.com)

```ts
jira.dynamicModulesResourceRemoveModulesDelete(input: {
  /** The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`. Nonexistent keys are ignored. */
  moduleKey?: (string)[];
}): Promise<undefined>
```

<sub>`DELETE /rest/atlassian-connect/1/app/module/dynamic` · `DynamicModulesResource.removeModules_delete`</sub>

## `jira.dynamicModulesResourceGetModulesGet`

Get modules — [Provider docs](http://www.atlassian.com)

```ts
jira.dynamicModulesResourceGetModulesGet(): Promise<ConnectModules>
```

<sub>`GET /rest/atlassian-connect/1/app/module/dynamic` · `DynamicModulesResource.getModules_get`</sub>

## `jira.dynamicModulesResourceRegisterModulesPost`

Register modules — [Provider docs](http://www.atlassian.com)

```ts
jira.dynamicModulesResourceRegisterModulesPost(input: {
  /** A list of app modules in the same format as the `modules` property in the [app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/). */
  modules: (ConnectModule)[];
}): Promise<undefined>
```

<sub>`POST /rest/atlassian-connect/1/app/module/dynamic` · `DynamicModulesResource.registerModules_post`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
