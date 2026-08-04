# SSH Keys

5 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.sshKeysList`

List All SSH Keys

```ts
digitalocean.sshKeysList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ ssh_keys?: (SshKeys)[] } & Pagination & Meta>
```

<sub>`GET /v2/account/keys` · `sshKeys_list`</sub>

## `digitalocean.sshKeysCreate`

Create a New SSH Key

```ts
digitalocean.sshKeysCreate(input: {
  id?: SshKeyId;
  fingerprint?: SshKeyFingerprint;
  /** The entire public key string that was uploaded. Embedded into the root user's `authorized_keys` file if you include this key during Droplet creation. */
  public_key: string;
  name: SshKeyName;
}): Promise<{ ssh_key?: SshKeys }>
```

<sub>`POST /v2/account/keys` · `sshKeys_create`</sub>

## `digitalocean.sshKeysDelete`

Delete an SSH Key

```ts
digitalocean.sshKeysDelete(input: {
  /** Either the ID or the fingerprint of an existing SSH key. */
  ssh_key_identifier: SshKeyId | SshKeyFingerprint;
}): Promise<undefined>
```

<sub>`DELETE /v2/account/keys/{ssh_key_identifier}` · `sshKeys_delete`</sub>

## `digitalocean.sshKeysGet`

Retrieve an Existing SSH Key

```ts
digitalocean.sshKeysGet(input: {
  /** Either the ID or the fingerprint of an existing SSH key. */
  ssh_key_identifier: SshKeyId | SshKeyFingerprint;
}): Promise<{ ssh_key?: SshKeys }>
```

<sub>`GET /v2/account/keys/{ssh_key_identifier}` · `sshKeys_get`</sub>

## `digitalocean.sshKeysUpdate`

Update an SSH Key's Name

```ts
digitalocean.sshKeysUpdate(input: {
  name?: SshKeyName;
  /** Either the ID or the fingerprint of an existing SSH key. */
  ssh_key_identifier: SshKeyId | SshKeyFingerprint;
}): Promise<{ ssh_key?: SshKeys }>
```

<sub>`PUT /v2/account/keys/{ssh_key_identifier}` · `sshKeys_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
