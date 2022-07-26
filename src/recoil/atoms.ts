import { DEFAULT_SELECTED_CITY } from '@/constants';
import { atom } from 'recoil';
import { UserInterface } from 'request';
export const applicantInfoState = atom<UserInterface>({
  key: 'applicantInfoState',
  default: {
    id: 0,
    name: 'name',
    gender: 'F',
    applyDate: '',
    birth: '',
    region: { city: DEFAULT_SELECTED_CITY, district: '' },
    phone: '',
    email: '',
    transportation: [],
    isWinning: false,
  },
});

export const modalTriggerState = atom<boolean>({
  key: 'modalTriggerState',
  default: false,
});

export const applicantValidationState = atom<{ [key: string]: boolean }>({
  key: 'applicantValidation',
  default: {},
});
