# Registry deployment

_2026-07-14_

The registry ships two things:

- **Web app** (`@aprovan/registry-web`, static Astro) → the `registry/` prefix of the
  shared `aprovan.com` S3 bucket, served at **https://aprovan.com/registry**.
- **Backing services** (gateway Lambda + DynamoDB tables) → the `registry-<env>-<region>-main`
  CloudFormation stack (`infra/`).

Both are driven by the same shell scripts whether you run them from a laptop or from
GitHub Actions. Nothing is hardcoded: the scripts discover their targets from SSM
parameters published by the core infra.

## How it fits together

The `aprovan.com` bucket and CloudFront distribution are owned by the **core** repo
(`core/infra/aws` → `WebStack`). The registry does not create web infrastructure; it
only syncs files into the existing bucket under `registry/`. CloudFront serves the
whole bucket, so `registry/index.html` is reachable at `aprovan.com/registry/`, and a
CloudFront viewer-request function maps `/registry/foo` → `/registry/foo/index.html`.
The same distribution proxies `api/gateway/*` to the gateway Lambda, so the web app
talks to the gateway same-origin at `/api/gateway`.

**Cross-repo contract.** Core's `WebStack` writes these SSM parameters (in the web
stack's region, `us-east-1`):

| Parameter                              | Value                          |
| -------------------------------------- | ------------------------------ |
| `/aprovan/<env>/web/bucket`            | shared web bucket name         |
| `/aprovan/<env>/web/distribution-id`   | `aprovan.com` distribution id  |

Cognito PKCE values come from the shared identity bundle core's `MainStack` writes to
`/aprovan/<env>/env` (in `us-east-2`). The deploy scripts read all of these, so a
plain `scripts/deploy.sh` needs no configuration beyond AWS credentials.

## Deploy manually (local)

You need AWS credentials for the `aprovan` account. Locally this is just a profile:

```sh
# Everything (infra then web)
AWS_PROFILE=aprovan pnpm deploy

# Web app only
AWS_PROFILE=aprovan pnpm deploy:web

# Backing services only (gateway Lambda + tables)
AWS_PROFILE=aprovan pnpm deploy:infra
```

These wrap `scripts/deploy.sh {all,web,infra}`. Useful overrides (all optional):

| Variable                     | Default                         | Purpose                                    |
| ---------------------------- | ------------------------------- | ------------------------------------------ |
| `ENVIRONMENT`                | `prd`                           | naming + which SSM params to read          |
| `AWS_REGION`                 | `us-east-2`                     | gateway stack / shared identity SSM region |
| `WEB_REGION`                 | `us-east-1`                     | web bucket + distribution SSM region       |
| `WEB_BUCKET`                 | SSM `/aprovan/<env>/web/bucket` | override the sync target                   |
| `CLOUDFRONT_DISTRIBUTION_ID` | SSM `.../web/distribution-id`   | override the invalidation target           |
| `PUBLIC_COGNITO_AUTHORITY`   | SSM `/aprovan/<env>/env`        | baked into the static build                |
| `PUBLIC_COGNITO_CLIENT_ID`   | SSM `/aprovan/<env>/env`        | baked into the static build                |
| `SKIP_BUILD=1`               | —                               | reuse an existing `apps/registry/dist`     |

## Deploy automatically (GitHub Actions)

`.github/workflows/registry-deploy.yml` runs the **same** `scripts/deploy.sh`.
CI's only extra responsibility is credentials: it assumes `vars.AWS_DEPLOY_ROLE_ARN`
via OIDC, then the script discovers everything else from SSM.

The OIDC provider and deploy role live in the **core** repo (`core/infra/aws` →
`CiStack`, stack `aprovan-<env>-<region>-ci`). The role
(`arn:aws:iam::748469276309:role/aprovan-prd-use2-registry-deploy`) is scoped to
`repo:AprovanLabs/registry:*` and is already set as the `AWS_DEPLOY_ROLE_ARN`
repository variable. To trust additional repos, redeploy `CiStack` with
`DEPLOY_REPOSITORIES=owner/repo,owner/other`.

- **Push to `main`** touching the app, gateway, infra, packages, or the scripts →
  deploys `all`.
- **Manual run** (`workflow_dispatch`) lets you pick `web`, `infra`, or `all`.

The job no-ops until `vars.AWS_DEPLOY_ROLE_ARN` is set (it already is). The role's
permissions (defined in `CiStack`) are:

- **web:** `ssm:GetParameter` on `/aprovan/*/{web,env}/*`;
  `s3:PutObject`/`s3:DeleteObject`/`s3:GetObject`/`s3:ListBucket` on the
  `aprovan.com` bucket; `cloudfront:CreateInvalidation`.
- **infra:** `sts:AssumeRole` on the CDK bootstrap roles (`cdk-hnb659fds-*`) — the
  CDK CLI performs all privileged CloudFormation/Lambda/DynamoDB actions through
  those, so no enumerated deploy rights are attached to the CI role itself.

Optional repo `vars` (`WEB_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`,
`PUBLIC_COGNITO_AUTHORITY`, `PUBLIC_COGNITO_CLIENT_ID`) override SSM discovery if you
ever want to pin values instead of granting the role SSM read access.

## Caching

`deploy-web.sh` uploads fingerprinted assets with a one-year immutable cache and HTML
with `max-age=0, must-revalidate`, then invalidates `/registry/*`. A deploy is visible
as soon as the invalidation completes.
