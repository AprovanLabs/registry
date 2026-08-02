/**
 * Fetch credential/fixture values from AWS SSM Parameter Store.
 *
 * One SecureString per variable at `/aprovan/test/utdk-creds/<ENV_VAR_NAME>`
 * (see tech-plan.md D1/D2 in the `utdk-e2e-bench` change) — the name is exactly
 * the `.env.example` key, no translation table. This module knows nothing
 * about the provider matrix or dotenv format; it just resolves names to
 * values, chunked to AWS's `GetParameters` cap.
 */

import { GetParametersCommand, SSMClient } from "@aws-sdk/client-ssm";

/** AWS's hard cap on names per `GetParameters` call. */
const MAX_NAMES_PER_CALL = 10;

const DEFAULT_PREFIX = "/aprovan/test/utdk-creds/";

export interface SsmEnvOptions {
  /** Defaults to `new SSMClient({})` — the default SDK credential chain. */
  client?: SSMClient;
  /** Defaults to `/aprovan/test/utdk-creds/`. */
  parameterPrefix?: string;
}

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

/**
 * Fetch whichever of `names` have a value in SSM. Chunks to <=10 names per
 * `GetParameters` call. Returns only names that had a value — callers treat
 * absence as "blank", not as an error. Throws only on an API/auth failure.
 */
export async function fetchFromSsm(
  names: string[],
  options: SsmEnvOptions = {},
): Promise<Record<string, string>> {
  const client = options.client ?? new SSMClient({});
  const prefix = options.parameterPrefix ?? DEFAULT_PREFIX;

  if (names.length === 0) return {};

  const nameToParameter = new Map(names.map((name) => [`${prefix}${name}`, name]));
  const result: Record<string, string> = {};

  for (const batch of chunk([...nameToParameter.keys()], MAX_NAMES_PER_CALL)) {
    const response = await client.send(
      new GetParametersCommand({ Names: batch, WithDecryption: true }),
    );

    for (const parameter of response.Parameters ?? []) {
      if (!parameter.Name || parameter.Value === undefined) continue;
      const varName = nameToParameter.get(parameter.Name);
      if (varName) result[varName] = parameter.Value;
    }
  }

  return result;
}
