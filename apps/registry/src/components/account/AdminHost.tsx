/**
 * Catalog host for registry-ui AdminPanel.
 *
 * Mode-agnostic except for the capability list: hosted product gateway vs
 * standalone registry-server admin surfaces.
 */

import {
  AdminPanel,
  type AdminCapability,
} from "@aprovan/registry-ui";
import { SessionGate } from "@/components/account/SessionGate";
import { resolveSessionMode } from "@/lib/session";

const HOSTED_CAPABILITIES: ReadonlyArray<AdminCapability> = [
  "members",
  "groups",
  "permissions",
];

const STANDALONE_CAPABILITIES: ReadonlyArray<AdminCapability> = [
  "api-keys",
  "profiles",
  "audit",
];

export function AdminHost() {
  const capabilities =
    resolveSessionMode() === "hosted"
      ? HOSTED_CAPABILITIES
      : STANDALONE_CAPABILITIES;

  return (
    <SessionGate caption="manage workspace permissions">
      {(client) => (
        <AdminPanel capabilities={capabilities} client={client} />
      )}
    </SessionGate>
  );
}
