#!/usr/bin/env bash
#
# Full registry deploy: backing services (CDK) then the web app (S3 + CloudFront).
#
# Usage:
#   AWS_PROFILE=aprovan scripts/deploy.sh          # everything
#   scripts/deploy.sh web                          # web app only
#   scripts/deploy.sh infra                        # gateway/tables only
#
# Env vars are forwarded to the sub-scripts (see deploy-web.sh / deploy-infra.sh).

set -euo pipefail
HERE="$(dirname "${BASH_SOURCE[0]}")"
TARGET="${1:-all}"

case "$TARGET" in
  infra) "$HERE/deploy-infra.sh" ;;
  web) "$HERE/deploy-web.sh" ;;
  all)
    "$HERE/deploy-infra.sh"
    "$HERE/deploy-web.sh"
    ;;
  *)
    echo "usage: scripts/deploy.sh [all|infra|web]" >&2
    exit 2
    ;;
esac
