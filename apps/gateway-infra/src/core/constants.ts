export const ENVIRONMENT = process.env.ENVIRONMENT || "prd";
export const ORG_ID = process.env.ORG_ID || "aprovan";
export const PROJECT_ID = "gateway";

export const LOCALHOST_CALLBACK_URLS = [
  "http://localhost",
  "https://localhost",
  "http://localhost:4000",
  "http://localhost:3000",
];

export const COGNITO_DOMAIN_TEMPLATE = (domainPrefix: string, region: string) =>
  `https://${domainPrefix}.auth.${region}.amazoncognito.com`;

type AwsRegion = "us-east-1" | "us-east-2" | "us-west-1";
export const RegionShortCodeMap: Record<AwsRegion, string> = {
  "us-east-1": "use1",
  "us-east-2": "use2",
  "us-west-1": "usw1",
};
export type RegionShortCode = keyof typeof RegionShortCodeMap | "glb";
export const AWS_REGION = (process.env.AWS_REGION || "us-east-1") as AwsRegion;
export const REGION_SHORT_CODE: RegionShortCode = RegionShortCodeMap[AWS_REGION] as RegionShortCode;
