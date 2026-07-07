# Gateway DynamoDB Migration Runbook

One-shot migration of the gateway's JSON-persisted stores (credentials, API keys,
permissions) into DynamoDB, followed by cutover of the gateway to
`GATEWAY_STORE_BACKEND=dynamodb`.

## Stores migrated

| Store | Source env var | DynamoDB table |
|---|---|---|
| Credentials | `GATEWAY_STORE_PATH` | `CREDENTIALS_TABLE` (default: `Credentials`) |
| API keys | `GATEWAY_APIKEYS_PATH` | `APIKEYS_TABLE` (default: `ApiKeys`) |
| Permissions | `GATEWAY_PERMISSIONS_PATH` | `PERMISSIONS_TABLE` (default: `Permissions`) |

Audit is **not** migrated — it is an in-memory ring buffer with no persistent history.

## Prerequisites

1. **DynamoDB tables exist.** Run `pnpm create-tables` (or equivalent) against the
   target environment before running this script. The script writes into existing
   tables; it does not create them.
2. **AWS credentials** are configured for the environment (e.g. `~/.aws/credentials`,
   env vars, or an IAM role on the Lambda/EC2 host). The IAM principal needs
   `dynamodb:PutItem` on the three target tables.
3. **`tsx` is available** — install it with `npm i -g tsx` or run the script via
   `pnpm tsx` from the `apps/gateway` workspace root.

## Environment setup

Copy your production values into the shell that will run the script:

```bash
export GATEWAY_WORKSPACE_KEY="<the AES-256 key used to encrypt credentials>"
export GATEWAY_STORE_PATH="/var/gateway/credentials.json"
export GATEWAY_APIKEYS_PATH="/var/gateway/apikeys.json"
export GATEWAY_PERMISSIONS_PATH="/var/gateway/permissions.json"

# Optional DynamoDB overrides
export CREDENTIALS_TABLE="Credentials"    # default
export APIKEYS_TABLE="ApiKeys"            # default
export PERMISSIONS_TABLE="Permissions"    # default
export AWS_REGION="us-east-1"            # default

# Only needed when pointing at a local DynamoDB (testing):
# export DYNAMO_ENDPOINT="http://localhost:8000"
# export AWS_ACCESS_KEY_ID="local"
# export AWS_SECRET_ACCESS_KEY="local"
```

Each `GATEWAY_*_PATH` is optional. If a variable is unset, or the file does not
exist at that path, the corresponding store is skipped without error.

## Step 1 — Dry run

Print what the script **would** write, without touching DynamoDB:

```bash
cd apps/gateway
tsx scripts/migrate-to-dynamodb.ts --dry-run
```

Review the output carefully. Each line shows the table name, the sort-key prefix,
and the full item JSON. Verify that:

- Credential payloads decode to the expected JSON structure (no garbled data).
- API key records carry the correct `secretHash` values.
- Permission records have the expected `callerId`, `provider`, and `operation` values.

## Step 2 — Apply

Write all records to DynamoDB:

```bash
tsx scripts/migrate-to-dynamodb.ts --apply
```

The script is **idempotent**: it uses `PutItem` with
`ConditionExpression: attribute_not_exists(PK)`. Items that already exist are
skipped and logged as `skip (already exists)`. It is safe to re-run the script if
it is interrupted or if you need to verify idempotency.

Expected output on a clean run:

```
[migrate] mode=apply
[migrate] credentials: 3 record(s) from /var/gateway/credentials.json
[migrate]   put Credentials CRED#github#abc123def456
[migrate]   put Credentials CREDID#abc123def456
...
[migrate] done — 12 item(s) written, 0 item(s) skipped (already existed)
```

Expected output on a re-run (all items already migrated):

```
[migrate] done — 0 item(s) written, 12 item(s) skipped (already existed)
```

## Step 3 — Verification

Spot-check the migrated data using the DynamoDB console or CLI.

### Credentials

```bash
# Check a credential record exists
aws dynamodb get-item \
  --table-name Credentials \
  --key '{"PK":{"S":"WS#<workspaceId>"},"SK":{"S":"CRED#<provider>#<credId>"}}'

# Check the pointer exists
aws dynamodb get-item \
  --table-name Credentials \
  --key '{"PK":{"S":"WS#<workspaceId>"},"SK":{"S":"CREDID#<credId>"}}'
```

You can also verify end-to-end by starting the gateway with
`GATEWAY_STORE_BACKEND=dynamodb` and calling:

```bash
curl -H "Authorization: Bearer <token>" http://localhost:4000/credentials
```

### API keys

```bash
aws dynamodb get-item \
  --table-name ApiKeys \
  --key '{"PK":{"S":"WS#<workspaceId>"},"SK":{"S":"APIKEY#<keyId>"}}'
```

### Permissions

```bash
aws dynamodb get-item \
  --table-name Permissions \
  --key '{"PK":{"S":"WS#<workspaceId>"},"SK":{"S":"PERM#<callerId>#<provider>#<operation>"}}'
```

## Step 4 — Cutover

Deploy the Lambda (or restart the gateway process) with the following addition to
its environment:

```
GATEWAY_STORE_BACKEND=dynamodb
```

The file-based store paths (`GATEWAY_STORE_PATH`, etc.) can remain set during the
soak period — the gateway ignores them when `GATEWAY_STORE_BACKEND=dynamodb`.

**Soak period:** run both backends deployable for 7 days. A config flip
(`GATEWAY_STORE_BACKEND` → unset or removed) restores the file backend without any
code rollback.

## Rollback

If the DynamoDB backend causes issues during the soak period:

1. Remove (or unset) `GATEWAY_STORE_BACKEND=dynamodb` from the Lambda environment.
2. Redeploy / restart the gateway. The file backend resumes immediately.
3. No data loss: the JSON files are untouched by the migration script.

The file-based stores remain the source of truth until the soak period ends and the
cleanup issue (removing legacy backends) is resolved.

## Cleanup (post-soak, out of scope for this issue)

After 7 days of successful soak:
- Remove `GATEWAY_WORKSPACE_KEY`, `GATEWAY_STORE_PATH`, `GATEWAY_APIKEYS_PATH`,
  `GATEWAY_PERMISSIONS_PATH` from the Lambda environment.
- Remove the file-based store backends and the crypto helpers from `credentials.ts`.
- Track in the cleanup issue referenced from APR-272.
