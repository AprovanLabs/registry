# aprovan/registry — the standalone registry server (tech-plan D11).
#
# Build from the repo root:
#   docker build -f docker/registry.Dockerfile -t aprovan/registry:dev .
#
# Standalone defaults baked in: SQLite storage on the /data volume, auth mode
# none, telemetry exporter off, port 4000, /healthz. Everything is a thin
# wrapper over createRegistryServer — configuration is the only standalone-
# specific code (see packages/registry-server/src/standalone.ts).
#
# Debian slim rather than Alpine on purpose: `better-sqlite3` publishes glibc
# prebuilds for linux/amd64 and linux/arm64 but not musl.

ARG NODE_VERSION=22.12.0
ARG PNPM_VERSION=9.15.9

# ---------------------------------------------------------------------------
# Builder — install the registry-server slice, build it, stage a prod tree
# ---------------------------------------------------------------------------
FROM node:${NODE_VERSION}-bookworm-slim AS builder
ARG PNPM_VERSION

WORKDIR /repo
RUN npm install --global corepack@latest \
    && corepack enable \
    && corepack prepare pnpm@${PNPM_VERSION} --activate

# Manifests first so dependency installation caches independently of source.
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml turbo.json tsconfig.json ./

# Every workspace member's manifest, even the ones this image does not build:
# `--frozen-lockfile` verifies the lockfile against the set of importers it
# finds on disk. Manifests only — no source from these ever enters the image.
COPY apps/registry/package.json ./apps/registry/
COPY apps/workspace/package.json ./apps/workspace/
COPY infra/package.json ./infra/

COPY packages/ ./packages/

RUN pnpm install --frozen-lockfile --filter @aprovan/registry-server...

RUN pnpm --filter @aprovan/registry-server... run build

# `pnpm deploy` resolves `workspace:*` links into a real, self-contained
# node_modules (the full utdk catalogue rides along — decision: full catalog
# v1; revisit on image-size pain, D11).
RUN pnpm --filter @aprovan/registry-server --prod deploy /srv/registry

# ---------------------------------------------------------------------------
# Runtime
# ---------------------------------------------------------------------------
FROM node:${NODE_VERSION}-bookworm-slim AS runtime

ENV NODE_ENV=production \
    REGISTRY_DATA_DIR=/data \
    REGISTRY_PORT=4000

WORKDIR /srv/registry
COPY --from=builder --chown=node:node /srv/registry ./

# SQLite state persists here. Owned by `node` so the unprivileged user can
# write when Docker creates the volume.
RUN mkdir -p /data && chown node:node /data
VOLUME ["/data"]

USER node
EXPOSE 4000

# No curl in slim; node fetch is the health probe.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD ["node", "-e", "fetch('http://127.0.0.1:'+(process.env.REGISTRY_PORT||4000)+'/healthz').then(r=>process.exit(r.ok?0:1),()=>process.exit(1))"]

# Signals reach node directly (no shell), so the SIGTERM drain runs.
ENTRYPOINT ["node", "dist/standalone.js"]
