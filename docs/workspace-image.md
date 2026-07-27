# The workspace image

_2026-07-26. Building, publishing and rolling back
`ghcr.io/aprovanlabs/workspace`._

One image contains the whole backend — chat, apps, workflows and cron, MCP,
VCS, notifications, and the credential/permission gateway. Its entrypoint is
the `@aprovan/workspace` CLI, so `docker run` and `npx @aprovan/workspace start`
execute the same code path; ECS runs the container, a laptop usually runs the
CLI, and the desktop app embeds `startWorkspace()` from the same package.

## Build and publish

```bash
scripts/image.sh build            # local architecture only, tagged :dev
scripts/image.sh build --multi    # both architectures (needs ~8GB in the Docker VM)
scripts/image.sh run              # build :dev and run it on :4000
scripts/image.sh push             # both architectures → GHCR, tagged with the sha
```

Publishing needs a GitHub token with `write:packages`:

```bash
echo "$GITHUB_TOKEN" | docker login ghcr.io -u <you> --password-stdin
```

CI (`.github/workflows/workspace-image.yml`) runs the same buildx invocation,
but builds each architecture on its own native runner (`ubuntu-latest` and
`ubuntu-24.04-arm`, free for public repositories) and stitches the two digests
into one multi-arch tag. Native beats QEMU emulation by roughly 10×.

`--multi` locally is a convenience rather than the reference build, but it now
fits in a default Docker VM. It did not used to: `utdk`'s type-check peaked at
3.66GB, so an emulated cross-build needed that plus QEMU overhead and died with
`cannot allocate memory`. See "Why the build is cheap now" below.

## Release and rollback

The running tag lives in SSM at `/aprovan/<env>/workspace/image`. The CDK app
reads it at synth, so it appears literally in the CloudFormation template:
`cdk diff` shows a release as an image change, and CloudFormation registers a
new task-definition revision because the property genuinely differs.

```bash
AWS_PROFILE=aprovan scripts/deploy-infra.sh 1a2b3c4d5e6f   # release
AWS_PROFILE=aprovan scripts/deploy-infra.sh 0f9e8d7c6b5a   # roll back
```

Rollback is a release of an older tag — there is no separate mechanism to
remember, and no rebuild involved, because tags are immutable content
references. `latest` exists only as a convenience for `docker run`; nothing in
the deployment depends on a mutable reference.

CloudFormation deliberately owns the task definition. `aws ecs
register-task-definition` would be faster, but it leaves the stack drifted and
the next `cdk deploy` silently reverts the image.

## What the image does and does not contain

Contains: the built `@aprovan/workspace` package and its production
dependencies, resolved by `pnpm deploy` into a real, self-contained
`node_modules`.

Does **not** contain: the chat SPA or the registry site (both static, served
from S3 through CloudFront), the CDK app, or any dev dependency.

Nothing is bundled, minified, or hand-staged. The Lambda build needed all of
that — a `--node-linker=hoisted` `pnpm deploy` into the asset directory, a
script to dereference pnpm symlinks for the QuickJS wasm variant, and `.d.ts`
deletion to stay under the 250 MB unzipped limit — purely to fit inside a zip.
A container gets an ordinary `node_modules`, so `utdk`'s template-literal
dynamic imports (`import(\`utdk/${provider}\`)`) and the QuickJS sandbox's
relative `.wasm` read both resolve without help.

### Why the build is cheap now

`utdk` is generated client code for 49 providers, and each provider's
`index.ts` does `import openApiDocument from "./openapi.json"`. With
`resolveJsonModule`, TypeScript infers a full structural type for every one of
those documents — 70MB of OpenAPI in total. Measured, that is where the cost
was:

| | time | peak RSS | dist |
| --- | ---: | ---: | ---: |
| `tsc` (before) | 17.9s | 3.66 GB | 123 MB |
| esbuild transpile (now) | 3.8s | 224 MB | 89 MB |

