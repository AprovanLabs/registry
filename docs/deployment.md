# Registry deployment

_Updated 2026-07-26_

The registry ships two things:

- **Web app** (`@aprovan/registry-web`, static Astro) → the `registry/` prefix of the
  shared `aprovan.com` S3 bucket, served at **https://aprovan.com/registry**.
- **The workspace** (`@aprovan/workspace`) → a container image on GHCR, running as a
  persistent ECS Fargate Spot task alongside the DynamoDB tables and S3 bucket in
  the `registry-<env>-<region>-main` CloudFormation stack (`infra/`).

Both are driven by the same shell scripts whether you run them from a laptop or from
GitHub Actions. Nothing is hardcoded: the scripts discover their targets from SSM
parameters published by the core infra.

## Shape

```
aprovan.com (CloudFront, core WebStack)
  ├─ /                → S3
  ├─ /registry/*      → S3
  └─ /api/*, /apps/*, /.well-known/*
        → origin.aprovan.com (Cloudflare-proxied, cache bypassed)
             └─ Cloudflare Tunnel
                  └─ cloudflared sidecar ─→ workspace :4000
                       (one ECS Fargate Spot ARM64 task, public subnet, no NAT)
                            ├─ DynamoDB: credentials, permissions, audit, fs, records, …
                            └─ S3: workspace-fs content blobs
```

There is **no load balancer**, and that is the point. An ALB costs $16.40/month
against ~$4.30/month of compute, and every zero-hourly-cost AWS alternative breaks
streaming: an API Gateway HTTP API over a VPC Link to Cloud Map caps integrations at
30 seconds — not raisable — and buffers the response, while completions here run one
to two minutes and stream. VPC Lattice is internal-only and costs more than the ALB.
So the task has no inbound path at all; a `cloudflared` sidecar dials out to the
Cloudflare zone we already own, and CloudFront treats the resulting hostname as an
ordinary HTTPS origin.

That also deleted the transport workarounds the Lambda Function URL required: the
Origin Access Control, the `oac-body-hash` and `restore-auth-header` Lambda@Edge
functions, the client-side `x-amz-content-sha256` computation, and the bespoke
`X-Aprovan-Authorization` header. Clients send `Authorization` and it arrives intact.

## What it costs

| Line item | $/month |
| --- | ---: |
| Fargate **Spot ARM64**, 0.5 vCPU / 1 GB (~$0.0097/vCPU-hr, ~$0.0011/GB-hr) | 4.30 |
| Public IPv4 address — $0.005/hr, needed for egress to model providers and GHCR | 3.65 |
| CloudWatch Logs, 14-day retention, low volume | ~0.50 |
| Ingress (Cloudflare Tunnel), image registry (GHCR public), NAT (none) | 0.00 |
| **Total** | **≈ 8.45** |

Public subnets with `assignPublicIp` instead of a NAT gateway is what saves the other
$32/month. DynamoDB and S3 are pay-per-request on top and dominated by usage, not by
this architecture.

**Why not the 512 MB task**, given the worst case now measures 256 MB: on Fargate,
512 MB is only available at 0.25 vCPU — the valid combinations at the small end are
0.25 vCPU with 0.5/1/2 GB, and 0.5 vCPU with 1 GB minimum. So the memory cut cannot be
bought without halving the CPU, and this workload is not purely I/O-bound: widget
compilation (`@aprovan/patchwork-compiler`) and QuickJS workflow execution are both
CPU-bound. The whole saving is $2.16/month. Deliberately not taken — if you revisit
this, revisit it as a latency decision, not a memory one.

Spot is preferred 4:1 over on-demand rather than exclusively, so placement falls back
to `FARGATE` when Spot capacity is unavailable instead of leaving the service at zero.
Reclamation arrives as SIGTERM with two minutes' notice; the server drains in-flight
requests and releases the cron lease immediately so a peer picks it up in about a
second.

## Memory, and why the task is sized as it is

Measured inside the container (Linux, ARM64), worst case meaning 20 distinct
provider modules resident *and* the sandbox pool saturated with four concurrent
allocation-heavy scripts:

| | before | now |
| --- | ---: | ---: |
| booted, idle | 112 MB | **89 MB** |
| + 20 provider modules | +129 MB | **+36 MB** |
| peak under saturated sandbox | 472 MB | **256 MB** |
| settled after load | 234 MB | **205 MB** |

Three things got it there:

- **Provider OpenAPI documents load lazily and are now reclaimable.** Each
  generated `utdk/<p>/index.js` used to `import openApiDocument from
  "./openapi.json"`, parsing the whole document into the heap at import — and
  because Node's ESM registry pins modules for process lifetime, the LRU in
  `isolate.ts` freed *nothing*. The document is now read through `readFile`
  inside a thunk, so importing a provider is nearly free and dropping a cached
  client returns 13 MB instead of 0.3 MB.
- **The AWS SDK does not load in local mode at all** — 0 `@aws-sdk` and 0
  `@smithy` modules, worth ~28 MB. It was loading in every deployment,
  including ones that never call AWS.
- **The sandbox is bounded.** 128 MiB × 4 slots was a 512 MB theoretical
  ceiling — twice the whole container. Now 32 MiB × 2 = 64 MB
  (`SANDBOX_MEMORY_LIMIT_MB`, `SANDBOX_POOL_MAX`).

One number that cannot be reduced: **each live QuickJS instance reserves a hard
16 MiB of wasm linear memory**, because the module declares `env.memory` with
`min = 256 pages`. Lowering it requires recompiling QuickJS, and the release
build of the asyncify variant is known-miscompiled (see the comment in
`src/workflows/sandbox.ts`), so the debug variant stays.

