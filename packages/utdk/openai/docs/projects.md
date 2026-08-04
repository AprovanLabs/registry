# Projects

19 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listProjects`

Returns a list of projects. — [Provider docs](https://help.openai.com/)

```ts
openai.listProjects(input: {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
  /** If `true` returns all projects including those that have been `archived`. Archived projects are not included by default. */
  include_archived?: boolean;
}): Promise<ProjectListResponse>
```

<sub>`GET /organization/projects` · `list-projects`</sub>

## `openai.createProject`

Create a new project in the organization. Projects can be created and archived, but cannot be deleted. — [Provider docs](https://help.openai.com/)

```ts
openai.createProject(input: {
  /** The friendly name of the project, this name appears in reports. */
  name: string;
}): Promise<Project>
```

<sub>`POST /organization/projects` · `create-project`</sub>

## `openai.retrieveProject`

Retrieves a project. — [Provider docs](https://help.openai.com/)

```ts
openai.retrieveProject(input: {
  /** The ID of the project. */
  project_id: string;
}): Promise<Project>
```

<sub>`GET /organization/projects/{project_id}` · `retrieve-project`</sub>

## `openai.modifyProject`

Modifies a project in the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.modifyProject(input: {
  /** The updated name of the project, this name appears in reports. */
  name: string;
  /** The ID of the project. */
  project_id: string;
}): Promise<Project>
```

<sub>`POST /organization/projects/{project_id}` · `modify-project`</sub>

## `openai.listProjectApiKeys`

