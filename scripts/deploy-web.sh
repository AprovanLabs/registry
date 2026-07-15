#!/usr/bin/env bash
#
# Build the registry web app and publish it to aprovan.com/registry.
#
# Builds @aprovan/registry-web with base /registry, syncs the static output into
# the registry/ prefix of the shared aprovan.com S3 bucket (owned by core's
# WebStack), and invalidates the CloudFront cache for /registry/*.
#
# Usage:
#   AWS_PROFILE=aprovan scripts/deploy-web.sh          # local
#   scripts/deploy-web.sh                              # CI (OIDC creds ambient)
#
# Config (all optional — resolved from SSM/core infra when unset):
#   WEB_BUCKET                  target S3 bucket (SSM /aprovan/<env>/web/bucket)
#   CLOUDFRONT_DISTRIBUTION_ID  aprovan.com distribution (SSM .../web/distribution-id)
#   PUBLIC_COGNITO_AUTHORITY    Cognito issuer (SSM /aprovan/<env>/env COGNITO_AUTHORITY)
#   PUBLIC_COGNITO_CLIENT_ID    Cognito app client (SSM /aprovan/<env>/env COGNITO_CLIENT_ID)
#   SKIP_BUILD=1                reuse an existing apps/registry/dist

source "$(dirname "${BASH_SOURCE[0]}")/deploy-lib.sh"

resolve WEB_BUCKET "$WEB_REGION" "/aprovan/${ENVIRONMENT}/web/bucket" "web bucket"
resolve CLOUDFRONT_DISTRIBUTION_ID "$WEB_REGION" \
  "/aprovan/${ENVIRONMENT}/web/distribution-id" "distribution id"

# Cognito PKCE values are baked into the static build (PUBLIC_* → import.meta.env).
: "${PUBLIC_COGNITO_AUTHORITY:=$(shared_env_value COGNITO_AUTHORITY)}"
: "${PUBLIC_COGNITO_CLIENT_ID:=$(shared_env_value COGNITO_CLIENT_ID)}"
[[ -n "$PUBLIC_COGNITO_AUTHORITY" && -n "$PUBLIC_COGNITO_CLIENT_ID" ]] ||
  die "PUBLIC_COGNITO_AUTHORITY / PUBLIC_COGNITO_CLIENT_ID unresolved (checked env + SSM /aprovan/${ENVIRONMENT}/env)."

DIST_DIR="$REPO_ROOT/apps/registry/dist"

if [[ "${SKIP_BUILD:-}" != "1" ]]; then
  log "Building @aprovan/registry-web (base /registry)"
  (
    cd "$REPO_ROOT"
    PUBLIC_SITE_URL="https://aprovan.com" \
    PUBLIC_BASE_PATH="/registry" \
    PUBLIC_GATEWAY_URL="/api/gateway" \
    PUBLIC_COGNITO_AUTHORITY="$PUBLIC_COGNITO_AUTHORITY" \
    PUBLIC_COGNITO_CLIENT_ID="$PUBLIC_COGNITO_CLIENT_ID" \
      pnpm --filter @aprovan/registry-web build
  )
fi

[[ -f "$DIST_DIR/index.html" ]] ||
  die "$DIST_DIR/index.html missing — build did not produce output."

log "Syncing $DIST_DIR → s3://$WEB_BUCKET/registry/"
# Fingerprinted assets: long-cache. Catalog JSON + HTML: always revalidate so a
# deploy is visible after invalidation (catalog is the SPA's data plane).
awscli "$WEB_REGION" s3 sync "$DIST_DIR" "s3://$WEB_BUCKET/registry/" \
  --delete \
  --exclude "*.html" \
  --exclude "catalog/*" \
  --cache-control "public,max-age=31536000,immutable"
awscli "$WEB_REGION" s3 sync "$DIST_DIR" "s3://$WEB_BUCKET/registry/" \
  --delete \
  --exclude "*" --include "catalog/*" \
  --cache-control "public,max-age=60,must-revalidate" \
  --content-type "application/json"
awscli "$WEB_REGION" s3 sync "$DIST_DIR" "s3://$WEB_BUCKET/registry/" \
  --delete \
  --exclude "*" --include "*.html" \
  --cache-control "public,max-age=0,must-revalidate" \
  --content-type "text/html; charset=utf-8"

log "Invalidating CloudFront $CLOUDFRONT_DISTRIBUTION_ID (/registry/*)"
INVALIDATION_ID="$(awscli "$WEB_REGION" cloudfront create-invalidation \
  --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
  --paths "/registry/*" \
  --query 'Invalidation.Id' --output text)"

log "Done. https://aprovan.com/registry/ (invalidation $INVALIDATION_ID)"
