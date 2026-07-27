# ghcr.io/aprovanlabs/workspace — the whole Aprovan backend in one image.
#
# Build from the repo root:
#   docker buildx build -f apps/workspace/Dockerfile --platform linux/arm64 -t workspace .
#
# Debian slim rather than Alpine on purpose: `better-sqlite3` publishes glibc
# prebuilds for linux/amd64 and linux/arm64 but not musl, so Alpine would mean
# compiling a native module at image-build time on both architectures.
#
# Nothing here bundles, minifies, or hand-copies wasm. That was the price of
# fitting inside a Lambda zip; a container just gets a real node_modules, and
# `utdk`'s template-literal dynamic imports and the QuickJS sandbox's
# relative .wasm read both resolve the ordinary way.

ARG NODE_VERSION=22.12.0
ARG PNPM_VERSION=9.15.9

# ---------------------------------------------------------------------------
# Builder — install the workspace slice, build it, stage a production tree
# ---------------------------------------------------------------------------
FROM node:${NODE_VERSION}-bookworm-slim AS builder
ARG PNPM_VERSION

WORKDIR /repo
# corepack is updated first: the copy bundled with node:22.12.0 ships npm
# registry signing keys that have since rotated, so `corepack prepare` fails
# with "Cannot find matching keyid" against current pnpm releases.
RUN npm install --global corepack@latest \
    && corepack enable \
    && corepack prepare pnpm@${PNPM_VERSION} --activate

# Manifests first so dependency installation caches independently of source.
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml turbo.json tsconfig.json ./

# Every workspace member's manifest, even the ones this image does not build:
# `--frozen-lockfile` verifies the lockfile against the set of importers it
# finds on disk, and a missing project makes the lockfile look stale. Manifests
# only — no source from these ever enters the image.
COPY apps/registry/package.json ./apps/registry/
COPY apps/tailor/package.json ./apps/tailor/
COPY infra/package.json ./infra/

COPY packages/ ./packages/
COPY apps/workspace/ ./apps/workspace/

# `<pkg>...` restricts the install to the workspace app and its workspace
# dependencies — the registry site and its React/Astro tree are not part of
# this image and should not be part of its build either.
RUN pnpm install --frozen-lockfile --filter @aprovan/workspace...

# No memory pin. `utdk` is generated client code for 49 providers whose
# `index.ts` files import 70MB of `openapi.json`; type-checking that peaked at
# 3.66GB and forced `--max-old-space-size=4096` here, which in turn made
# emulated cross-builds run out of memory. Its build now transpiles with
# esbuild instead (3.8s / 224MB), because nothing in this image ever consumed
# those types — see packages/utdk/build.mjs.
RUN pnpm --filter @aprovan/workspace... run build

# `pnpm deploy` resolves `workspace:*` links into a real, self-contained
# node_modules — the supported version of what the Lambda bundle used to
# approximate with a hand-rolled `--node-linker=hoisted` staging hook.
RUN pnpm --filter @aprovan/workspace --prod deploy /srv/workspace

# ---------------------------------------------------------------------------
# Runtime
# ---------------------------------------------------------------------------
FROM node:${NODE_VERSION}-bookworm-slim AS runtime

ENV NODE_ENV=production \
    WORKSPACE_MODE=local \
    WORKSPACE_DATA_DIR=/data \
    WORKSPACE_PORT=4000

WORKDIR /srv/workspace
COPY --from=builder --chown=node:node /srv/workspace ./

# Local mode persists here; aws mode ignores it. Owned by `node` so the
# unprivileged user can write when Docker creates the volume.
RUN mkdir -p /data && chown node:node /data
VOLUME ["/data"]

USER node
EXPOSE 4000

# No curl in slim, and adding it just for a health check is not worth the
# extra surface.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD ["node", "-e", "fetch('http://127.0.0.1:'+(process.env.WORKSPACE_PORT||4000)+'/health').then(r=>process.exit(r.ok?0:1),()=>process.exit(1))"]

# Signals reach node directly (no shell in between), so the SIGTERM drain in
# server.ts actually runs when ECS stops the task or Spot reclaims it.
ENTRYPOINT ["node", "dist/cli.js"]
CMD ["start"]
