/**
 * Runtime availability probes for catalog entries that declare
 * `availabilityProbe` (macos-native-providers D3). Hosts register runners;
 * bind and resolve refuse when a probe reports anything other than available.
 */

import type { AvailabilityProbeId } from "@utdk/common/compat";
import { ServiceError } from "../kernel/index.js";

export type AvailabilityProbeResult =
  | { state: "available" }
  | { state: "unsupported"; reason: string }
  | { state: "disabled"; reason: string; remedy?: string }
  | { state: "unavailable"; reason: string };

export type AvailabilityProbeRunner = (
  id: AvailabilityProbeId,
) => Promise<AvailabilityProbeResult>;

/** Format a non-available probe result for operator-facing bind errors. */
export function formatProbeRefusal(result: Exclude<AvailabilityProbeResult, { state: "available" }>): string {
  switch (result.state) {
    case "unsupported":
    case "unavailable":
      return result.reason;
    case "disabled":
      return result.remedy ? `${result.reason} (${result.remedy})` : result.reason;
  }
}

/**
 * Run a probe (or refuse when the host registered none). Returns only when
 * the capability is available; otherwise throws ServiceError 501.
 */
export async function assertProbeAvailable(
  probeId: AvailabilityProbeId,
  runProbe: AvailabilityProbeRunner | undefined,
  label: string,
): Promise<void> {
  if (!runProbe) {
    throw new ServiceError(
      `${label}: availability probe "${probeId}" is not configured on this server`,
      501,
    );
  }
  const result = await runProbe(probeId);
  if (result.state === "available") return;
  throw new ServiceError(`${label}: ${formatProbeRefusal(result)}`, 501);
}
