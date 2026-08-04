# Files.Remote

6 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.filesRemoteAdd`

Adds a file from a remote service — [API reference](https://api.slack.com/methods/files.remote.add)

```ts
slack.filesRemoteAdd(input: {
  /** Creator defined GUID for the file. */
  external_id?: string;
  /** URL of the remote file. */
  external_url?: string;
  /** type of file */
  filetype?: string;
  /** A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file. */
  indexable_file_contents?: string;
  /** Preview of the document via `multipart/form-data`. */
  preview_image?: string;
  /** Title of the file being shared. */
  title?: string;
  /** Authentication token. Requires scope: `remote_files:write` */
  token?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /files.remote.add` · `files_remote_add`</sub>

## `slack.filesRemoteInfo`

Retrieve information about a remote file added to Slack — [API reference](https://api.slack.com/methods/files.remote.info)

```ts
slack.filesRemoteInfo(input: {
  /** Authentication token. Requires scope: `remote_files:read` */
  token?: string;
  /** Specify a file by providing its ID. */
  file?: string;
  /** Creator defined GUID for the file. */
  external_id?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /files.remote.info` · `files_remote_info`</sub>

## `slack.filesRemoteList`

Retrieve information about a remote file added to Slack — [API reference](https://api.slack.com/methods/files.remote.list)

```ts
slack.filesRemoteList(input: {
  /** Authentication token. Requires scope: `remote_files:read` */
  token?: string;
  /** Filter files appearing in a specific channel, indicated by its ID. */
  channel?: string;
  /** Filter files created after this timestamp (inclusive). */
  ts_from?: number;
  /** Filter files created before this timestamp (inclusive). */
  ts_to?: number;
  /** The maximum number of items to return. */
  limit?: number;
  /** Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
  cursor?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /files.remote.list` · `files_remote_list`</sub>

## `slack.filesRemoteRemove`

Remove a remote file. — [API reference](https://api.slack.com/methods/files.remote.remove)

```ts
slack.filesRemoteRemove(input: {
  /** Creator defined GUID for the file. */
  external_id?: string;
  /** Specify a file by providing its ID. */
  file?: string;
  /** Authentication token. Requires scope: `remote_files:write` */
  token?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /files.remote.remove` · `files_remote_remove`</sub>

## `slack.filesRemoteShare`

Share a remote file into a channel. — [API reference](https://api.slack.com/methods/files.remote.share)

```ts
slack.filesRemoteShare(input: {
  /** Authentication token. Requires scope: `remote_files:share` */
  token?: string;
  /** Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required. */
  file?: string;
  /** The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required. */
  external_id?: string;
  /** Comma-separated list of channel IDs where the file will be shared. */
  channels?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /files.remote.share` · `files_remote_share`</sub>

## `slack.filesRemoteUpdate`

Updates an existing remote file. — [API reference](https://api.slack.com/methods/files.remote.update)

```ts
slack.filesRemoteUpdate(input: {
  /** Creator defined GUID for the file. */
  external_id?: string;
  /** URL of the remote file. */
  external_url?: string;
  /** Specify a file by providing its ID. */
  file?: string;
  /** type of file */
  filetype?: string;
  /** File containing contents that can be used to improve searchability for the remote file. */
  indexable_file_contents?: string;
  /** Preview of the document via `multipart/form-data`. */
  preview_image?: string;
  /** Title of the file being shared. */
  title?: string;
  /** Authentication token. Requires scope: `remote_files:write` */
  token?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /files.remote.update` · `files_remote_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
