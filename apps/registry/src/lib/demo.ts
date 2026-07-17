/**
 * Homepage demo — a real sandbox run against free, keyless APIs.
 *
 * The demo script executes in the same sandboxed iframe as the playground,
 * but its transport maps namespace calls to Open-Meteo's public endpoints
 * (CORS-enabled, no credentials), so anonymous visitors watch a genuine
 * execution: spans, latency, logs, results.
 */

import type { Transport } from "@aprovan/runtime";

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

export const DEMO_CITIES = ["Tokyo", "Nairobi", "Reykjavík", "São Paulo", "Sydney"];

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

/** Transport that fetches Open-Meteo's free endpoints directly. */
export function createDemoTransport(): Transport {
  return {
    async call(provider, operation, args) {
      const endpoint = DEMO_ENDPOINTS[`${provider}/${operation}`];
      if (!endpoint) {
        throw new Error(
          `The homepage demo only maps Open-Meteo endpoints (got ${provider}.${operation}).`,
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
