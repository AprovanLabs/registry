FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.15.9 --activate

# Copy workspace manifests
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY turbo.json ./
COPY tsconfig.json ./

# Copy package manifests for dependency installation
COPY packages/utdk/common/package.json ./packages/utdk/common/
COPY apps/gateway/package.json ./apps/gateway/

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Copy source
COPY packages/utdk/common/ ./packages/utdk/common/
COPY apps/gateway/ ./apps/gateway/

# Build @utdk/common first, then the gateway
RUN pnpm --filter @utdk/common run build
RUN pnpm --filter @aprovan/gateway run build

# ---------------------------------------------------------------------------
# Runtime image
# ---------------------------------------------------------------------------
FROM node:22-alpine AS runtime

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.15.9 --activate

# Copy built artifacts and manifests
COPY --from=builder /app/package.json /app/pnpm-workspace.yaml /app/pnpm-lock.yaml* ./
COPY --from=builder /app/packages/utdk/common/dist/ ./packages/utdk/common/dist/
COPY --from=builder /app/packages/utdk/common/package.json ./packages/utdk/common/
COPY --from=builder /app/apps/gateway/dist/ ./apps/gateway/dist/
COPY --from=builder /app/apps/gateway/package.json ./apps/gateway/

# Install production dependencies only
RUN pnpm install --frozen-lockfile --prod

EXPOSE 4000

CMD ["node", "apps/gateway/dist/index.js"]
