/**
 * Output formatting for @utdk/cli.
 *
 * Supports three modes:
 *   - json   : pretty-printed JSON (default when stdout is not a TTY)
 *   - table  : padded text table (default when stdout is a TTY)
 *   - agent  : compact single-line JSON with no ANSI escapes
 */

export type OutputMode = "json" | "table" | "agent";

/** Detect the default output mode based on whether stdout is a TTY. */
export function defaultOutputMode(): OutputMode {
  return process.stdout.isTTY ? "table" : "json";
}

// ---------------------------------------------------------------------------
// JSON output
// ---------------------------------------------------------------------------

export function formatJson(data: unknown, compact = false): string {
  return compact ? JSON.stringify(data) : JSON.stringify(data, null, 2);
}

// ---------------------------------------------------------------------------
// Table output
// ---------------------------------------------------------------------------

/** Render a two-column key/value table for a plain object. */
function renderObjectTable(obj: Record<string, unknown>): string {
  const entries = Object.entries(obj);
  const keyWidth = Math.min(
    40,
    Math.max(4, ...entries.map(([k]) => k.length)),
  );
  const lines: string[] = [];
  for (const [key, value] of entries) {
    const k = key.padEnd(keyWidth);
    const v = valueToCell(value);
    lines.push(`${k}  ${v}`);
  }
  return lines.join("\n");
}

/** Render an array of objects as a columnar table. */
function renderArrayTable(items: Record<string, unknown>[]): string {
  if (items.length === 0) return "(empty)";
  // Collect all column names from the first item (limit to 8 columns for readability)
  const allKeys = Object.keys(items[0] ?? {});
  const keys = allKeys.slice(0, 8);

  const widths: number[] = keys.map((k) => {
    const maxValue = Math.max(...items.map((r) => valueToCell(r[k]).length));
    return Math.min(60, Math.max(k.length, maxValue));
  });

  const header = keys.map((k, i) => k.padEnd(widths[i] ?? k.length)).join("  ");
  const divider = widths.map((w) => "─".repeat(w)).join("  ");
  const rows = items.map((item) =>
    keys
      .map((k, i) => valueToCell(item[k]).slice(0, widths[i] ?? 60).padEnd(widths[i] ?? 0))
      .join("  "),
  );

  return [header, divider, ...rows].join("\n");
}

function valueToCell(v: unknown): string {
  if (v === null || v === undefined) return "";
  if (typeof v === "string") return v;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (Array.isArray(v)) return `[${v.length} items]`;
  if (typeof v === "object") return "{…}";
  return String(v);
}

function isObjectArray(data: unknown): data is Record<string, unknown>[] {
  return (
    Array.isArray(data) &&
    data.length > 0 &&
    typeof data[0] === "object" &&
    data[0] !== null &&
    !Array.isArray(data[0])
  );
}

function isPlainObject(data: unknown): data is Record<string, unknown> {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}

export function formatTable(data: unknown): string {
  if (isObjectArray(data)) return renderArrayTable(data);
  if (isPlainObject(data)) return renderObjectTable(data);
  if (Array.isArray(data)) return data.map((item) => valueToCell(item)).join("\n");
  return valueToCell(data);
}

// ---------------------------------------------------------------------------
// Unified output writer
// ---------------------------------------------------------------------------

export function writeOutput(data: unknown, mode: OutputMode): void {
  let out: string;
  switch (mode) {
    case "json":
      out = formatJson(data, false);
      break;
    case "agent":
      out = formatJson(data, true);
      break;
    case "table":
      out = formatTable(data);
      break;
  }
  process.stdout.write(`${out}\n`);
}

// ---------------------------------------------------------------------------
// Help table helpers
// ---------------------------------------------------------------------------

/** Render a two-column list with fixed-width left column. */
export function renderHelpList(items: Array<[string, string]>, leftWidth = 30): string {
  return items
    .map(([left, right]) => `  ${left.padEnd(leftWidth)}  ${right}`)
    .join("\n");
}
