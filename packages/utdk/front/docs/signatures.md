# Signatures

7 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.deleteSignature`

Delete signature — [Provider docs](https://community.front.com)

```ts
front.deleteSignature(input: {
  /** The signature ID */
  signature_id: string;
}): Promise<undefined>
```

<sub>`DELETE /signatures/{signature_id}` · `delete-signature`</sub>

## `front.getSignatures`

Get signatures — [Provider docs](https://community.front.com)

```ts
front.getSignatures(input: {
  /** The signature ID */
  signature_id: string;
}): Promise<SignatureResponse>
```

<sub>`GET /signatures/{signature_id}` · `get-signatures`</sub>

## `front.updateSignature`

Update signature — [Provider docs](https://community.front.com)

```ts
front.updateSignature(input: {
  /** Name of the signature */
  name?: string;
  /** Sender info of the signature that will appear in the From line of emails sent. */
  sender_info?: string;
  /** Body of the signature */
  body?: string;
  /** Whether or not the signature is visible in all individual channels for teammates in the given team. Can only be set for shared signatures. */
  is_visible_for_all_teammate_channels?: boolean;
  /** If true, the signature will be set as the default signature for the team or teammate. */
  is_default?: boolean;
  /** The specific shared channels this signature if available in. If null, then it will be available in all channels. If unspecified, will retain previous value. Alternatively, you can specify channels using a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  channel_ids?: (string)[];
  /** The signature ID */
  signature_id: string;
}): Promise<SignatureResponse>
```

<sub>`PATCH /signatures/{signature_id}` · `update-signature`</sub>

## `front.listTeammateSignatures`

List teammate signatures — [Provider docs](https://community.front.com)

```ts
front.listTeammateSignatures(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (SignatureResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/signatures` · `list-teammate-signatures`</sub>

## `front.createTeammateSignature`

Create teammate signature — [Provider docs](https://community.front.com)

```ts
front.createTeammateSignature(input: {
  /** Name of the signature */
  name: string;
  /** Sender info of the signature that will appear in the From line of emails sent. */
  sender_info?: string;
  /** Body of the signature */
  body: string;
  /** If true, the signature will be set as the default signature for the teammate. */
  is_default?: boolean;
  /** The specific channels this signature is available in. If omitted or null, the signature will be available in all channels the teammate has access to. Alternatively, you can specify channels using a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  channel_ids?: (string)[];
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<SignatureResponse>
```

<sub>`POST /teammates/{teammate_id}/signatures` · `create-teammate-signature`</sub>

## `front.listTeamSignatures`

List team signatures — [Provider docs](https://community.front.com)

```ts
front.listTeamSignatures(input: {
  /** The team ID */
  team_id: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (SignatureResponse)[] }>
```

<sub>`GET /teams/{team_id}/signatures` · `list-team-signatures`</sub>

## `front.createTeamSignature`

Create team signature — [Provider docs](https://community.front.com)

```ts
front.createTeamSignature(input: {
  /** Name of the signature */
  name: string;
  /** Sender info of the signature that will appear in the From line of emails sent. */
  sender_info?: string;
  /** Body of the signature */
  body: string;
  /** Whether or not the signature is visible in all individual channels for teammates in the given team. */
  is_visible_for_all_teammate_channels?: boolean;
  /** If true, the signature will be set as the default signature for the team. */
  is_default?: boolean;
  /** The specific channels this signature is available in. If omitted or null, the signature will be available in all channels the team has access to. Alternatively, you can specify channels using a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  channel_ids?: (string)[];
  /** The team ID */
  team_id: string;
}): Promise<SignatureResponse>
```

<sub>`POST /teams/{team_id}/signatures` · `create-team-signature`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
