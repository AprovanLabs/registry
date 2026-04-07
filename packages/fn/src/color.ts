import colorName from "color-name";

type Rgb = {
  b: number;
  g: number;
  r: number;
};

type Hsl = {
  h: number;
  l: number;
  s: number;
};

type Hsv = {
  h: number;
  s: number;
  v: number;
};

type Cmyk = {
  c: number;
  k: number;
  m: number;
  y: number;
};

type InputRecord = Record<string, unknown>;

export type ColorStringInput =
  | string
  | {
      color?: string;
      hex?: string;
      value?: string;
    };

export type AnalogousColorResult = {
  base: string;
  colors: [string, string, string, string, string];
};

const namedColors = colorName as Record<string, [number, number, number]>;

function isRecord(value: unknown): value is InputRecord {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function round(value: number, precision = 2): number {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
}

function normalizeHex(input: string): string {
  const value = input.trim().replace(/^#/, "").toLowerCase();

  if (/^[0-9a-f]{3}$/u.test(value)) {
    return value
      .split("")
      .map((segment) => segment.repeat(2))
      .join("");
  }

  if (!/^[0-9a-f]{6}$/u.test(value)) {
    throw new Error(`Expected a valid hex color, received "${input}".`);
  }

  return value;
}

function getColorInput(input: unknown): string {
  if (typeof input === "string") {
    return `#${normalizeHex(input)}`;
  }

  if (isRecord(input)) {
    for (const key of ["color", "hex", "value"]) {
      const value = input[key];

      if (typeof value === "string") {
        return `#${normalizeHex(value)}`;
      }
    }
  }

  throw new Error("Expected a hex color input.");
}

function parseRgb(input: string): Rgb {
  const hex = normalizeHex(input);
  return {
    r: Number.parseInt(hex.slice(0, 2), 16),
    g: Number.parseInt(hex.slice(2, 4), 16),
    b: Number.parseInt(hex.slice(4, 6), 16),
  };
}

function toHexChannel(value: number): string {
  return clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0");
}

function rgbToHex(rgb: Rgb): string {
  return `#${toHexChannel(rgb.r)}${toHexChannel(rgb.g)}${toHexChannel(rgb.b)}`;
}

function rgbToHsl(rgb: Rgb): Hsl {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  const lightness = (max + min) / 2;
  let hue = 0;
  let saturation = 0;

  if (delta !== 0) {
    saturation = delta / (1 - Math.abs(2 * lightness - 1));

    switch (max) {
      case r:
        hue = 60 * (((g - b) / delta) % 6);
        break;
      case g:
        hue = 60 * ((b - r) / delta + 2);
        break;
      default:
        hue = 60 * ((r - g) / delta + 4);
        break;
    }
  }

  return {
    h: (hue + 360) % 360,
    s: saturation * 100,
    l: lightness * 100,
  };
}

function hslToRgb(hsl: Hsl): Rgb {
  const hue = ((hsl.h % 360) + 360) % 360;
  const saturation = clamp(hsl.s, 0, 100) / 100;
  const lightness = clamp(hsl.l, 0, 100) / 100;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
  const match = lightness - chroma / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (hue < 60) {
    r = chroma;
    g = x;
  } else if (hue < 120) {
    r = x;
    g = chroma;
  } else if (hue < 180) {
    g = chroma;
    b = x;
  } else if (hue < 240) {
    g = x;
    b = chroma;
  } else if (hue < 300) {
    r = x;
    b = chroma;
  } else {
    r = chroma;
    b = x;
  }

  return {
    r: (r + match) * 255,
    g: (g + match) * 255,
    b: (b + match) * 255,
  };
}

function rgbToHsv(rgb: Rgb): Hsv {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let hue = 0;

  if (delta !== 0) {
    switch (max) {
      case r:
        hue = 60 * (((g - b) / delta) % 6);
        break;
      case g:
        hue = 60 * ((b - r) / delta + 2);
        break;
      default:
        hue = 60 * ((r - g) / delta + 4);
        break;
    }
  }

  return {
    h: (hue + 360) % 360,
    s: max === 0 ? 0 : (delta / max) * 100,
    v: max * 100,
  };
}

function hsvToRgb(hsv: Hsv): Rgb {
  const hue = ((hsv.h % 360) + 360) % 360;
  const saturation = clamp(hsv.s, 0, 100) / 100;
  const value = clamp(hsv.v, 0, 100) / 100;
  const chroma = value * saturation;
  const x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
  const match = value - chroma;
  let r = 0;
  let g = 0;
  let b = 0;

  if (hue < 60) {
    r = chroma;
    g = x;
  } else if (hue < 120) {
    r = x;
    g = chroma;
  } else if (hue < 180) {
    g = chroma;
    b = x;
  } else if (hue < 240) {
    g = x;
    b = chroma;
  } else if (hue < 300) {
    r = x;
    b = chroma;
  } else {
    r = chroma;
    b = x;
  }

  return {
    r: (r + match) * 255,
    g: (g + match) * 255,
    b: (b + match) * 255,
  };
}

function rgbToCmyk(rgb: Rgb): Cmyk {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const key = 1 - Math.max(r, g, b);

  if (key === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }

  return {
    c: ((1 - r - key) / (1 - key)) * 100,
    m: ((1 - g - key) / (1 - key)) * 100,
    y: ((1 - b - key) / (1 - key)) * 100,
    k: key * 100,
  };
}

function cmykToRgb(cmyk: Cmyk): Rgb {
  const c = clamp(cmyk.c, 0, 100) / 100;
  const m = clamp(cmyk.m, 0, 100) / 100;
  const y = clamp(cmyk.y, 0, 100) / 100;
  const k = clamp(cmyk.k, 0, 100) / 100;

  return {
    r: 255 * (1 - c) * (1 - k),
    g: 255 * (1 - m) * (1 - k),
    b: 255 * (1 - y) * (1 - k),
  };
}

function rotateHex(hex: string, degrees: number): string {
  const hsl = rgbToHsl(parseRgb(hex));
  return rgbToHex(hslToRgb({ ...hsl, h: hsl.h + degrees }));
}

function adjustLightness(hex: string, amount: number): string {
  const hsl = rgbToHsl(parseRgb(hex));
  return rgbToHex(hslToRgb({ ...hsl, l: clamp(hsl.l + amount, 0, 100) }));
}

function adjustSaturation(hex: string, amount: number): string {
  const hsl = rgbToHsl(parseRgb(hex));
  return rgbToHex(hslToRgb({ ...hsl, s: clamp(hsl.s + amount, 0, 100) }));
}

function getPercent(record: InputRecord, keys: readonly string[], defaultValue: number): number {
  for (const key of keys) {
    const value = record[key];

    if (typeof value === "number") {
      return value;
    }
  }

  return defaultValue;
}

function getBlendInput(input: unknown): { amount: number; colorA: string; colorB: string } {
  if (Array.isArray(input) && input.length >= 2) {
    return {
      colorA: getColorInput(input[0]),
      colorB: getColorInput(input[1]),
      amount: 50,
    };
  }

  if (isRecord(input)) {
    return {
      colorA: getColorInput(input.colorA ?? input.left),
      colorB: getColorInput(input.colorB ?? input.right),
      amount: clamp(getPercent(input, ["amount", "mix", "weight"], 50), 0, 100),
    };
  }

  throw new Error("Expected two colors to blend.");
}

function mixColors(colorA: string, colorB: string, amount: number): string {
  const left = parseRgb(colorA);
  const right = parseRgb(colorB);
  const ratio = clamp(amount, 0, 100) / 100;

  return rgbToHex({
    r: left.r + (right.r - left.r) * ratio,
    g: left.g + (right.g - left.g) * ratio,
    b: left.b + (right.b - left.b) * ratio,
  });
}

function getGradientInput(input: unknown): { colorA: string; colorB: string; steps: number } {
  if (!isRecord(input)) {
    throw new Error("Expected gradient inputs.");
  }

  return {
    colorA: getColorInput(input.colorA ?? input.from ?? input.start),
    colorB: getColorInput(input.colorB ?? input.to ?? input.end),
    steps: clamp(Number(input.steps ?? input.count ?? 5), 2, 32),
  };
}

function getSeed(input: unknown): number | undefined {
  return isRecord(input) && typeof input.seed === "number" ? input.seed : undefined;
}

function seededRandom(seed: number): number {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
}

function getLuminance(hex: string): number {
  const rgb = parseRgb(hex);
  const [red, green, blue] = [rgb.r, rgb.g, rgb.b].map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });

  if (red === undefined || green === undefined || blue === undefined) {
    throw new Error("Expected a valid hex color.");
  }

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function getTwoColors(input: unknown): [string, string] {
  if (Array.isArray(input) && input.length >= 2) {
    return [getColorInput(input[0]), getColorInput(input[1])];
  }

  if (isRecord(input)) {
    return [getColorInput(input.colorA ?? input.left ?? input.foreground), getColorInput(input.colorB ?? input.right ?? input.background)];
  }

  throw new Error("Expected two colors.");
}

export default {
  analogous: async (input: ColorStringInput): Promise<AnalogousColorResult> => {
    const base = getColorInput(input);
    return {
      base,
      colors: [rotateHex(base, -60), rotateHex(base, -30), base, rotateHex(base, 30), rotateHex(base, 60)] as const,
    };
  },
  blend: async (input: { amount?: number; colorA?: string; colorB?: string; left?: string; right?: string } | [string, string]): Promise<string> => {
    const { colorA, colorB, amount } = getBlendInput(input);
    return mixColors(colorA, colorB, amount);
  },
  cmykToHex: async (input) => {
    if (!isRecord(input)) {
      throw new Error("Expected c, m, y, and k inputs.");
    }

    return rgbToHex(
      cmykToRgb({
        c: Number(input.c ?? 0),
        m: Number(input.m ?? 0),
        y: Number(input.y ?? 0),
        k: Number(input.k ?? 0),
      }),
    );
  },
  complement: async (input: ColorStringInput): Promise<string> => rotateHex(getColorInput(input), 180),
  contrastRatio: async (input) => {
    const [left, right] = getTwoColors(input);
    const l1 = getLuminance(left);
    const l2 = getLuminance(right);
    const brightest = Math.max(l1, l2);
    const darkest = Math.min(l1, l2);
    return round((brightest + 0.05) / (darkest + 0.05), 3);
  },
  darken: async (input) => {
    if (!isRecord(input)) {
      throw new Error("Expected color and amount inputs.");
    }

    return adjustLightness(getColorInput(input), -Math.abs(getPercent(input, ["amount", "percent"], 10)));
  },
  desaturate: async (input) => {
    if (!isRecord(input)) {
      throw new Error("Expected color and amount inputs.");
    }

    return adjustSaturation(getColorInput(input), -Math.abs(getPercent(input, ["amount", "percent"], 10)));
  },
  gradient: async (input) => {
    const { colorA, colorB, steps } = getGradientInput(input);
    return Array.from({ length: steps }, (_, index) => mixColors(colorA, colorB, (index / (steps - 1)) * 100));
  },
  shade: async (input) => {
    const base = getColorInput(input);
    return [10, 20, 30, 40, 50].map((amount) => adjustLightness(base, -amount));
  },
  tint: async (input) => {
    const base = getColorInput(input);
    return [10, 20, 30, 40, 50].map((amount) => adjustLightness(base, amount));
  },
  luminance: async (input) => round(getLuminance(getColorInput(input)), 4),
  grayscale: async (input) => {
    const rgb = parseRgb(getColorInput(input));
    const gray = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
    return rgbToHex({ r: gray, g: gray, b: gray });
  },
  hexToCmyk: async (input) => {
    const cmyk = rgbToCmyk(parseRgb(getColorInput(input)));
    return {
      c: round(cmyk.c),
      m: round(cmyk.m),
      y: round(cmyk.y),
      k: round(cmyk.k),
    };
  },
  hexToHsl: async (input) => {
    const hsl = rgbToHsl(parseRgb(getColorInput(input)));
    return {
      h: round(hsl.h),
      s: round(hsl.s),
      l: round(hsl.l),
    };
  },
  hexToHsv: async (input) => {
    const hsv = rgbToHsv(parseRgb(getColorInput(input)));
    return {
      h: round(hsv.h),
      s: round(hsv.s),
      v: round(hsv.v),
    };
  },
  hslToHex: async (input) => {
    if (!isRecord(input)) {
      throw new Error("Expected h, s, and l inputs.");
    }

    return rgbToHex(
      hslToRgb({
        h: Number(input.h ?? 0),
        s: Number(input.s ?? 0),
        l: Number(input.l ?? 0),
      }),
    );
  },
  hsvToHex: async (input) => {
    if (!isRecord(input)) {
      throw new Error("Expected h, s, and v inputs.");
    }

    return rgbToHex(
      hsvToRgb({
        h: Number(input.h ?? 0),
        s: Number(input.s ?? 0),
        v: Number(input.v ?? 0),
      }),
    );
  },
  invert: async (input) => {
    const rgb = parseRgb(getColorInput(input));
    return rgbToHex({ r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b });
  },
  isValidHex: async (input) => {
    try {
      getColorInput(input);
      return true;
    } catch {
      return false;
    }
  },
  lighten: async (input) => {
    if (!isRecord(input)) {
      throw new Error("Expected color and amount inputs.");
    }

    return adjustLightness(getColorInput(input), Math.abs(getPercent(input, ["amount", "percent"], 10)));
  },
  nameToHex: async (input) => {
    const value = isRecord(input) ? input.name : input;

    if (typeof value !== "string") {
      throw new Error("Expected a CSS color name.");
    }

    const rgb = namedColors[value.trim().toLowerCase()];

    if (!rgb) {
      throw new Error(`Unknown CSS color name "${value}".`);
    }

    return rgbToHex({ r: rgb[0], g: rgb[1], b: rgb[2] });
  },
  random: async (input?: { seed?: number } | undefined): Promise<string> => {
    const seed = getSeed(input);
    const next = seed === undefined ? Math.random() : seededRandom(seed);
    return rgbToHex({
      r: Math.floor(next * 255),
      g: Math.floor(((seed ?? next * 7919) % 1) * 255),
      b: Math.floor((((seed ?? next * 104729) * 1.37) % 1) * 255),
    });
  },
  saturate: async (input) => {
    if (!isRecord(input)) {
      throw new Error("Expected color and amount inputs.");
    }

    return adjustSaturation(getColorInput(input), Math.abs(getPercent(input, ["amount", "percent"], 10)));
  },
  splitComplementary: async (input) => {
    const base = getColorInput(input);
    return {
      base,
      colors: [base, rotateHex(base, 150), rotateHex(base, 210)],
    };
  },
  tetradic: async (input) => {
    const base = getColorInput(input);
    return {
      base,
      colors: [base, rotateHex(base, 90), rotateHex(base, 180), rotateHex(base, 270)],
    };
  },
  triadic: async (input) => {
    const base = getColorInput(input);
    return {
      base,
      colors: [base, rotateHex(base, 120), rotateHex(base, 240)],
    };
  },
};
