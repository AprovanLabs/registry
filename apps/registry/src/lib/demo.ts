/**
 * Homepage demo — a real sandbox run against free, keyless APIs.
 *
 * The demo script executes in the same sandboxed iframe as the playground,
 * but its transport maps namespace calls to Open-Meteo's public endpoints
 * (CORS-enabled, no credentials), so anonymous visitors watch a genuine
 * execution: spans, latency, logs, results.
 */

import type { Transport } from "@utdk/remote";

export const DEMO_SCRIPT = `import geocoding from 'open-meteo/geocoding';
import forecast from 'open-meteo/forecast';

export default async function weather({ city }) {
  // Resolve the city to coordinates
  const places = await geocoding.search({ name: city, count: 1 });
  const { latitude, longitude, name, country } = places.results[0];

  // Fetch current conditions
  const report = await forecast.get({
    latitude,
    longitude,
    current: 'temperature_2m,wind_speed_10m',
  });

  console.log(\`\${name}, \${country}: \${report.current.temperature_2m}°C\`);
  return { city: name, temperature: report.current.temperature_2m };
}
`;

export const DEFAULT_DEMO_CITY = "Tokyo";

export interface CitySuggestion {
  id: number;
  name: string;
  /** Region/state, when the geocoder knows one. */
  admin1?: string;
  country?: string;
}

/**
 * City autocomplete against the same keyless geocoding API the demo script
 * calls — the suggestions themselves are a taste of the provider.
 */
export async function fetchCitySuggestions(
  query: string,
  signal?: AbortSignal,
): Promise<CitySuggestion[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?${new URLSearchParams({
      name: trimmed,
      count: "5",
    }).toString()}`,
    { signal },
  );
  if (!response.ok) return [];
  const data = (await response.json()) as { results?: CitySuggestion[] };
  return (data.results ?? []).map(({ id, name, admin1, country }) => ({
    id,
    name,
    admin1,
    country,
  }));
}

/**
 * Keyed by `<namespace>.<procedure>`, normalised.
 *
 * The sandbox dispatches `transport.call(namespace, procedure, args)` where the
 * namespace comes from the import specifier (`open-meteo/geocoding`) and the
 * procedure is the dot-joined member path (`search`). The lookup used to build
 * `` `${provider}/${operation}` `` — `open-meteo/geocoding/search` — while this
 * map was written with a dot before the procedure, so nothing ever matched and
 * every run failed. The thrown message used a *third* spelling
 * (`${provider}.${operation}`) which happened to equal the map key, so the error
 * looked like the key was present. Normalising both sides is what stops that
 * class of typo from silently returning undefined.
 */
const DEMO_ENDPOINTS: Record<string, (args: Record<string, unknown>) => string> = {
  "open-meteo/geocoding.search": (args) =>
    `https://geocoding-api.open-meteo.com/v1/search?${new URLSearchParams({
      name: String(args["name"] ?? ""),
      count: String(args["count"] ?? 1),
    }).toString()}`,
  "open-meteo/forecast.get": (args) =>
    `https://api.open-meteo.com/v1/forecast?${new URLSearchParams({
      latitude: String(args["latitude"] ?? ""),
      longitude: String(args["longitude"] ?? ""),
      current: String(args["current"] ?? "temperature_2m"),
    }).toString()}`,
};

/** One spelling for a call, whichever separator the caller used. */
function demoKey(namespace: string, procedure: string): string {
  return `${namespace}.${procedure}`.replace(/\/+/g, "/").replace(/\.+/g, ".");
}

/** Transport that fetches Open-Meteo's free endpoints directly. */
export function createDemoTransport(): Transport {
  return {
    async call(provider, operation, args) {
      const key = demoKey(provider, operation);
      const endpoint = DEMO_ENDPOINTS[key];
      if (!endpoint) {
        // Quote the key actually looked up, not a re-spelling of it — the old
        // message printed a different join and sent debugging the wrong way.
        throw new Error(
          `The homepage demo only maps Open-Meteo endpoints (no mapping for "${key}").`,
        );
      }
      const response = await fetch(endpoint(args));
      if (!response.ok) {
        throw new Error(`Open-Meteo request failed (${response.status})`);
      }
      return response.json() as Promise<unknown>;
    },
  };
}
