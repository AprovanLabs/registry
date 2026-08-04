# Project Templates

5 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.createProjectWithCustomTemplate`

Create custom project — [Provider docs](http://www.atlassian.com)

```ts
jira.createProjectWithCustomTemplate(input: {
  details?: CustomTemplatesProjectDetails;
  template?: CustomTemplateRequestDto;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/project-template` · `createProjectWithCustomTemplate`</sub>

## `jira.editTemplate`

Edit a custom project template — [Provider docs](http://www.atlassian.com)

```ts
jira.editTemplate(input: {
  /** The description of the template */
  templateDescription?: string;
  templateGenerationOptions?: CustomTemplateOptions;
  /** The unique identifier of the template */
  templateKey?: string;
  /** The name of the template */
  templateName?: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/project-template/edit-template` · `editTemplate`</sub>

## `jira.liveTemplate`

Gets a custom project template — [Provider docs](http://www.atlassian.com)

```ts
jira.liveTemplate(input: {
  /** optional - The \{@link String\} containing the project key linked to the custom template to retrieve */
  projectId?: string;
  /** optional - The \{@link String\} containing the key of the custom template to retrieve */
  templateKey?: string;
}): Promise<ProjectTemplateModel>
```

<sub>`GET /rest/api/3/project-template/live-template` · `liveTemplate`</sub>

## `jira.removeTemplate`

Deletes a custom project template — [Provider docs](http://www.atlassian.com)

```ts
jira.removeTemplate(input: {
  /** The \{@link String\} containing the key of the custom template to remove */
  templateKey: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/project-template/remove-template` · `removeTemplate`</sub>

## `jira.saveTemplate`

Save a custom project template — [Provider docs](http://www.atlassian.com)

```ts
jira.saveTemplate(input: {
  /** The description of the template */
  templateDescription?: string;
  templateFromProjectRequest?: SaveProjectTemplateRequest;
  /** The name of the template */
  templateName?: string;
}): Promise<SaveTemplateResponse>
```

<sub>`POST /rest/api/3/project-template/save-template` · `saveTemplate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
