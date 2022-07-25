export const ApiUrlEnum = {
  REGION: '/region',
} as const;

export type ApiUrlType = typeof ApiUrlEnum[keyof typeof ApiUrlEnum];
export const InputNameEnum = {
  NAME: 'name',
  BIRTH: 'birth',
  PHONE: 'phone',
  EMAIL: 'email',
} as const;

export type InputNameType = typeof InputNameEnum[keyof typeof InputNameEnum];
