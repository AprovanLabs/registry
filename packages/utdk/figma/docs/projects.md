# Projects

3 operations · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getProjectFiles`

Get files in a project — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getProjectFiles(input: {
  /** ID of the project to list files from */
  project_id: string;
  /** Returns branch metadata in the response for each main file with a branch inside the project. */
  branch_data?: boolean;
}): Promise<{ name: string; files: ({ key: string; name: string; thumbnail_url?: string; last_modified: string })[] }>
```

<sub>`GET /v1/projects/{project_id}/files` · `getProjectFiles`</sub>

## `figma.getProjectMeta`

Get project metadata — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getProjectMeta(input: {
  /** ID of the project to get metadata for. */
  project_id: string;
}): Promise<{ id: string; name: string; thumbnail_url: string | null; file_count: number; updated_at: string; created_at: string }>
```

<sub>`GET /v1/projects/{project_id}/meta` · `getProjectMeta`</sub>

## `figma.getTeamProjects`

Get projects in a team — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getTeamProjects(input: {
  /** ID of the team to list projects from */
  team_id: string;
}): Promise<{ name: string; projects: (Project)[] }>
```

<sub>`GET /v1/teams/{team_id}/projects` · `getTeamProjects`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
