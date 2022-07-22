export const InputNameEnum = {
  NAME: 'name',
  BIRTH: 'birth',
  PHONE: 'phone',
  EMAIL: 'email',
} as const;

export type InputNameType = typeof InputNameEnum[keyof typeof InputNameEnum];
