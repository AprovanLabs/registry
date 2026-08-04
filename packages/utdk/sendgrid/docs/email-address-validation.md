# Email Address Validation

1 operation · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postValidationsEmail`

Validate an email — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postValidationsEmail(input: {
  /** The email address that you want to validate. */
  email: string;
  /** A one-word classifier for where this validation originated. */
  source?: string;
}): Promise<{ result: { checks: { additional: { has_known_bounces: boolean; has_suspected_bounces: boolean }; domain: { has_mx_or_a_record: boolean; has_valid_address_syntax: boolean; is_suspected_disposable_address: boolean }; local_part: { is_suspected_role_address: boolean } }; email: string; host: string; ip_address: string; local: string; score: number; source?: string; suggestion?: string; verdict: "Va...>
```

<sub>`POST /validations/email` · `POST_validations-email`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
