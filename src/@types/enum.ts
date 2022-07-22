export const ApiUrlEnum = {
  REGION: '/region',
} as const;

export const RoundButtonEnum = {
  TRANSPORTATION: 'transportation',
} as const;

export type ApiUrlType = typeof ApiUrlEnum[keyof typeof ApiUrlEnum];
export type RoundButtonType =
  typeof RoundButtonEnum[keyof typeof RoundButtonEnum];
