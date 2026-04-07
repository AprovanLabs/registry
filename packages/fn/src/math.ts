import Decimal from "decimal.js";

type NumberRecord = Record<string, unknown>;

type NumberListInput =
  | number[]
  | {
      numbers?: number[];
      values?: number[];
    };

type UnaryNumberInput =
  | number
  | {
      input?: number;
      number?: number;
      value?: number;
      x?: number;
    };

type BinaryNumberInput =
  | [number, number]
  | {
      a?: number;
      b?: number;
      left?: number;
      right?: number;
      x?: number;
      y?: number;
    };

function isRecord(value: unknown): value is NumberRecord {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function toDecimal(value: unknown, label = "value"): Decimal {
  if (typeof value === "number" || typeof value === "string") {
    try {
      return new Decimal(value);
    } catch {
      throw new Error(`Expected ${label} to be numeric.`);
    }
  }

  throw new Error(`Expected ${label} to be numeric.`);
}

function getFirstDefined(record: NumberRecord, keys: readonly string[]): unknown {
  for (const key of keys) {
    if (record[key] !== undefined) {
      return record[key];
    }
  }

  return undefined;
}

function getUnaryDecimal(input: unknown, keys: readonly string[] = ["value", "number", "input", "x", "n"]): Decimal {
  if (typeof input === "number" || typeof input === "string") {
    return toDecimal(input);
  }

  if (isRecord(input)) {
    return toDecimal(getFirstDefined(input, keys), keys[0] ?? "value");
  }

  throw new Error("Expected a numeric input.");
}

function getUnaryNumber(input: unknown, keys?: readonly string[]): number {
  return getUnaryDecimal(input, keys).toNumber();
}

function getBinaryDecimals(input: unknown): [Decimal, Decimal] {
  if (Array.isArray(input) && input.length >= 2) {
    return [toDecimal(input[0], "a"), toDecimal(input[1], "b")];
  }

  if (isRecord(input)) {
    const left = getFirstDefined(input, ["a", "left", "x", "value", "dividend", "degrees"]);
    const right = getFirstDefined(input, ["b", "right", "y", "other", "divisor", "base"]);
    return [toDecimal(left, "a"), toDecimal(right, "b")];
  }

  throw new Error("Expected two numeric inputs.");
}

function getNumberList(input: unknown): Decimal[] {
  if (Array.isArray(input)) {
    return input.map((value, index) => toDecimal(value, `numbers[${index}]`));
  }

  if (isRecord(input)) {
    const value = getFirstDefined(input, ["numbers", "values", "items"]);

    if (Array.isArray(value)) {
      return value.map((item, index) => toDecimal(item, `numbers[${index}]`));
    }
  }

  throw new Error("Expected an array of numbers.");
}

function getCoordinatePair(input: unknown): [[number, number], [number, number]] {
  if (Array.isArray(input) && input.length >= 4) {
    return [
      [Number(input[0]), Number(input[1])],
      [Number(input[2]), Number(input[3])],
    ];
  }

  if (isRecord(input)) {
    if (Array.isArray(input.points) && input.points.length >= 2) {
      const [left, right] = input.points;

      if (Array.isArray(left) && Array.isArray(right) && left.length >= 2 && right.length >= 2) {
        return [
          [Number(left[0]), Number(left[1])],
          [Number(right[0]), Number(right[1])],
        ];
      }
    }

    return [
      [Number(getFirstDefined(input, ["x1", "fromX", "ax"])), Number(getFirstDefined(input, ["y1", "fromY", "ay"]))],
      [Number(getFirstDefined(input, ["x2", "toX", "bx"])), Number(getFirstDefined(input, ["y2", "toY", "by"]))],
    ];
  }

  throw new Error("Expected point coordinates.");
}

function getClampInput(input: unknown): { max: Decimal; min: Decimal; value: Decimal } {
  if (Array.isArray(input) && input.length >= 3) {
    return {
      value: toDecimal(input[0], "value"),
      min: toDecimal(input[1], "min"),
      max: toDecimal(input[2], "max"),
    };
  }

  if (isRecord(input)) {
    return {
      value: toDecimal(getFirstDefined(input, ["value", "number", "x"]), "value"),
      min: toDecimal(getFirstDefined(input, ["min", "minimum", "lower"]), "min"),
      max: toDecimal(getFirstDefined(input, ["max", "maximum", "upper"]), "max"),
    };
  }

  throw new Error("Expected value, min, and max inputs.");
}

function getBetweenInput(input: unknown): { max: Decimal; min: Decimal; value: Decimal } {
  return getClampInput(input);
}

function toRankings(values: Decimal[]): number[] {
  const ranked = values
    .map((value, index) => ({ index, value }))
    .sort((left, right) => right.value.comparedTo(left.value));
  const output = new Array<number>(values.length);
  let rank = 1;

  ranked.forEach((entry, index) => {
    if (index > 0 && entry.value.comparedTo(ranked[index - 1]?.value ?? entry.value) !== 0) {
      rank = index + 1;
    }

    output[entry.index] = rank;
  });

  return output;
}

function decimalToNumber(value: Decimal): number {
  return value.toNumber();
}

function requirePositiveInteger(input: unknown, label = "number"): number {
  const value = getUnaryDecimal(input).toNumber();

  if (!Number.isInteger(value) || value < 0) {
    throw new Error(`Expected ${label} to be a non-negative integer.`);
  }

  return value;
}

export default {
  abs: async (input: UnaryNumberInput) => Math.abs(getUnaryNumber(input)),
  add: async (input: NumberListInput) => decimalToNumber(getNumberList(input).reduce((sum, value) => sum.plus(value), new Decimal(0))),
  average: async (input: NumberListInput) => {
    const values = getNumberList(input);

    if (values.length === 0) {
      throw new Error("Expected at least one number.");
    }

    return decimalToNumber(values.reduce((sum, value) => sum.plus(value), new Decimal(0)).div(values.length));
  },
  ceil: async (input) => Math.ceil(getUnaryNumber(input)),
  clamp: async (input) => {
    const { value, min, max } = getClampInput(input);
    return decimalToNumber(Decimal.max(min, Decimal.min(max, value)));
  },
  compare: async (input) => {
    const [left, right] = getBinaryDecimals(input);
    return left.comparedTo(right);
  },
  compareDecimals: async (input) => {
    const [left, right] = getBinaryDecimals(input);
    return left.comparedTo(right);
  },
  cos: async (input) => Math.cos(getUnaryNumber(input)),
  cube: async (input) => {
    const value = getUnaryDecimal(input);
    return decimalToNumber(value.pow(3));
  },
  cubeRoot: async (input) => {
    const value = getUnaryNumber(input);
    return Math.cbrt(value);
  },
  degToRad: async (input) => (getUnaryNumber(input, ["degrees", "value", "number"]) * Math.PI) / 180,
  distance: async (input) => {
    const [[x1, y1], [x2, y2]] = getCoordinatePair(input);
    return Math.hypot(x2 - x1, y2 - y1);
  },
  divide: async (input) => {
    const [left, right] = getBinaryDecimals(input);
    return decimalToNumber(left.div(right));
  },
  exp: async (input) => Math.exp(getUnaryNumber(input)),
  factorial: async (input) => {
    const value = requirePositiveInteger(input);
    let result = new Decimal(1);

    for (let index = 2; index <= value; index += 1) {
      result = result.mul(index);
    }

    return decimalToNumber(result);
  },
  fibonacci: async (input) => {
    const value = requirePositiveInteger(input, "n");

    if (value <= 1) {
      return value;
    }

    let previous = 0;
    let current = 1;

    for (let index = 2; index <= value; index += 1) {
      const next = previous + current;
      previous = current;
      current = next;
    }

    return current;
  },
  floor: async (input) => Math.floor(getUnaryNumber(input)),
  gcd: async (input) => {
    const values = getNumberList(input).map((value) => Math.abs(value.toNumber()));
    const gcdTwo = (left: number, right: number): number => (right === 0 ? left : gcdTwo(right, left % right));
    return values.reduce((accumulator, value) => gcdTwo(accumulator, value));
  },
  hypotenuse: async (input) => {
    const [left, right] = getBinaryDecimals(input);
    return Math.hypot(left.toNumber(), right.toNumber());
  },
  isBetween: async (input) => {
    const { value, min, max } = getBetweenInput(input);
    return value.greaterThanOrEqualTo(min) && value.lessThanOrEqualTo(max);
  },
  isDivisible: async (input) => {
    const [left, right] = getBinaryDecimals(input);
    return left.mod(right).equals(0);
  },
  isEven: async (input) => getUnaryDecimal(input).mod(2).equals(0),
  isFibonacci: async (input) => {
    const value = requirePositiveInteger(input);
    const isPerfectSquare = (candidate: number) => Number.isInteger(Math.sqrt(candidate));
    return isPerfectSquare(5 * value * value + 4) || isPerfectSquare(5 * value * value - 4);
  },
  isInteger: async (input) => getUnaryDecimal(input).isInteger(),
  isNegative: async (input) => getUnaryDecimal(input).isNegative(),
  isOdd: async (input) => !getUnaryDecimal(input).mod(2).equals(0),
  isPerfectSquare: async (input) => {
    const value = getUnaryNumber(input);
    return value >= 0 && Number.isInteger(Math.sqrt(value));
  },
  isPositive: async (input) => getUnaryDecimal(input).greaterThan(0),
  isPrime: async (input) => {
    const value = requirePositiveInteger(input);

    if (value < 2) {
      return false;
    }

    if (value === 2) {
      return true;
    }

    if (value % 2 === 0) {
      return false;
    }

    for (let index = 3; index <= Math.sqrt(value); index += 2) {
      if (value % index === 0) {
        return false;
      }
    }

    return true;
  },
  isZero: async (input) => getUnaryDecimal(input).equals(0),
  lcm: async (input) => {
    const values = getNumberList(input).map((value) => Math.abs(value.toNumber()));
    const gcdTwo = (left: number, right: number): number => (right === 0 ? left : gcdTwo(right, left % right));
    const lcmTwo = (left: number, right: number): number => (left * right) / gcdTwo(left, right);
    return values.reduce((accumulator, value) => lcmTwo(accumulator, value));
  },
  log: async (input) => {
    if (isRecord(input)) {
      const value = getUnaryNumber(input, ["value", "number", "x"]);
      const base = input.base === undefined ? Math.E : Number(input.base);
      return Math.log(value) / Math.log(base);
    }

    return Math.log(getUnaryNumber(input));
  },
  log10: async (input) => Math.log10(getUnaryNumber(input)),
  log2: async (input) => Math.log2(getUnaryNumber(input)),
  max: async (input) => Math.max(...getNumberList(input).map(decimalToNumber)),
  min: async (input) => Math.min(...getNumberList(input).map(decimalToNumber)),
  modulo: async (input) => {
    const [left, right] = getBinaryDecimals(input);
    return decimalToNumber(left.mod(right));
  },
  multiply: async (input) => decimalToNumber(getNumberList(input).reduce((product, value) => product.mul(value), new Decimal(1))),
  nthRoot: async (input) => {
    if (!isRecord(input)) {
      throw new Error("Expected value and n inputs.");
    }

    const value = Number(getFirstDefined(input, ["value", "number", "x"]));
    const degree = Number(getFirstDefined(input, ["n", "degree", "root"]));
    return value ** (1 / degree);
  },
  percentage: async (input) => {
    if (!isRecord(input)) {
      throw new Error("Expected part and total inputs.");
    }

    const part = toDecimal(getFirstDefined(input, ["part", "value", "amount"]), "part");
    const total = toDecimal(getFirstDefined(input, ["total", "whole", "max"]), "total");
    return decimalToNumber(part.div(total).mul(100));
  },
  power: async (input) => {
    const [left, right] = getBinaryDecimals(input);
    return decimalToNumber(left.pow(right));
  },
  radToDeg: async (input) => (getUnaryNumber(input, ["radians", "value", "number"]) * 180) / Math.PI,
  rank: async (input) => toRankings(getNumberList(input)),
  round: async (input) => Math.round(getUnaryNumber(input)),
  sign: async (input) => Math.sign(getUnaryNumber(input)),
  sin: async (input) => Math.sin(getUnaryNumber(input)),
  square: async (input) => {
    const value = getUnaryDecimal(input);
    return decimalToNumber(value.pow(2));
  },
  sqrt: async (input) => Math.sqrt(getUnaryNumber(input)),
  subtract: async (input) => {
    const [left, right] = getBinaryDecimals(input);
    return decimalToNumber(left.minus(right));
  },
  sum: async (input) => decimalToNumber(getNumberList(input).reduce((sum, value) => sum.plus(value), new Decimal(0))),
  tan: async (input) => Math.tan(getUnaryNumber(input)),
  truncate: async (input) => Math.trunc(getUnaryNumber(input)),
};
