# Single Sign On Teammates

2 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postSsoTeammates`

Create SSO Teammate — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postSsoTeammates(input: {
  /** The Teammate’s email address. This email address will also function as the Teammate’s username and must match the address assigned to the user in your IdP. This address cannot be changed after the Teammate is created. */
  email: string;
  /** The Teammate’s first name. */
  first_name: string;
  /** Indicates if the Teammate has admin permissions. */
  is_admin?: boolean;
  /** Indicates if the Teammate has read_only permissions. */
  is_read_only?: boolean;
  /** The Teammate’s last name. */
  last_name: string;
  /** The permission scopes assigned to the Teammate. */
  scopes: (string)[];
}): Promise<SsoTeammateResponse>
```

<sub>`POST /sso/teammates` · `POST_sso-teammates`</sub>

## `sendgrid.patchSsoTeammatesUsername`

Edit an SSO Teammate — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchSsoTeammatesUsername(input: {
  first_name?: string;
  is_admin?: boolean;
  last_name?: string;
  scopes?: (string)[];
  /** This email address must be the same address assigned to the teammate in your IdP */
  username: string;
}): Promise<SsoTeammatesPatchResponse>
```

<sub>`PATCH /sso/teammates/{username}` · `PATCH_sso-teammates-username`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
