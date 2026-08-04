# Subuser Monitor Settings

4 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.deleteSubusersSubuserNameMonitor`

Delete monitor settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSubusersSubuserNameMonitor(input: {
  /** The name of the subuser for which to retrieve monitor settings. */
  subuser_name: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /subusers/{subuser_name}/monitor` · `DELETE_subusers-subuser_name-monitor`</sub>

## `sendgrid.getSubusersSubuserNameMonitor`

Retrieve monitor settings for a subuser — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSubusersSubuserNameMonitor(input: {
  /** The name of the subuser for which to retrieve monitor settings. */
  subuser_name: string;
}): Promise<Monitor>
```

<sub>`GET /subusers/{subuser_name}/monitor` · `GET_subusers-subuser_name-monitor`</sub>

## `sendgrid.postSubusersSubuserNameMonitor`

Create monitor settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postSubusersSubuserNameMonitor(input: {
  /** The email address to which Sendgrid should send emails for monitoring. */
  email: string;
  /** The frequency at which to forward monitoring emails. An email will be sent when your subuser sends this many (e.g., 1,000) emails. */
  frequency: number;
  /** The name of the subuser for which to retrieve monitor settings. */
  subuser_name: string;
}): Promise<Monitor>
```

<sub>`POST /subusers/{subuser_name}/monitor` · `POST_subusers-subuser_name-monitor`</sub>

## `sendgrid.putSubusersSubuserNameMonitor`

Update Monitor Settings for a subuser — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.putSubusersSubuserNameMonitor(input: {
  /** The email address to which Sendgrid should send emails for monitoring. */
  email: string;
  /** The frequency at which to forward monitoring emails. An email will be sent when your subuser sends this many (e.g., 1,000) emails. */
  frequency: number;
  /** The name of the subuser for which to retrieve monitor settings. */
  subuser_name: string;
}): Promise<Monitor>
```

<sub>`PUT /subusers/{subuser_name}/monitor` · `PUT_subusers-subuser_name-monitor`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
