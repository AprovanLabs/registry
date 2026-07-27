#!/usr/bin/env bash
#
# Full registry deploy: backing services (CDK) then the web app (S3 + CloudFront).
#
# Usage:
#   AWS_PROFILE=aprovan scripts/deploy.sh          # everything
#   scripts/deploy.sh web                          # web app only
#   scripts/deploy.sh infra                        # workspace service + tables
#   scripts/deploy.sh infra 1a2b3c4d5e6f           # release / roll back to a tag
#
# The workspace container image is published separately (scripts/image.sh push)
# because building an image and deploying it are different operations with
# different failure modes; `infra` then points the service at a published tag.
#
# Env vars are forwarded to the sub-scripts (see deploy-web.sh / deploy-infra.sh).

set -euo pipefail
HERE="$(dirname "${BASH_SOURCE[0]}")"
TARGET="${1:-all}"
shift || true

case "$TARGET" in
  infra) "$HERE/deploy-infra.sh" "$@" ;;
  web) "$HERE/deploy-web.sh" ;;
  all)
    "$HERE/deploy-infra.sh" "$@"
    "$HERE/deploy-web.sh"
    ;;
  *)
    echo "usage: scripts/deploy.sh [all|infra|web] [image-tag]" >&2
    exit 2
    ;;
esac
