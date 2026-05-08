# Projects

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getProjectFiles`

- **HTTP**: `GET /v1/projects/{project_id}/files`
- **What it does**: Get files in a project
- **OpenAPI operationId**: `getProjectFiles`
- **Path params**: `project_id`
- **Query params**: `branch_data`
- **Response codes**: `200`, `400`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_id: string; branch_data?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; files: ({ key: string; name: string; thumbnail_url?: string; last_modified: string })[] }`
- OpenAPI response codes: `200`, `400`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetProjectFilesInput = Parameters<typeof figma.getProjectFiles> extends [infer T, ...unknown[]] ? T : undefined;
type GetProjectFilesOutput = Awaited<ReturnType<typeof figma.getProjectFiles>>;

const input: GetProjectFilesInput = {} as { project_id: string; branch_data?: boolean };
const result: GetProjectFilesOutput = await figma.getProjectFiles(input);

// Result shape (from schema): { name: string; files: ({ key: string; name: string; thumbnail_url?: string; last_modified: string })[] }
```

### `figma.getTeamProjects`

- **HTTP**: `GET /v1/teams/{team_id}/projects`
- **What it does**: Get projects in a team
- **OpenAPI operationId**: `getTeamProjects`
- **Path params**: `team_id`
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; projects: ({ id: string; name: string })[] }`
- OpenAPI response codes: `200`, `400`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetTeamProjectsInput = Parameters<typeof figma.getTeamProjects> extends [infer T, ...unknown[]] ? T : undefined;
type GetTeamProjectsOutput = Awaited<ReturnType<typeof figma.getTeamProjects>>;

const input: GetTeamProjectsInput = {} as { team_id: string };
const result: GetTeamProjectsOutput = await figma.getTeamProjects(input);

// Result shape (from schema): { name: string; projects: ({ id: string; name: string })[] }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
