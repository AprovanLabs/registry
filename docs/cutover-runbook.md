# Storage cutover runbook — DynamoDB → Aurora DSQL (WS-5, Phase D)

Owner-executed. Every step is scripted; **stop at any non-zero exit**. The
posture is decided (refactor decision record #3): nuke-and-reseed behind a
read-only window, no dual reads, version history / audit history / login
sessions deliberately dropped. Rollback before table deletion is an env-var
flip; rollback of last resort is the verified SQLite mirror.

All commands run from the registry repo root with the target environment's
AWS credentials (`AWS_PROFILE=aprovan`, `APROVAN_ENVIRONMENT=dev|prd`).
**Rehearse the full sequence on dev first** and record timings — the prod
read-only window is sized from the dev rehearsal.

## 0. Preconditions

- [ ] The DSQL cluster exists (deployed with this change): check
      `DSQL_ENDPOINT` in the stack outputs (`DSQL_ENDPOINT_OUT`).
- [ ] `pnpm --filter @aprovan/workspace test` green on the deploy SHA.
- [ ] The gated DSQL contract suites have passed against the dev cluster:
      ```
      WORKSPACE_TEST_DSQL_URL=<dev-dsql-postgres-url> \
        pnpm --filter @aprovan/workspace exec vitest run tests/store-backends.test.ts
      ```
      Expected: `14 passed`, none skipped.
- [ ] Every Phase-B migration sweep has run in production (no `.services/**`
      state files remain except staged shadow content and the
      `.services/bindings.json` tombstone):
      ```
      pnpm --filter @aprovan/workspace exec tsx scripts/migrate-services-to-records.ts \
        --workspace <each-workspace-id> --all
      ```

## 1. Read-only window

Announce the window, then stop writers: scale the workspace service to a
single task and export a maintenance flag (the service keeps serving reads):

```
aws ecs update-service --cluster <env>-workspace --service <env>-workspace \
  --desired-count 1
```

Cron/agent work stops with the leader lease when the flag task is draining.
(Anything written after the snapshot is dropped by decision — keep the window
short.)

## 2. Final snapshot → bootable SQLite mirror

```
FS_BUCKET=<env fs bucket> FS_TABLE=<FsFiles table> RECORDS_TABLE=<Records table> \
CREDENTIALS_TABLE=<Credentials table> ... \
pnpm --filter @aprovan/workspace exec tsx scripts/snapshot-to-sqlite.ts --out /tmp/cutover-mirror
```

Expected output: `Snapshot complete:` followed by per-table counts. Record
the counts. The script is **resumable** — re-running after an interruption
skips already-mirrored blobs by hash and converges to the same mirror.

## 3. Verify the mirror by local boot

```
pnpm --filter @aprovan/workspace exec tsx scripts/verify-snapshot.ts --data /tmp/cutover-mirror
```

Expected output: one `[PASS]` line per check (health, per-workspace listing
counts, known-file hash read-back, records read) ending in
`Snapshot verification passed.` **Any `[FAIL]` (exit 1): STOP.** Archive the
verified mirror somewhere durable — it is the rollback of last resort.

## 4. Reseed DSQL (idempotent, chunked)

```
DSQL_ENDPOINT=<cluster endpoint> AWS_REGION=<region> \
pnpm --filter @aprovan/workspace exec tsx scripts/reseed-dsql.ts --from /tmp/cutover-mirror
```

Expected output: `Reseed complete:` with per-table counts matching step 2's
(fsLatest == fsFiles, records == records, …). The script:

- pre-scans for >900-byte paths and refuses to start while any exist
  (shorten/drop the offenders, re-snapshot, re-verify);
- writes latest FS metadata only — S3 blobs are not copied or moved;
- seeds credentials into the registry-server schema on the same cluster with
  `created_by = "reseed:unknown"` where the source row had no owner;
- is idempotent — safe to re-run into a partially seeded cluster.

## 5. Regenerate registrations (secrets rotate)

```
pnpm --filter @aprovan/workspace exec tsx scripts/regenerate-registrations.ts \
  --workspace <each-workspace-id>
```

Expected output per workspace: each workflow/app/agent validated against its
authored source (`ok`, or an ISSUE naming the missing source), and a
**webhook secret rotation report** listing every webhook's fresh inbound
token (and rotated HMAC secret). **Reconfigure every external caller with
the new secrets before ending the window** — old URLs/tokens are dead.

## 6. Flip the backend

```
cd infra && pnpm cdk deploy -c storeBackend=dsql
```

This sets `STORE_BACKEND=dsql` on the task (the DSQL endpoint and IAM
`dsql:DbConnect*` grant are already wired). The Dynamo tables are left in
place, untouched.

## 7. Observe

- `/health` returns 200; log group shows no store errors.
- Spot-check: a workspace loads with its file tree, latest file contents,
  records/app data, credentials list, and memberships intact; version
  history is empty and prior audit entries are gone (all by design).
- Watch OCC retry noise (`serialization failure` in logs); sustained retry
  storms mean a hot row — investigate before ending the window.

End the read-only window.

## Rollback

- **Before table deletion (step 8):** redeploy with the previous context
  (`pnpm cdk deploy` — `storeBackend` defaults to `dynamo`). The Dynamo
  tables were never touched. Writes made while on DSQL are lost (accepted).
- **Last resort:** boot any workspace against the archived mirror with
  `WORKSPACE_MODE=local WORKSPACE_DATA_DIR=<mirror>` to read out state.

## 8. Cleanup (separate deploy, after operator confirmation)

Only after the DSQL deployment is confirmed healthy (suggested: ≥1 week):

```
cd infra && pnpm cdk diff -c storeBackend=dsql -c dynamoRetired=true   # review!
cd infra && pnpm cdk deploy -c storeBackend=dsql -c dynamoRetired=true
```

`dynamoRetired=true` removes the retired DynamoDB tables (FsFiles, Records,
Credentials, Permissions, ApiKeys, Sessions, Groups, UserGroups, Audit),
their PITR specifications, deletion
protection, and the task role's grants on them. The FS bucket, the KMS
credentials key, and the DSQL cluster remain. The core identity tables
(Users/Workspaces/Memberships/Invites) live in the aprovan core stack —
remove the imports/grants here first (this flag does), then retire the
tables in the core stack once nothing else references them.

Verify with a synth before deploying:

```
cd infra && pnpm cdk synth -c storeBackend=dsql -c dynamoRetired=true --quiet
grep -c '"AWS::DynamoDB::Table"' cdk.out/*.template.json   # expected: 0
```
