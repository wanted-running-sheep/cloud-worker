export const ApiUrlEnum = {
  REGION: '/region',
} as const;

export const Transportations = [
  '버스',
  '지하철',
  '택시',
  'KTX/기차',
  '도보',
  '자전거',
  '전동킥보드',
  '자가용',
] as const;

export type ApiUrlType = typeof ApiUrlEnum[keyof typeof ApiUrlEnum];
export type TransportationType = typeof Transportations[number];