Returns a list of API keys in the project. — [Provider docs](https://help.openai.com/)

```ts
openai.listProjectApiKeys(input: {
  /** The ID of the project. */
  project_id: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
}): Promise<ProjectApiKeyListResponse>
```

<sub>`GET /organization/projects/{project_id}/api_keys` · `list-project-api-keys`</sub>

## `openai.deleteProjectApiKey`

Deletes an API key from the project. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteProjectApiKey(input: {
  /** The ID of the project. */
  project_id: string;
  /** The ID of the API key. */
  key_id: string;
}): Promise<ProjectApiKeyDeleteResponse>
```

<sub>`DELETE /organization/projects/{project_id}/api_keys/{key_id}` · `delete-project-api-key`</sub>

## `openai.retrieveProjectApiKey`

Retrieves an API key in the project. — [Provider docs](https://help.openai.com/)

```ts
openai.retrieveProjectApiKey(input: {
  /** The ID of the project. */
  project_id: string;
  /** The ID of the API key. */
  key_id: string;
}): Promise<ProjectApiKey>
```

<sub>`GET /organization/projects/{project_id}/api_keys/{key_id}` · `retrieve-project-api-key`</sub>

## `openai.archiveProject`

Archives a project in the organization. Archived projects cannot be used or updated. — [Provider docs](https://help.openai.com/)

```ts
openai.archiveProject(input: {
  /** The ID of the project. */
  project_id: string;
}): Promise<Project>
```

<sub>`POST /organization/projects/{project_id}/archive` · `archive-project`</sub>

## `openai.listProjectRateLimits`

Returns the rate limits per model for a project. — [Provider docs](https://help.openai.com/)

```ts
openai.listProjectRateLimits(input: {
  /** The ID of the project. */
  project_id: string;
  /** A limit on the number of objects to be returned. The default is 100.  */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, beginning with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
  before?: string;
}): Promise<ProjectRateLimitListResponse>
```

<sub>`GET /organization/projects/{project_id}/rate_limits` · `list-project-rate-limits`</sub>

## `openai.updateProjectRateLimits`

Updates a project rate limit. — [Provider docs](https://help.openai.com/)

```ts
openai.updateProjectRateLimits(input: {
  /** The maximum requests per minute. */
  max_requests_per_1_minute?: number;
  /** The maximum tokens per minute. */
  max_tokens_per_1_minute?: number;
  /** The maximum images per minute. Only relevant for certain models. */
  max_images_per_1_minute?: number;
  /** The maximum audio megabytes per minute. Only relevant for certain models. */
  max_audio_megabytes_per_1_minute?: number;
  /** The maximum requests per day. Only relevant for certain models. */
  max_requests_per_1_day?: number;
  /** The maximum batch input tokens per day. Only relevant for certain models. */
  batch_1_day_max_input_tokens?: number;
  /** The ID of the project. */
  project_id: string;
  /** The ID of the rate limit. */
  rate_limit_id: string;
}): Promise<ProjectRateLimit>
```

<sub>`POST /organization/projects/{project_id}/rate_limits/{rate_limit_id}` · `update-project-rate-limits`</sub>

## `openai.listProjectServiceAccounts`

Returns a list of service accounts in the project. — [Provider docs](https://help.openai.com/)

```ts
openai.listProjectServiceAccounts(input: {
  /** The ID of the project. */
  project_id: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
}): Promise<ProjectServiceAccountListResponse>
```

<sub>`GET /organization/projects/{project_id}/service_accounts` · `list-project-service-accounts`</sub>

## `openai.createProjectServiceAccount`

Creates a new service account in the project. This also returns an unredacted API key for the service account. — [Provider docs](https://help.openai.com/)

```ts
openai.createProjectServiceAccount(input: {
  /** The name of the service account being created. */
  name: string;
  /** The ID of the project. */
  project_id: string;
}): Promise<ProjectServiceAccountCreateResponse>
```

<sub>`POST /organization/projects/{project_id}/service_accounts` · `create-project-service-account`</sub>

## `openai.deleteProjectServiceAccount`

Deletes a service account from the project. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteProjectServiceAccount(input: {
  /** The ID of the project. */
  project_id: string;
  /** The ID of the service account. */
  service_account_id: string;
}): Promise<ProjectServiceAccountDeleteResponse>
```

<sub>`DELETE /organization/projects/{project_id}/service_accounts/{service_account_id}` · `delete-project-service-account`</sub>

## `openai.retrieveProjectServiceAccount`

Retrieves a service account in the project. — [Provider docs](https://help.openai.com/)

```ts
openai.retrieveProjectServiceAccount(input: {
  /** The ID of the project. */
  project_id: string;
  /** The ID of the service account. */
  service_account_id: string;
}): Promise<ProjectServiceAccount>
```

<sub>`GET /organization/projects/{project_id}/service_accounts/{service_account_id}` · `retrieve-project-service-account`</sub>

## `openai.listProjectUsers`

Returns a list of users in the project. — [Provider docs](https://help.openai.com/)

```ts
openai.listProjectUsers(input: {
  /** The ID of the project. */
  project_id: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
}): Promise<ProjectUserListResponse>
```

<sub>`GET /organization/projects/{project_id}/users` · `list-project-users`</sub>

## `openai.createProjectUser`

Adds a user to the project. Users must already be members of the organization to be added to a project. — [Provider docs](https://help.openai.com/)

```ts
openai.createProjectUser(input: {
  /** The ID of the user. */
  user_id: string;
  /** `owner` or `member` */
  role: "owner" | "member";
  /** The ID of the project. */
  project_id: string;
}): Promise<ProjectUser>
```

<sub>`POST /organization/projects/{project_id}/users` · `create-project-user`</sub>

## `openai.deleteProjectUser`

Deletes a user from the project. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteProjectUser(input: {
  /** The ID of the project. */
  project_id: string;
  /** The ID of the user. */
  user_id: string;
}): Promise<ProjectUserDeleteResponse>
```

<sub>`DELETE /organization/projects/{project_id}/users/{user_id}` · `delete-project-user`</sub>

## `openai.retrieveProjectUser`

Retrieves a user in the project. — [Provider docs](https://help.openai.com/)

```ts
openai.retrieveProjectUser(input: {
  /** The ID of the project. */
  project_id: string;
  /** The ID of the user. */
  user_id: string;
}): Promise<ProjectUser>
```

<sub>`GET /organization/projects/{project_id}/users/{user_id}` · `retrieve-project-user`</sub>

## `openai.modifyProjectUser`

Modifies a user's role in the project. — [Provider docs](https://help.openai.com/)

```ts
openai.modifyProjectUser(input: {
  /** `owner` or `member` */
  role: "owner" | "member";
  /** The ID of the project. */
  project_id: string;
  /** The ID of the user. */
  user_id: string;
}): Promise<ProjectUser>
```

<sub>`POST /organization/projects/{project_id}/users/{user_id}` · `modify-project-user`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
