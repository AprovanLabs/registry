# Files

6 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.filesDelete`

Deletes a file. — [API reference](https://api.slack.com/methods/files.delete)

```ts
slack.filesDelete(input: {
  /** ID of file to delete. */
  file?: string;
}, options?: { headers?: { token?: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /files.delete` · `files_delete`</sub>

## `slack.filesInfo`

Gets information about a file. — [API reference](https://api.slack.com/methods/files.info)

```ts
slack.filesInfo(input: {
  /** Authentication token. Requires scope: `files:read` */
  token?: string;
  /** Specify a file by providing its ID. */
  file?: string;
  count?: string;
  page?: string;
  /** The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. */
  limit?: number;
  /** Parameter for pagination. File comments are paginated for a single file. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection of comments. See [pagination](/docs/pagination) for more details. */
  cursor?: string;
}): Promise<{ comments: ObjsComments; content_html?: unknown; editor?: DefsUserId; file: ObjsFile; ok: DefsOkTrue; paging?: ObjsPaging; response_metadata?: ObjsResponseMetadata }>
```

<sub>`GET /files.info` · `files_info`</sub>

## `slack.filesList`

List for a team, in a channel, or from a user with applied filters. — [API reference](https://api.slack.com/methods/files.list)

```ts
slack.filesList(input: {
  /** Authentication token. Requires scope: `files:read` */
  token?: string;
  /** Filter files created by a single user. */
  user?: string;
  /** Filter files appearing in a specific channel, indicated by its ID. */
  channel?: string;
  /** Filter files created after this timestamp (inclusive). */
  ts_from?: number;
  /** Filter files created before this timestamp (inclusive). */
  ts_to?: number;
  /** Filter files by type ([see below](#file_types)). You can pass multiple values in the types argument, like `types=spaces,snippets`.The default value is `all`, which does not filter the list. */
  types?: string;
  count?: string;
  page?: string;
  /** Show truncated file info for files hidden due to being too old, and the team who owns the file being over the file limit. */
  show_files_hidden_by_limit?: boolean;
}): Promise<{ files: (ObjsFile)[]; ok: DefsOkTrue; paging: ObjsPaging }>
```

<sub>`GET /files.list` · `files_list`</sub>

## `slack.filesRevokePublicUrl`

Revokes public/external sharing access for a file — [API reference](https://api.slack.com/methods/files.revokePublicURL)

```ts
slack.filesRevokePublicUrl(input: {
  /** File to revoke */
  file?: string;
}, options?: { headers?: { token?: string } }): Promise<{ file: ObjsFile; ok: DefsOkTrue }>
```

<sub>`POST /files.revokePublicURL` · `files_revokePublicURL`</sub>

## `slack.filesSharedPublicUrl`

Enables a file for public/external sharing. — [API reference](https://api.slack.com/methods/files.sharedPublicURL)

```ts
slack.filesSharedPublicUrl(input: {
  /** File to share */
  file?: string;
}, options?: { headers?: { token?: string } }): Promise<{ file: ObjsFile; ok: DefsOkTrue }>
```

<sub>`POST /files.sharedPublicURL` · `files_sharedPublicURL`</sub>

## `slack.filesUpload`

Uploads or creates a file. — [API reference](https://api.slack.com/methods/files.upload)

```ts
slack.filesUpload(input: {
  /** Comma-separated list of channel names or IDs where the file will be shared. */
  channels?: string;
  /** File contents via a POST variable. If omitting this parameter, you must provide a `file`. */
  content?: string;
  /** File contents via `multipart/form-data`. If omitting this parameter, you must submit `content`. */
  file?: string;
  /** Filename of file. */
  filename?: string;
  /** A [file type](/types/file#file_types) identifier. */
  filetype?: string;
  /** The message text introducing the file in specified `channels`. */
  initial_comment?: string;
  /** Provide another message's `ts` value to upload this file as a reply. Never use a reply's `ts` value; use its parent instead. */
  thread_ts?: number;
  /** Title of file. */
  title?: string;
  /** Authentication token. Requires scope: `files:write:user` */
  token?: string;
}): Promise<{ file: ObjsFile; ok: DefsOkTrue }>
```

<sub>`POST /files.upload` · `files_upload`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
