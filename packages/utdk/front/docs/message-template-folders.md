# Message Template Folders

11 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listFolders`

List folders — [Provider docs](https://community.front.com)

```ts
front.listFolders(input: {
  /** Field used to sort the message template folders. Either `created_at` or `updated_at`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (MessageTemplateFolderResponse)[] }>
```

<sub>`GET /message_template_folders` · `list-folders`</sub>

## `front.createFolder`

Create folder — [Provider docs](https://community.front.com)

```ts
front.createFolder(input: {
  /** Name of the message template folder */
  name: string;
  /** ID of the parent folder to be placed into. Goes into the root folder if unspecified or if null. */
  parent_folder_id?: string;
}): Promise<MessageTemplateFolderResponse>
```

<sub>`POST /message_template_folders` · `create-folder`</sub>

## `front.deleteFolder`

Delete folder — [Provider docs](https://community.front.com)

```ts
front.deleteFolder(input: {
  /** The message template folder id */
  message_template_folder_id: string;
}): Promise<{ status?: string; message_template_folder_id?: string }>
```

<sub>`DELETE /message_template_folders/{message_template_folder_id}` · `delete-folder`</sub>

## `front.getFolder`

Get folder — [Provider docs](https://community.front.com)

```ts
front.getFolder(input: {
  /** The message template folder ID */
  message_template_folder_id: string;
}): Promise<MessageTemplateFolderResponse>
```

<sub>`GET /message_template_folders/{message_template_folder_id}` · `get-folder`</sub>

## `front.updateFolder`

Update folder — [Provider docs](https://community.front.com)

```ts
front.updateFolder(input: {
  /** Name of the message template folder */
  name?: string;
  /** ID of the parent folder to be placed into. Goes into the root folder if unspecified or if null. */
  parent_folder_id?: string;
  /** The message template folder ID */
  message_template_folder_id: string;
}): Promise<MessageTemplateFolderResponse>
```

<sub>`PATCH /message_template_folders/{message_template_folder_id}` · `update-folder`</sub>

## `front.getChildFolders`

Get child folders — [Provider docs](https://community.front.com)

```ts
front.getChildFolders(input: {
  /** The message template folder ID */
  message_template_folder_id: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (MessageTemplateFolderResponse)[] }>
```

<sub>`GET /message_template_folders/{message_template_folder_id}/message_template_folders` · `get-child-folders`</sub>

## `front.createChildFolder`

Create child folder — [Provider docs](https://community.front.com)

```ts
front.createChildFolder(input: {
  /** Name of the message template folder */
  name: string;
  /** The parent message template folder ID */
  message_template_folder_id: string;
}): Promise<MessageTemplateFolderResponse>
```

<sub>`POST /message_template_folders/{message_template_folder_id}/message_template_folders` · `create-child-folder`</sub>

## `front.listTeammateFolders`

List teammate folders — [Provider docs](https://community.front.com)

```ts
front.listTeammateFolders(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
  /** Field used to sort the message template folders. Either `created_at` or `updated_at`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (MessageTemplateFolderResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/message_template_folders` · `list-teammate-folders`</sub>

## `front.createTeammateFolder`

Create teammate folder — [Provider docs](https://community.front.com)

```ts
front.createTeammateFolder(input: {
  /** Name of the message template folder */
  name: string;
  /** ID of the parent folder to be placed into. Goes into the root folder if unspecified or if null. */
  parent_folder_id?: string;
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<MessageTemplateFolderResponse>
```

<sub>`POST /teammates/{teammate_id}/message_template_folders` · `create-teammate-folder`</sub>

## `front.listTeamFolders`

List team folders — [Provider docs](https://community.front.com)

```ts
front.listTeamFolders(input: {
  /** The team ID */
  team_id: string;
  /** Field used to sort the message template folders. Either `created_at` or `updated_at`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (MessageTemplateFolderResponse)[] }>
```

<sub>`GET /teams/{team_id}/message_template_folders` · `list-team-folders`</sub>

## `front.createTeamFolder`

Create team folder — [Provider docs](https://community.front.com)

```ts
front.createTeamFolder(input: {
  /** Name of the message template folder */
  name: string;
  /** ID of the parent folder to be placed into. Goes into the root folder if unspecified or if null. */
  parent_folder_id?: string;
  /** The team ID */
  team_id: string;
}): Promise<MessageTemplateFolderResponse>
```

<sub>`POST /teams/{team_id}/message_template_folders` · `create-team-folder`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
