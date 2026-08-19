# @aprovan/registry-server

## 0.3.0

- Invoker-aware credential resolution (IW-9 F3 streams 1-2). Additive
  exports only: `CredentialLevel`, `effectiveLevel`, `defaultLevelForType`,
  `isCredentialLevel`, `credentialLevelValues`,
  `CredentialProvisionInput.level`, `CredentialInvoker`,
  `CredentialResolutionRequest`, `ResolvedCredential`,
  `CredentialNotConnectedError`, and
  `CredentialService.resolveForInvoker(tenantId, provider, invoker)`.
  `resolveById` widened to return `ResolvedCredential & { provider }`;
  `ResolvedProfile.credential` widened to `ResolvedCredential`.

## 0.2.11

- Add resource-grants storage (`ResourceGrantRow` / CRUD),
  `matchesResourcePattern`, and dispatch-time resource-pattern checks
  (IW-9 C stream 3). Additive exports only.

## 0.2.10

- Prior published line (availabilityProbe / Apple on-device chat catalog work).
