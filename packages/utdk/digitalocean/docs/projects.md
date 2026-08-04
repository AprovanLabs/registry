# Projects

9 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.projectsList`

List All Projects

```ts
digitalocean.projectsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ projects?: (Project)[] } & Pagination & Meta>
```

<sub>`GET /v2/projects` · `projects_list`</sub>

## `digitalocean.projectsCreate`

Create a Project

```ts
digitalocean.projectsCreate(input: {
  /** The unique universal identifier of this project. */
  id?: string;
  /** The unique universal identifier of the project owner. */
  owner_uuid?: string;
  /** The integer id of the project owner. */
  owner_id?: number;
  /** The human-readable name for the project. The maximum length is 175 characters and the name must be unique. */
  name: string;
  /** The description of the project. The maximum length is 255 characters. */
  description?: string;
  /** The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  */
  purpose: string;
  /** The environment of the project's resources. */
  environment?: "Development" | "Staging" | "Production";
  /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
  created_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the project was updated. */
  updated_at?: string;
}): Promise<{ project?: Project }>
```

<sub>`POST /v2/projects` · `projects_create`</sub>

## `digitalocean.projectsDelete`

Delete an Existing Project

```ts
digitalocean.projectsDelete(input: {
  /** A unique identifier for a project. */
  project_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/projects/{project_id}` · `projects_delete`</sub>

## `digitalocean.projectsGet`

Retrieve an Existing Project

```ts
digitalocean.projectsGet(input: {
  /** A unique identifier for a project. */
  project_id: string;
}): Promise<{ project?: Project }>
```

<sub>`GET /v2/projects/{project_id}` · `projects_get`</sub>

## `digitalocean.projectsPatch`

Patch a Project

```ts
digitalocean.projectsPatch(input: {
  /** The unique universal identifier of this project. */
  id?: string;
  /** The unique universal identifier of the project owner. */
  owner_uuid?: string;
  /** The integer id of the project owner. */
  owner_id?: number;
  /** The human-readable name for the project. The maximum length is 175 characters and the name must be unique. */
  name?: string;
  /** The description of the project. The maximum length is 255 characters. */
  description?: string;
  /** The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  */
  purpose?: string;
  /** The environment of the project's resources. */
  environment?: "Development" | "Staging" | "Production";
  /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
  created_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the project was updated. */
  updated_at?: string;
  /** If true, all resources will be added to this project if no project is specified. */
  is_default?: boolean;
  /** A unique identifier for a project. */
  project_id: string;
}): Promise<{ project?: Project }>
```

<sub>`PATCH /v2/projects/{project_id}` · `projects_patch`</sub>

## `digitalocean.projectsUpdate`

Update a Project

```ts
digitalocean.projectsUpdate(input: {
  /** The unique universal identifier of this project. */
  id?: string;
  /** The unique universal identifier of the project owner. */
  owner_uuid?: string;
  /** The integer id of the project owner. */
  owner_id?: number;
  /** The human-readable name for the project. The maximum length is 175 characters and the name must be unique. */
  name: string;
  /** The description of the project. The maximum length is 255 characters. */
  description: string;
  /** The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  */
  purpose: string;
  /** The environment of the project's resources. */
  environment: "Development" | "Staging" | "Production";
  /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
  created_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the project was updated. */
  updated_at?: string;
  /** If true, all resources will be added to this project if no project is specified. */
  is_default: boolean;
  /** A unique identifier for a project. */
  project_id: string;
}): Promise<{ project?: Project }>
```

<sub>`PUT /v2/projects/{project_id}` · `projects_update`</sub>

## `digitalocean.projectsGetDefault`

Retrieve the Default Project

```ts
digitalocean.projectsGetDefault(): Promise<{ project?: Project }>
```

<sub>`GET /v2/projects/default` · `projects_get_default`</sub>

## `digitalocean.projectsPatchDefault`

Patch the Default Project

```ts
digitalocean.projectsPatchDefault(input: {
  /** The unique universal identifier of this project. */
  id?: string;
  /** The unique universal identifier of the project owner. */
  owner_uuid?: string;
  /** The integer id of the project owner. */
  owner_id?: number;
  /** The human-readable name for the project. The maximum length is 175 characters and the name must be unique. */
  name?: string;
  /** The description of the project. The maximum length is 255 characters. */
  description?: string;
  /** The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  */
  purpose?: string;
  /** The environment of the project's resources. */
  environment?: "Development" | "Staging" | "Production";
  /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
  created_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the project was updated. */
  updated_at?: string;
  /** If true, all resources will be added to this project if no project is specified. */
  is_default?: boolean;
}): Promise<{ project?: Project }>
```

<sub>`PATCH /v2/projects/default` · `projects_patch_default`</sub>

## `digitalocean.projectsUpdateDefault`

Update the Default Project

```ts
digitalocean.projectsUpdateDefault(input: {
  /** The unique universal identifier of this project. */
  id?: string;
  /** The unique universal identifier of the project owner. */
  owner_uuid?: string;
  /** The integer id of the project owner. */
  owner_id?: number;
  /** The human-readable name for the project. The maximum length is 175 characters and the name must be unique. */
  name: string;
  /** The description of the project. The maximum length is 255 characters. */
  description: string;
  /** The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  */
  purpose: string;
  /** The environment of the project's resources. */
  environment: "Development" | "Staging" | "Production";
  /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
  created_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the project was updated. */
  updated_at?: string;
  /** If true, all resources will be added to this project if no project is specified. */
  is_default: boolean;
}): Promise<{ project?: Project }>
```

<sub>`PUT /v2/projects/default` · `projects_update_default`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
