# Users

Generated from OpenAPI operation grouping.

- `GET /user`: Get the authenticated user
- `PATCH /user`: Update the authenticated user
- `GET /user/{account_id}`: Get a user using their ID
- `GET /user/blocks`: List users blocked by the authenticated user
- `DELETE /user/blocks/{username}`: Unblock a user
- `GET /user/blocks/{username}`: Check if a user is blocked by the authenticated user
- `PUT /user/blocks/{username}`: Block a user
- `PATCH /user/email/visibility`: Set primary email visibility for the authenticated user
- `DELETE /user/emails`: Delete an email address for the authenticated user
- `GET /user/emails`: List email addresses for the authenticated user
- `POST /user/emails`: Add an email address for the authenticated user
- `GET /user/followers`: List followers of the authenticated user
- `GET /user/following`: List the people the authenticated user follows
- `DELETE /user/following/{username}`: Unfollow a user
- `GET /user/following/{username}`: Check if a person is followed by the authenticated user
- `PUT /user/following/{username}`: Follow a user
- `GET /user/gpg_keys`: List GPG keys for the authenticated user
- `POST /user/gpg_keys`: Create a GPG key for the authenticated user
- `DELETE /user/gpg_keys/{gpg_key_id}`: Delete a GPG key for the authenticated user
- `GET /user/gpg_keys/{gpg_key_id}`: Get a GPG key for the authenticated user
- `GET /user/keys`: List public SSH keys for the authenticated user
- `POST /user/keys`: Create a public SSH key for the authenticated user
- `DELETE /user/keys/{key_id}`: Delete a public SSH key for the authenticated user
- `GET /user/keys/{key_id}`: Get a public SSH key for the authenticated user
- `GET /user/public_emails`: List public email addresses for the authenticated user
- `DELETE /user/social_accounts`: Delete social accounts for the authenticated user
- `GET /user/social_accounts`: List social accounts for the authenticated user
- `POST /user/social_accounts`: Add social accounts for the authenticated user
- `GET /user/ssh_signing_keys`: List SSH signing keys for the authenticated user
- `POST /user/ssh_signing_keys`: Create a SSH signing key for the authenticated user
- `DELETE /user/ssh_signing_keys/{ssh_signing_key_id}`: Delete an SSH signing key for the authenticated user
- `GET /user/ssh_signing_keys/{ssh_signing_key_id}`: Get an SSH signing key for the authenticated user
- `GET /users`: List users
- `GET /users/{username}`: Get a user
- `DELETE /users/{username}/attestations/{attestation_id}`: Delete attestations by ID
- `GET /users/{username}/attestations/{subject_digest}`: List attestations
- `POST /users/{username}/attestations/bulk-list`: List attestations by bulk subject digests
- `POST /users/{username}/attestations/delete-request`: Delete attestations in bulk
- `DELETE /users/{username}/attestations/digest/{subject_digest}`: Delete attestations by subject digest
- `GET /users/{username}/followers`: List followers of a user
- `GET /users/{username}/following`: List the people a user follows
- `GET /users/{username}/following/{target_user}`: Check if a user follows another user
- `GET /users/{username}/gpg_keys`: List GPG keys for a user
- `GET /users/{username}/hovercard`: Get contextual information for a user
- `GET /users/{username}/keys`: List public keys for a user
- `GET /users/{username}/social_accounts`: List social accounts for a user
- `GET /users/{username}/ssh_signing_keys`: List SSH signing keys for a user

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
