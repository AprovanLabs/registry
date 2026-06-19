# Copilot Spaces

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.copilotSpaces.listForOrg`

- **HTTP**: `GET /orgs/{org}/copilot-spaces`
- **What it does**: List organization Copilot Spaces
- **OpenAPI operationId**: `copilot-spaces/list-for-org`
- **Path params**: None
- **Query params**: `per_page`, `before`, `after`
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; before?: string; after?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ spaces: ({ id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: st...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesListForOrgInput = Parameters<typeof github.copilotSpaces.listForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesListForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.listForOrg>>;

const input: CopilotSpacesListForOrgInput = {} as { org: string; per_page?: number; before?: string; after?: string };
const result: CopilotSpacesListForOrgOutput = await github.copilotSpaces.listForOrg(input);

// Result shape (from schema): { spaces: ({ id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: st...
```

### `github.copilotSpaces.createForOrg`

- **HTTP**: `POST /orgs/{org}/copilot-spaces`
- **What it does**: Create an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/create-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; description?: string; general_instructions?: string; base_role?: "reader" | "writer" | "admin" | "no_access"; resources_attributes?: ({ resource_type?: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; metadata?: { repository_id?: number; file_path?: string; text?: string; name?: string; number?: number } })[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...`
- OpenAPI response codes: `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesCreateForOrgInput = Parameters<typeof github.copilotSpaces.createForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesCreateForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.createForOrg>>;

const input: CopilotSpacesCreateForOrgInput = {} as { name: string; description?: string; general_instructions?: string; base_role?: "reader" | "writer" | "admin" | "no_access"; resources_attributes?: ({ resource_type?: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; metadata?: { repository_id?: number; file_path?: string; text?: string; name?: string; number?: number } })[]; org: string };
const result: CopilotSpacesCreateForOrgOutput = await github.copilotSpaces.createForOrg(input);

// Result shape (from schema): { id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...
```

### `github.copilotSpaces.deleteForOrg`

- **HTTP**: `DELETE /orgs/{org}/copilot-spaces/{space_number}`
- **What it does**: Delete an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/delete-for-org`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesDeleteForOrgInput = Parameters<typeof github.copilotSpaces.deleteForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesDeleteForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.deleteForOrg>>;

const input: CopilotSpacesDeleteForOrgInput = {} as { org: string; space_number: number };
const result: CopilotSpacesDeleteForOrgOutput = await github.copilotSpaces.deleteForOrg(input);

// Result shape (from schema): unknown
```

### `github.copilotSpaces.getForOrg`

- **HTTP**: `GET /orgs/{org}/copilot-spaces/{space_number}`
- **What it does**: Get an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/get-for-org`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesGetForOrgInput = Parameters<typeof github.copilotSpaces.getForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesGetForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.getForOrg>>;

const input: CopilotSpacesGetForOrgInput = {} as { org: string; space_number: number };
const result: CopilotSpacesGetForOrgOutput = await github.copilotSpaces.getForOrg(input);

// Result shape (from schema): { id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...
```

### `github.copilotSpaces.updateForOrg`

- **HTTP**: `PUT /orgs/{org}/copilot-spaces/{space_number}`
- **What it does**: Set an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/update-for-org`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; description?: string; general_instructions?: string; base_role?: "reader" | "writer" | "admin" | "no_access"; resources_attributes?: ({ resource_type?: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; metadata?: { repository_id?: number; file_path?: string; text?: string; name?: string; number?: number } })[]; org: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesUpdateForOrgInput = Parameters<typeof github.copilotSpaces.updateForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesUpdateForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.updateForOrg>>;

const input: CopilotSpacesUpdateForOrgInput = {} as { name?: string; description?: string; general_instructions?: string; base_role?: "reader" | "writer" | "admin" | "no_access"; resources_attributes?: ({ resource_type?: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; metadata?: { repository_id?: number; file_path?: string; text?: string; name?: string; number?: number } })[]; org: string; space_number: number };
const result: CopilotSpacesUpdateForOrgOutput = await github.copilotSpaces.updateForOrg(input);

// Result shape (from schema): { id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...
```

### `github.copilotSpaces.listCollaboratorsForOrg`

- **HTTP**: `GET /orgs/{org}/copilot-spaces/{space_number}/collaborators`
- **What it does**: List collaborators for an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/list-collaborators-for-org`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ collaborators: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; followin...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesListCollaboratorsForOrgInput = Parameters<typeof github.copilotSpaces.listCollaboratorsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesListCollaboratorsForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.listCollaboratorsForOrg>>;

const input: CopilotSpacesListCollaboratorsForOrgInput = {} as { org: string; space_number: number };
const result: CopilotSpacesListCollaboratorsForOrgOutput = await github.copilotSpaces.listCollaboratorsForOrg(input);

// Result shape (from schema): { collaborators: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; followin...
```

### `github.copilotSpaces.addCollaboratorForOrg`

- **HTTP**: `POST /orgs/{org}/copilot-spaces/{space_number}/collaborators`
- **What it does**: Add a collaborator to an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/add-collaborator-for-org`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ actor_type: "User" | "Team"; actor_identifier: string; role: "reader" | "writer" | "admin"; org: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesAddCollaboratorForOrgInput = Parameters<typeof github.copilotSpaces.addCollaboratorForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesAddCollaboratorForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.addCollaboratorForOrg>>;

const input: CopilotSpacesAddCollaboratorForOrgInput = {} as { actor_type: "User" | "Team"; actor_identifier: string; role: "reader" | "writer" | "admin"; org: string; space_number: number };
const result: CopilotSpacesAddCollaboratorForOrgOutput = await github.copilotSpaces.addCollaboratorForOrg(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.copilotSpaces.removeCollaboratorForOrg`

- **HTTP**: `DELETE /orgs/{org}/copilot-spaces/{space_number}/collaborators/{actor_type}/{actor_identifier}`
- **What it does**: Remove a collaborator from an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/remove-collaborator-for-org`
- **Path params**: `space_number`, `actor_type`, `actor_identifier`
- **Query params**: None
- **Response codes**: `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; space_number: number; actor_type: "User" | "Team"; actor_identifier: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesRemoveCollaboratorForOrgInput = Parameters<typeof github.copilotSpaces.removeCollaboratorForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesRemoveCollaboratorForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.removeCollaboratorForOrg>>;

const input: CopilotSpacesRemoveCollaboratorForOrgInput = {} as { org: string; space_number: number; actor_type: "User" | "Team"; actor_identifier: string };
const result: CopilotSpacesRemoveCollaboratorForOrgOutput = await github.copilotSpaces.removeCollaboratorForOrg(input);

// Result shape (from schema): unknown
```

### `github.copilotSpaces.updateCollaboratorForOrg`

- **HTTP**: `PUT /orgs/{org}/copilot-spaces/{space_number}/collaborators/{actor_type}/{actor_identifier}`
- **What it does**: Set a collaborator role for an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/update-collaborator-for-org`
- **Path params**: `space_number`, `actor_type`, `actor_identifier`
- **Query params**: None
- **Response codes**: `200`, `204`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ role: "reader" | "writer" | "admin" | "no_access"; org: string; space_number: number; actor_type: "User" | "Team"; actor_identifier: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `204`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesUpdateCollaboratorForOrgInput = Parameters<typeof github.copilotSpaces.updateCollaboratorForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesUpdateCollaboratorForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.updateCollaboratorForOrg>>;

const input: CopilotSpacesUpdateCollaboratorForOrgInput = {} as { role: "reader" | "writer" | "admin" | "no_access"; org: string; space_number: number; actor_type: "User" | "Team"; actor_identifier: string };
const result: CopilotSpacesUpdateCollaboratorForOrgOutput = await github.copilotSpaces.updateCollaboratorForOrg(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.copilotSpaces.listResourcesForOrg`

- **HTTP**: `GET /orgs/{org}/copilot-spaces/{space_number}/resources`
- **What it does**: List resources for an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/list-resources-for-org`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ resources: ({ id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metada...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesListResourcesForOrgInput = Parameters<typeof github.copilotSpaces.listResourcesForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesListResourcesForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.listResourcesForOrg>>;

const input: CopilotSpacesListResourcesForOrgInput = {} as { org: string; space_number: number };
const result: CopilotSpacesListResourcesForOrgOutput = await github.copilotSpaces.listResourcesForOrg(input);

// Result shape (from schema): { resources: ({ id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metada...
```

### `github.copilotSpaces.createResourceForOrg`

- **HTTP**: `POST /orgs/{org}/copilot-spaces/{space_number}/resources`
- **What it does**: Create a resource for an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/create-resource-for-org`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `200`, `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request"; metadata: { [key: string]: unknown }; org: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...`
- OpenAPI response codes: `200`, `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesCreateResourceForOrgInput = Parameters<typeof github.copilotSpaces.createResourceForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesCreateResourceForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.createResourceForOrg>>;

const input: CopilotSpacesCreateResourceForOrgInput = {} as { resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request"; metadata: { [key: string]: unknown }; org: string; space_number: number };
const result: CopilotSpacesCreateResourceForOrgOutput = await github.copilotSpaces.createResourceForOrg(input);

// Result shape (from schema): { id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...
```

### `github.copilotSpaces.deleteResourceForOrg`

- **HTTP**: `DELETE /orgs/{org}/copilot-spaces/{space_number}/resources/{space_resource_id}`
- **What it does**: Delete a resource from an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/delete-resource-for-org`
- **Path params**: `space_number`, `space_resource_id`
- **Query params**: None
- **Response codes**: `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; space_number: number; space_resource_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesDeleteResourceForOrgInput = Parameters<typeof github.copilotSpaces.deleteResourceForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesDeleteResourceForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.deleteResourceForOrg>>;

const input: CopilotSpacesDeleteResourceForOrgInput = {} as { org: string; space_number: number; space_resource_id: number };
const result: CopilotSpacesDeleteResourceForOrgOutput = await github.copilotSpaces.deleteResourceForOrg(input);

// Result shape (from schema): unknown
```

### `github.copilotSpaces.getResourceForOrg`

- **HTTP**: `GET /orgs/{org}/copilot-spaces/{space_number}/resources/{space_resource_id}`
- **What it does**: Get a resource for an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/get-resource-for-org`
- **Path params**: `space_number`, `space_resource_id`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; space_number: number; space_resource_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesGetResourceForOrgInput = Parameters<typeof github.copilotSpaces.getResourceForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesGetResourceForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.getResourceForOrg>>;

const input: CopilotSpacesGetResourceForOrgInput = {} as { org: string; space_number: number; space_resource_id: number };
const result: CopilotSpacesGetResourceForOrgOutput = await github.copilotSpaces.getResourceForOrg(input);

// Result shape (from schema): { id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...
```

### `github.copilotSpaces.updateResourceForOrg`

- **HTTP**: `PUT /orgs/{org}/copilot-spaces/{space_number}/resources/{space_resource_id}`
- **What it does**: Set a resource for an organization Copilot Space
- **OpenAPI operationId**: `copilot-spaces/update-resource-for-org`
- **Path params**: `space_number`, `space_resource_id`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ metadata?: { [key: string]: unknown }; org: string; space_number: number; space_resource_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesUpdateResourceForOrgInput = Parameters<typeof github.copilotSpaces.updateResourceForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesUpdateResourceForOrgOutput = Awaited<ReturnType<typeof github.copilotSpaces.updateResourceForOrg>>;

const input: CopilotSpacesUpdateResourceForOrgInput = {} as { metadata?: { [key: string]: unknown }; org: string; space_number: number; space_resource_id: number };
const result: CopilotSpacesUpdateResourceForOrgOutput = await github.copilotSpaces.updateResourceForOrg(input);

// Result shape (from schema): { id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...
```

### `github.copilotSpaces.listForUser`

- **HTTP**: `GET /users/{username}/copilot-spaces`
- **What it does**: List Copilot Spaces for a user
- **OpenAPI operationId**: `copilot-spaces/list-for-user`
- **Path params**: None
- **Query params**: `per_page`, `before`, `after`
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; before?: string; after?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ spaces: ({ id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: st...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesListForUserInput = Parameters<typeof github.copilotSpaces.listForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesListForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.listForUser>>;

const input: CopilotSpacesListForUserInput = {} as { username: string; per_page?: number; before?: string; after?: string };
const result: CopilotSpacesListForUserOutput = await github.copilotSpaces.listForUser(input);

// Result shape (from schema): { spaces: ({ id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: st...
```

### `github.copilotSpaces.createForUser`

- **HTTP**: `POST /users/{username}/copilot-spaces`
- **What it does**: Create a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/create-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; description?: string; general_instructions?: string; base_role?: "reader" | "no_access"; resources_attributes?: ({ resource_type?: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; metadata?: { repository_id?: number; file_path?: string; text?: string; name?: string; number?: number } })[]; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...`
- OpenAPI response codes: `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesCreateForUserInput = Parameters<typeof github.copilotSpaces.createForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesCreateForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.createForUser>>;

const input: CopilotSpacesCreateForUserInput = {} as { name: string; description?: string; general_instructions?: string; base_role?: "reader" | "no_access"; resources_attributes?: ({ resource_type?: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; metadata?: { repository_id?: number; file_path?: string; text?: string; name?: string; number?: number } })[]; username: string };
const result: CopilotSpacesCreateForUserOutput = await github.copilotSpaces.createForUser(input);

// Result shape (from schema): { id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...
```

### `github.copilotSpaces.deleteForUser`

- **HTTP**: `DELETE /users/{username}/copilot-spaces/{space_number}`
- **What it does**: Delete a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/delete-for-user`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesDeleteForUserInput = Parameters<typeof github.copilotSpaces.deleteForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesDeleteForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.deleteForUser>>;

const input: CopilotSpacesDeleteForUserInput = {} as { username: string; space_number: number };
const result: CopilotSpacesDeleteForUserOutput = await github.copilotSpaces.deleteForUser(input);

// Result shape (from schema): unknown
```

### `github.copilotSpaces.getForUser`

- **HTTP**: `GET /users/{username}/copilot-spaces/{space_number}`
- **What it does**: Get a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/get-for-user`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesGetForUserInput = Parameters<typeof github.copilotSpaces.getForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesGetForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.getForUser>>;

const input: CopilotSpacesGetForUserInput = {} as { username: string; space_number: number };
const result: CopilotSpacesGetForUserOutput = await github.copilotSpaces.getForUser(input);

// Result shape (from schema): { id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...
```

### `github.copilotSpaces.updateForUser`

- **HTTP**: `PUT /users/{username}/copilot-spaces/{space_number}`
- **What it does**: Set a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/update-for-user`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; description?: string; general_instructions?: string; base_role?: "reader" | "no_access"; resources_attributes?: ({ resource_type?: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; metadata?: { repository_id?: number; file_path?: string; text?: string; name?: string; number?: number } })[]; username: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesUpdateForUserInput = Parameters<typeof github.copilotSpaces.updateForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesUpdateForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.updateForUser>>;

const input: CopilotSpacesUpdateForUserInput = {} as { name?: string; description?: string; general_instructions?: string; base_role?: "reader" | "no_access"; resources_attributes?: ({ resource_type?: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; metadata?: { repository_id?: number; file_path?: string; text?: string; name?: string; number?: number } })[]; username: string; space_number: number };
const result: CopilotSpacesUpdateForUserOutput = await github.copilotSpaces.updateForUser(input);

// Result shape (from schema): { id: number; number: number; name: string; description?: string | null; general_instructions?: string | null; base_role: "reader" | "writer" | "admin" | "no_access"; owner: { name?: string | null; email?: string | null...
```

### `github.copilotSpaces.listCollaboratorsForUser`

- **HTTP**: `GET /users/{username}/copilot-spaces/{space_number}/collaborators`
- **What it does**: List collaborators for a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/list-collaborators-for-user`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ collaborators: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; followin...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesListCollaboratorsForUserInput = Parameters<typeof github.copilotSpaces.listCollaboratorsForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesListCollaboratorsForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.listCollaboratorsForUser>>;

const input: CopilotSpacesListCollaboratorsForUserInput = {} as { username: string; space_number: number };
const result: CopilotSpacesListCollaboratorsForUserOutput = await github.copilotSpaces.listCollaboratorsForUser(input);

// Result shape (from schema): { collaborators: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; followin...
```

### `github.copilotSpaces.addCollaboratorForUser`

- **HTTP**: `POST /users/{username}/copilot-spaces/{space_number}/collaborators`
- **What it does**: Add a collaborator to a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/add-collaborator-for-user`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ actor_type: "User" | "Team"; actor_identifier: string; role: "reader" | "writer" | "admin"; username: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesAddCollaboratorForUserInput = Parameters<typeof github.copilotSpaces.addCollaboratorForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesAddCollaboratorForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.addCollaboratorForUser>>;

const input: CopilotSpacesAddCollaboratorForUserInput = {} as { actor_type: "User" | "Team"; actor_identifier: string; role: "reader" | "writer" | "admin"; username: string; space_number: number };
const result: CopilotSpacesAddCollaboratorForUserOutput = await github.copilotSpaces.addCollaboratorForUser(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.copilotSpaces.removeCollaboratorForUser`

- **HTTP**: `DELETE /users/{username}/copilot-spaces/{space_number}/collaborators/{actor_type}/{actor_identifier}`
- **What it does**: Remove a collaborator from a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/remove-collaborator-for-user`
- **Path params**: `space_number`, `actor_type`, `actor_identifier`
- **Query params**: None
- **Response codes**: `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; space_number: number; actor_type: "User" | "Team"; actor_identifier: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesRemoveCollaboratorForUserInput = Parameters<typeof github.copilotSpaces.removeCollaboratorForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesRemoveCollaboratorForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.removeCollaboratorForUser>>;

const input: CopilotSpacesRemoveCollaboratorForUserInput = {} as { username: string; space_number: number; actor_type: "User" | "Team"; actor_identifier: string };
const result: CopilotSpacesRemoveCollaboratorForUserOutput = await github.copilotSpaces.removeCollaboratorForUser(input);

// Result shape (from schema): unknown
```

### `github.copilotSpaces.updateCollaboratorForUser`

- **HTTP**: `PUT /users/{username}/copilot-spaces/{space_number}/collaborators/{actor_type}/{actor_identifier}`
- **What it does**: Set a collaborator role for a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/update-collaborator-for-user`
- **Path params**: `space_number`, `actor_type`, `actor_identifier`
- **Query params**: None
- **Response codes**: `200`, `204`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ role: "reader" | "writer" | "admin" | "no_access"; username: string; space_number: number; actor_type: "User" | "Team"; actor_identifier: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `204`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesUpdateCollaboratorForUserInput = Parameters<typeof github.copilotSpaces.updateCollaboratorForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesUpdateCollaboratorForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.updateCollaboratorForUser>>;

const input: CopilotSpacesUpdateCollaboratorForUserInput = {} as { role: "reader" | "writer" | "admin" | "no_access"; username: string; space_number: number; actor_type: "User" | "Team"; actor_identifier: string };
const result: CopilotSpacesUpdateCollaboratorForUserOutput = await github.copilotSpaces.updateCollaboratorForUser(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.copilotSpaces.listResourcesForUser`

- **HTTP**: `GET /users/{username}/copilot-spaces/{space_number}/resources`
- **What it does**: List resources for a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/list-resources-for-user`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ resources: ({ id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metada...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesListResourcesForUserInput = Parameters<typeof github.copilotSpaces.listResourcesForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesListResourcesForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.listResourcesForUser>>;

const input: CopilotSpacesListResourcesForUserInput = {} as { username: string; space_number: number };
const result: CopilotSpacesListResourcesForUserOutput = await github.copilotSpaces.listResourcesForUser(input);

// Result shape (from schema): { resources: ({ id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metada...
```

### `github.copilotSpaces.createResourceForUser`

- **HTTP**: `POST /users/{username}/copilot-spaces/{space_number}/resources`
- **What it does**: Create a resource for a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/create-resource-for-user`
- **Path params**: `space_number`
- **Query params**: None
- **Response codes**: `200`, `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request"; metadata: { [key: string]: unknown }; username: string; space_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...`
- OpenAPI response codes: `200`, `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesCreateResourceForUserInput = Parameters<typeof github.copilotSpaces.createResourceForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesCreateResourceForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.createResourceForUser>>;

const input: CopilotSpacesCreateResourceForUserInput = {} as { resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request"; metadata: { [key: string]: unknown }; username: string; space_number: number };
const result: CopilotSpacesCreateResourceForUserOutput = await github.copilotSpaces.createResourceForUser(input);

// Result shape (from schema): { id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...
```

### `github.copilotSpaces.deleteResourceForUser`

- **HTTP**: `DELETE /users/{username}/copilot-spaces/{space_number}/resources/{space_resource_id}`
- **What it does**: Delete a resource from a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/delete-resource-for-user`
- **Path params**: `space_number`, `space_resource_id`
- **Query params**: None
- **Response codes**: `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; space_number: number; space_resource_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesDeleteResourceForUserInput = Parameters<typeof github.copilotSpaces.deleteResourceForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesDeleteResourceForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.deleteResourceForUser>>;

const input: CopilotSpacesDeleteResourceForUserInput = {} as { username: string; space_number: number; space_resource_id: number };
const result: CopilotSpacesDeleteResourceForUserOutput = await github.copilotSpaces.deleteResourceForUser(input);

// Result shape (from schema): unknown
```

### `github.copilotSpaces.getResourceForUser`

- **HTTP**: `GET /users/{username}/copilot-spaces/{space_number}/resources/{space_resource_id}`
- **What it does**: Get a resource for a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/get-resource-for-user`
- **Path params**: `space_number`, `space_resource_id`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; space_number: number; space_resource_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CopilotSpacesGetResourceForUserInput = Parameters<typeof github.copilotSpaces.getResourceForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesGetResourceForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.getResourceForUser>>;

const input: CopilotSpacesGetResourceForUserInput = {} as { username: string; space_number: number; space_resource_id: number };
const result: CopilotSpacesGetResourceForUserOutput = await github.copilotSpaces.getResourceForUser(input);

// Result shape (from schema): { id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...
```

### `github.copilotSpaces.updateResourceForUser`

- **HTTP**: `PUT /users/{username}/copilot-spaces/{space_number}/resources/{space_resource_id}`
- **What it does**: Set a resource for a Copilot Space for a user
- **OpenAPI operationId**: `copilot-spaces/update-resource-for-user`
- **Path params**: `space_number`, `space_resource_id`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ metadata?: { [key: string]: unknown }; username: string; space_number: number; space_resource_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CopilotSpacesUpdateResourceForUserInput = Parameters<typeof github.copilotSpaces.updateResourceForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSpacesUpdateResourceForUserOutput = Awaited<ReturnType<typeof github.copilotSpaces.updateResourceForUser>>;

const input: CopilotSpacesUpdateResourceForUserInput = {} as { metadata?: { [key: string]: unknown }; username: string; space_number: number; space_resource_id: number };
const result: CopilotSpacesUpdateResourceForUserOutput = await github.copilotSpaces.updateResourceForUser(input);

// Result shape (from schema): { id: number; resource_type: "repository" | "github_file" | "free_text" | "github_issue" | "github_pull_request" | "media_content" | "uploaded_text_file"; copilot_chat_attachment_id?: number | null; metadata: { [key: st...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
