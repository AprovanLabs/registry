/**
 * Catalog host for registry-ui AdminPanel (local / standalone only).
 */

import { AdminPanel } from "@aprovan/registry-ui";
import { SessionGate } from "@/components/account/SessionGate";

export function AdminHost() {
  return (
    <SessionGate caption="manage workspace permissions">
      {(client) => <AdminPanel client={client} />}
    </SessionGate>
  );
}