Telemetry is off unless `OTEL_EXPORTER_OTLP_ENDPOINT` is set, and the
OpenTelemetry SDK is behind a dynamic import — a task with telemetry off loads
none of it and pays none of its ~16 MB.

## Build cost

Worth knowing because it used to be the most painful part of this repo:

| | time | peak RSS | `utdk/dist` | image |
| --- | ---: | ---: | ---: | ---: |
| before | 17.9s | 3.66 GB | 123 MB | 484 MB |
| now | 3.8s | 224 MB | 89 MB | 481 MB |

(The image includes the OpenTelemetry SDK and the provider metadata restored
by the codegen fixes; the build-cost win is the 17.9s → 3.8s and 3.66 GB → 224 MB.)

`utdk` is generated client code for 49 providers, each importing its own
`openapi.json`; type-checking those documents was ~2.1GB of the peak. Nothing
in the image ever read those types — the workspace reaches the catalogue
through two dynamic imports and one `registry.json` read — so the default build
transpiles with esbuild and the full `tsc` pass moved to `utdk`'s
`prepublishOnly`, where per-provider declarations actually matter. Emulated
`--platform linux/amd64` cross-builds fit in a default Docker VM again.

## Deploy manually (local)

You need AWS credentials for the `aprovan` account — locally, a profile.

```sh
# Publish a new image (multi-arch: linux/amd64 + linux/arm64)
scripts/image.sh push

# Point the service at a tag and deploy the stack
AWS_PROFILE=aprovan scripts/deploy-infra.sh 1a2b3c4d5e6f

# Roll back: the same command with the previous tag
AWS_PROFILE=aprovan scripts/deploy-infra.sh 0f9e8d7c6b5a

# Web app only
AWS_PROFILE=aprovan pnpm deploy:web
```

The image tag lives in SSM at `/aprovan/<env>/workspace/image` and is read by the CDK
app at synth, so it appears literally in the template — `cdk diff` shows a release as
an image change, and CloudFormation registers a new task-definition revision because
the property genuinely differs.

CloudFormation deliberately owns the task definition. Registering a revision out of
band with `aws ecs register-task-definition` is faster, but it leaves the stack
drifted and the next `cdk deploy` silently reverts the image. One mechanism is worth
the extra minute.

Useful overrides (all optional):

| Variable | Default | Purpose |
| --- | --- | --- |
| `ENVIRONMENT` | `prd` | naming + which SSM params to read |
| `AWS_REGION` | `us-east-2` | workspace stack / shared identity SSM region |
| `WEB_REGION` | `us-east-1` | web bucket + distribution SSM region |
| `WORKSPACE_IMAGE` | `ghcr.io/aprovanlabs/workspace` | image name, without the tag |
| `WEB_BUCKET` | SSM `/aprovan/<env>/web/bucket` | override the sync target |
| `CLOUDFRONT_DISTRIBUTION_ID` | SSM `.../web/distribution-id` | override the invalidation target |
| `SKIP_BUILD=1` | — | reuse an existing `apps/registry/dist` |

## Deploy automatically (GitHub Actions)

Two workflows, split along the line where failures differ:

- **`workspace-image.yml`** builds the image on native amd64 and arm64 runners
  (`ubuntu-latest` and `ubuntu-24.04-arm` — free for public repos, and ~10× faster
  than QEMU emulation), pushes each by digest, stitches them into one multi-arch tag,
  then runs `scripts/deploy-infra.sh <tag>` to roll the service. Build and deploy live
  in one workflow so a release is never split across two runs that could interleave.
- **`registry-deploy.yml`** deploys the static web app only.

CI's only extra responsibility is credentials: it assumes `vars.AWS_DEPLOY_ROLE_ARN`
via OIDC, then the scripts discover everything else from SSM. The OIDC provider and
deploy role live in the **core** repo (`core/infra/aws` → `CiStack`).

## One-time setup

The tunnel token is the one secret that is not derived from anything else. Terraform
creates the tunnel; ECS reads the token from SSM.

```sh
cd core/infra/cloudflare
make deploy         # tofu init + plan + apply
make tunnel-token   # writes the token to SSM as a SecureString
```

(`make check` runs `tofu fmt` + `tofu validate` and needs no credentials, so it
is the one to run before committing.)

Then publish a first image and pin it, because the CDK app refuses to synth without
one rather than deploying a service that cannot start:

```sh
scripts/image.sh push
AWS_PROFILE=aprovan scripts/deploy-infra.sh <tag>
```

## Operating it

```sh
# What is running, and on what
aws ecs describe-services --cluster registry-prd-use2-workspace \
  --services registry-prd-use2-workspace \
  --query 'services[0].{running:runningCount,taskDef:taskDefinition,deployments:deployments[].rolloutState}'

# Logs
aws logs tail /aprovan/prd/workspace --follow

# A shell in the task — the only way in, since nothing is listening publicly
aws ecs execute-command --cluster registry-prd-use2-workspace \
  --task <task-id> --container workspace --interactive --command /bin/sh

# Prove the whole transport chain still streams
curl -N 'https://aprovan.com/api/gateway/health/stream?ticks=8&intervalMs=15000'
```

That last one is the check that matters after any change to the edge: if the eight
ticks arrive as one burst 120 seconds in rather than every 15 seconds, something in
the chain is buffering and every streaming surface is silently broken.

## Caching

`deploy-web.sh` uploads fingerprinted assets with a one-year immutable cache and HTML
with `max-age=0, must-revalidate`, then invalidates `/registry/*`. A deploy is visible
as soon as the invalidation completes. The workspace origin is cache-bypassed at both
CloudFront (`CACHING_DISABLED`) and Cloudflare (a zone cache rule) — every request
through it is either authenticated or rendered per user.
