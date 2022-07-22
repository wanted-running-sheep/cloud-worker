export const ApiUrlEnum = {
  REGION: '/region',
} as const;

export type ApiUrlType = typeof ApiUrlEnum[keyof typeof ApiUrlEnum];
