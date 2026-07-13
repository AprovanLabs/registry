import {
  ENVIRONMENT,
  ORG_ID,
  PROJECT_ID,
  REGION_SHORT_CODE,
} from "./constants.js";

const sanitizeName = (name: string): string =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "-");

export type NamerOptions = {
  universal?: boolean;
  global?: boolean;
};

const getId = (parts: string[], opts: NamerOptions): string => {
  const partsWithDefault = parts.length ? parts : ["main"];
  return sanitizeName(
    [
      ...(opts.universal ? [ORG_ID] : []),
      PROJECT_ID,
      ENVIRONMENT,
      opts.global ? "glb" : REGION_SHORT_CODE,
      ...partsWithDefault,
    ].join("-"),
  );
};

export class Namer {
  public constructor(private opts: NamerOptions = {}) {}

  public regional(...parts: string[]): string {
    return getId(parts, { ...this.opts, global: false });
  }

  public global(...parts: string[]): string {
    return getId(parts, { ...this.opts, global: true });
  }

  public universal(...parts: string[]): string {
    return getId(parts, { ...this.opts, universal: true });
  }
}

export const namer = (opts: NamerOptions = {}): Namer => new Namer(opts);
