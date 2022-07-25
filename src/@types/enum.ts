export const ApiUrlEnum = {
  REGION: '/region',
  APPLYUSER: '/applyUser',
} as const;

export const InputNameEnum = {
  NAME: 'name',
  BIRTH: 'birth',
  PHONE: 'phone',
  EMAIL: 'email',
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

export const TitleIconEnum = {
  CLOSE: 'close',
  ARROW: 'arrow',
} as const;

export const ContentTypeEnum = {
  PRIVACY: 'privacy',
  THIRDPARTY: 'thirdParty',
};


export type ApiUrlType = typeof ApiUrlEnum[keyof typeof ApiUrlEnum];
export type InputNameType = typeof InputNameEnum[keyof typeof InputNameEnum];
export type TransportationType = typeof Transportations[number];
export type TitleType = typeof TitleIconEnum[keyof typeof TitleIconEnum];
export type ContentType = typeof ContentTypeEnum[keyof typeof ContentTypeEnum];