The JSON imports alone accounted for roughly 2.1GB of that 3.66GB peak.

None of it bought anything here. `apps/workspace` reaches the catalogue through
two template-literal dynamic imports and one `registry.json` read, so no
provider file enters its type graph at all — `tsc --listFiles` over the
workspace resolves 1,970 files, of which zero are providers. The image was
spending 17.9s and 3.66GB compiling types nothing in it could see, and carrying
38MB of `.d.ts` and `.map` files nothing at runtime reads.

So `pnpm build` transpiles and does not type-check, and `pnpm build:types`
(the old `tsc` path) runs only in the publish workflow — where per-provider
declarations genuinely matter, because external consumers do
`import github from "utdk/github"`. Type-checking generated code is a
publishing concern, not something every build and every container pays for.

Two more things about the build are worth knowing because they are non-obvious:

- **Debian slim, not Alpine.** `better-sqlite3` publishes glibc prebuilds for
  linux/amd64 and linux/arm64 but not musl, so Alpine would mean compiling a
  native module on both architectures at image-build time.
- **Every workspace manifest is copied, not just the ones being built.**
  `pnpm install --frozen-lockfile` verifies the lockfile against the importers
  it finds on disk, and a missing project makes the lockfile look stale. Only
  `package.json` files are copied for the apps this image does not build.

## Running it with compose

`apps/workspace/docker-compose.yml` brings up the image alongside an
OpenTelemetry collector, which is the only way to see what the workspace is
actually reporting:

```bash
cd apps/workspace
docker compose up --build          # workspace on :4000 + collector on :4317/:4318
docker compose logs -f otel-collector
docker compose up workspace        # workspace alone, telemetry off
```

The image it builds carries the same tag `scripts/image.sh build` produces, so
the two are interchangeable. Local state lands in `apps/workspace/data/`
(gitignored) — deliberately *not* the repo-root `data/`, which holds committed
OpenAPI specs.

Compose sets `OTEL_EXPORTER_OTLP_ENDPOINT`, so the workspace registers a real
OTLP tracer provider and the collector receives spans — `docker compose logs -f
otel-collector` shows them. That is not the default anywhere else: without the
endpoint the OpenTelemetry SDK is never imported, which is worth ~16 MB of RSS
and is why the deployed task runs without it.

The AWS-parity backends (dynamodb-local + MinIO) stay in the repo-root compose
file: that is the stack the `*-dynamodb` and `fs-s3` suites talk to, and a
second copy here would just fight over the same host ports.

## Verifying an image

```bash
docker run --rm -p 4000:4000 -v "$PWD/workspace-data:/data" ghcr.io/aprovanlabs/workspace

curl -s localhost:4000/health
curl -s localhost:4000/api/gateway/health
curl -N 'localhost:4000/api/gateway/health/stream?ticks=5&intervalMs=1000'
```

The last one is the check that matters: if the five events arrive together
after five seconds rather than one per second, something is buffering, and
every streaming surface — chat, widget edits — is silently broken. Run the same
probe against `https://aprovan.com/api/gateway/...` after any change to the
edge, where the chain is CloudFront → Cloudflare → tunnel → container.

## Operating the deployed service

```bash
aws logs tail /aprovan/prd/workspace --follow

aws ecs describe-services --cluster registry-prd-use2-workspace \
  --services registry-prd-use2-workspace \
  --query 'services[0].{running:runningCount,taskDef:taskDefinition}'

# A shell in the task — the only way in, since nothing listens publicly
aws ecs execute-command --cluster registry-prd-use2-workspace \
  --task <task-id> --container workspace --interactive --command /bin/sh
```

The task runs on Fargate Spot, so it will occasionally be reclaimed. That
arrives as SIGTERM with two minutes' notice: the server stops accepting
connections, finishes in-flight requests (including open streams), and releases
the cron lease immediately so the replacement picks it up in about a second.
A reclamation costs one brief connection gap, not a dropped request.
