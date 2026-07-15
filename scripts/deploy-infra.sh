#!/usr/bin/env bash
#
# Deploy the registry backing services (gateway Lambda + DynamoDB tables) via CDK.
#
# Wraps the infra/ CDK app: compiles it, then `cdk deploy`. The stack reads the
# shared identity env from SSM (/aprovan/<env>/env) at synth time, so no secrets
# are needed here — just AWS credentials (AWS_PROFILE locally, OIDC in CI).
#
# Usage:
#   AWS_PROFILE=aprovan scripts/deploy-infra.sh
#   scripts/deploy-infra.sh                      # CI
#
# Config:
#   CDK_DEFAULT_ACCOUNT  AWS account (auto-detected via STS when unset)
#   CDK_REQUIRE_APPROVAL cdk --require-approval value (default: never)

source "$(dirname "${BASH_SOURCE[0]}")/deploy-lib.sh"

export ENVIRONMENT
export CDK_DEFAULT_REGION="${CDK_DEFAULT_REGION:-$AWS_REGION}"

if [[ -z "${CDK_DEFAULT_ACCOUNT:-}" ]]; then
  CDK_DEFAULT_ACCOUNT="$(awscli "$AWS_REGION" sts get-caller-identity \
    --query Account --output text)"
  [[ -n "$CDK_DEFAULT_ACCOUNT" && "$CDK_DEFAULT_ACCOUNT" != "None" ]] ||
    die "Could not determine AWS account (STS get-caller-identity failed)."
fi
export CDK_DEFAULT_ACCOUNT

CDK_FLAGS=(--require-approval "${CDK_REQUIRE_APPROVAL:-never}")
[[ -n "${AWS_PROFILE:-}" ]] && CDK_FLAGS+=(--profile "$AWS_PROFILE")

log "Deploying registry infra (env=$ENVIRONMENT account=$CDK_DEFAULT_ACCOUNT region=$CDK_DEFAULT_REGION)"
(
  cd "$REPO_ROOT/infra"
  pnpm run build
  pnpm exec cdk deploy "${CDK_FLAGS[@]}"
)

log "Registry infra deploy complete."
