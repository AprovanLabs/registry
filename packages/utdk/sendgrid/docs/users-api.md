# Users API

9 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getUserAccount`

Get a user's account information. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserAccount(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ reputation: number; type: "free" | "paid" }>
```

<sub>`GET /user/account` · `GET_user-account`</sub>

## `sendgrid.getUserCredits`

Retrieve your credit balance — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserCredits(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ last_reset: string; next_reset: string; overage: number; remain: number; reset_frequency: string; total: number; used: number }>
```

<sub>`GET /user/credits` · `GET_user-credits`</sub>

## `sendgrid.getUserEmail`

Retrieve your account email address — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserEmail(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ email: string }>
```

<sub>`GET /user/email` · `GET_user-email`</sub>

## `sendgrid.putUserEmail`

Update your account email address — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.putUserEmail(input: {
  /** The new email address that you would like to use for your account. */
  email?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ email: string }>
```

<sub>`PUT /user/email` · `PUT_user-email`</sub>

## `sendgrid.putUserPassword`

Update your password — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.putUserPassword(input: {
  /** The new password you would like to use for your account. */
  new_password: string;
  /** The old password for your account. */
  old_password: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`PUT /user/password` · `PUT_user-password`</sub>

## `sendgrid.getUserProfile`

Get a user's profile — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserProfile(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ address: string; address2?: string; city: string; company: string; country: string; first_name: string; last_name: string; phone: string; state: string; website: string; zip: string }>
```

<sub>`GET /user/profile` · `GET_user-profile`</sub>

## `sendgrid.patchUserProfile`

Update a user's profile — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchUserProfile(input: {
  /** The street address for this user profile. */
  address?: string;
  /** An optional second line for the street address of this user profile. */
  address2?: string;
  /** The city for the user profile. */
  city?: string;
  /** That company that this user profile is associated with. */
  company?: string;
  /** Th country of this user profile. */
  country?: string;
  /** The first name of the user. */
  first_name?: string;
  /** The last name of the user. */
  last_name?: string;
  /** The phone number for the user. */
  phone?: string;
  /** The state for this user. */
  state?: string;
  /** The website associated with this user. */
  website?: string;
  /** The zip code for this user. */
  zip?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<UserProfile>
```

<sub>`PATCH /user/profile` · `PATCH_user-profile`</sub>

## `sendgrid.getUserUsername`

Retrieve your username — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserUsername(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ user_id: number; username: string }>
```

<sub>`GET /user/username` · `GET_user-username`</sub>

## `sendgrid.putUserUsername`

Update your username — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.putUserUsername(input: {
  /** The new username you would like to use for your account. */
  username?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ username: string }>
```

<sub>`PUT /user/username` · `PUT_user-username`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
