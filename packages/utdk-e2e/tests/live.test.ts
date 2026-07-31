/**
 * Flows 2–4 — live tests against real provider APIs and a real workspace.
 *
 * Every case skips (never fails) when its credential is absent, so the file is
 * safe to run with a partially-filled `.env`. Filling in one more provider
 * turns one more skip into a real assertion — that is the whole design.
 *
 * Gateway flows additionally need `UTDK_E2E_GATEWAY_URL`.
 */

import { describe, expect, it } from "vitest";
import {
  gatewayConfig,
  runDirectFlow,
  runGatewayFlow,
  runCredentialStoreFlow,
  runGatewayCanary,
} from "../src/flows.js";
import { GATEWAY_CANARY, PROBED } from "../src/matrix.js";
import type { FlowOutcome } from "../src/flows.js";

const gateway = gatewayConfig();

/**
 * Fold a flow outcome into a vitest result. `skip` is reported through
 * `ctx.skip()` so the reason lands in the run output rather than being
 * silently counted as a pass.
 */
function settle(outcome: FlowOutcome, ctx: { skip: (note?: string) => void }): void {
  if (outcome.status === "skip") {
    ctx.skip(outcome.reason);
    return;
  }
  expect(outcome.status === "pass" ? "pass" : outcome.reason).toBe("pass");
}

describe("gateway canary", () => {
  it.skipIf(!gateway)(
    `${GATEWAY_CANARY.provider}/${GATEWAY_CANARY.op} round-trips with no credentials`,
    async (ctx) => {
      settle(await runGatewayCanary(gateway!), ctx);
    },
    { timeout: 120_000 },
  );
});

describe.each(PROBED.map((entry) => [entry.id, entry] as const))("live: %s", (_id, entry) => {
  it(
    "direct SDK reaches the API",
    async (ctx) => {
      settle(await runDirectFlow(entry), ctx);
    },
    { timeout: 60_000 },
  );

  it.skipIf(!gateway)(
    "gateway proxies with an ephemeral credential",
    async (ctx) => {
      settle(await runGatewayFlow(entry, gateway!), ctx);
    },
    { timeout: 60_000 },
  );

  it.skipIf(!gateway)(
    "stored credential resolves through the workspace",
    async (ctx) => {
      settle(await runCredentialStoreFlow(entry, gateway!), ctx);
    },
    { timeout: 60_000 },
  );
});
